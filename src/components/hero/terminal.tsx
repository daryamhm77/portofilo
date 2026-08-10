"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const CMD_WHOAMI = "whoami";
const CMD_STACK = "stack";
const CMD_STATUS = "status";

const STACK = ["NestJS", "Next.js", "PostgreSQL", "Redis", "Docker", "RabbitMQ"];

const TYPE_SPEED = 48;

export function Terminal() {
  const [whoamiTyped, setWhoamiTyped] = useState(0);
  const [whoamiOut, setWhoamiOut] = useState(false);
  const [stackTyped, setStackTyped] = useState(0);
  const [stackOut, setStackOut] = useState(0);
  const [statusTyped, setStatusTyped] = useState(0);
  const [statusOut, setStatusOut] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => {
        setWhoamiTyped(CMD_WHOAMI.length);
        setWhoamiOut(true);
        setStackTyped(CMD_STACK.length);
        setStackOut(STACK.length);
        setStatusTyped(CMD_STATUS.length);
        setStatusOut(true);
      }, 0);
      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.push(t);
      return t;
    };

    const type = (
      setter: (n: number) => void,
      text: string,
      start: number,
      speed = TYPE_SPEED,
    ) => {
      for (let i = 1; i <= text.length; i += 1) {
        at(() => setter(i), start + i * speed);
      }
      return start + text.length * speed + speed;
    };

    let t = 400;
    t = type(setWhoamiTyped, CMD_WHOAMI, t);
    at(() => setWhoamiOut(true), t + 260);
    t += 540;

    t = type(setStackTyped, CMD_STACK, t);
    STACK.forEach((_, i) => {
      at(() => setStackOut(i + 1), t + 260 + i * 70);
    });
    t += STACK.length * 70 + 540;

    t = type(setStatusTyped, CMD_STATUS, t);
    at(() => setStatusOut(true), t + 260);

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  const stackDone = stackOut === STACK.length;

  const phase =
    !whoamiOut
      ? 1
      : stackOut === 0
        ? 2
        : !stackDone
          ? 3
          : 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="overflow-hidden rounded-2xl border border-edge bg-surface shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-subtle">darya@dev — zsh</span>
      </div>

      <div className="min-h-[340px] p-5 font-mono text-[13px] leading-6 sm:min-h-[360px] sm:p-6">
        <div className="whitespace-pre-wrap">
          <span className="text-accent">$ </span>
          {CMD_WHOAMI.slice(0, whoamiTyped)}
          {phase === 1 && <Cursor />}
        </div>
        {whoamiOut && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="pl-4 text-foreground"
          >
            darya@developer
          </motion.div>
        )}

        {whoamiOut && (
          <>
            <div className="whitespace-pre-wrap">
              <span className="text-accent">$ </span>
              {CMD_STACK.slice(0, stackTyped)}
              {(phase === 2 || phase === 3) && <Cursor />}
            </div>
            <div>
              {STACK.slice(0, stackOut).map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 text-muted"
                >
                  <span className="text-accent-strong">•</span> {item}
                </motion.div>
              ))}
            </div>
          </>
        )}

        {whoamiOut && stackDone && (
          <>
            <div className="whitespace-pre-wrap">
              <span className="text-accent">$ </span>
              {CMD_STATUS.slice(0, statusTyped)}
              {phase === 4 && <Cursor />}
            </div>
            {statusOut && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="pl-4 text-accent"
              >
                <span className="mr-2 inline-block h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
                Available for projects
              </motion.div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

function Cursor() {
  return (
    <span className="animate-blink ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] bg-accent" />
  );
}
