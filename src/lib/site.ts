export const SITE = {
  name: "WhisperVolt",
  tagline: "Code in silence. Power the future.",
  pill: "Software • Systems • Deep Tech",
  title: "WhisperVolt — Software & Deep-Tech Engineering Studio",
  description:
    "WhisperVolt is a software and deep-tech engineering studio building production-grade digital systems, distributed infrastructure, and hardware-integrated technologies.",
  url: "https://whispervolt.com",
  email: "hello@whispervolt.com",
  logo: "/brand/whispervolt-logo.png",
  headline: "Engineering the systems behind ambitious products.",
  story: "We engineer systems.",
} as const;

export const TEAM = {
  darya: {
    name: "Darya Mohammadi",
    role: "Backend & Full-Stack Developer",
    focus: "NestJS · Next.js · Distributed Systems",
    short: "Backend / Full-Stack",
    bio: "Backend and full-stack developer specializing in NestJS, Next.js, distributed systems, microservices, real-time applications and cloud infrastructure.",
    github: "https://github.com/daryamhm77",
    linkedin: "https://www.linkedin.com/in/darya-mohammadi7",
  },
  nima: {
    name: "Nima Mohammadi",
    role: "Frontend Developer & Deep-Tech Architect",
    focus: "Next.js · React · IC & Hardware Engineering",
    short: "Frontend / Deep-Tech",
    bio: "Frontend developer and deep-tech architect specializing in Next.js and React, with IC design, semiconductor engineering, embedded systems and electromagnetic simulation.",
    github: "https://github.com/NimaOBR",
    linkedin: "https://www.linkedin.com/in/nima-mohammadi-b5880122b",
  },
} as const;

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Technology", href: "/technology" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
] as const;
