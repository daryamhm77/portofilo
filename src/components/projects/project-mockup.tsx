export function ProjectMockup({ title = "Store" }: { title?: string }) {
  return (
    <svg
      viewBox="0 0 800 450"
      className="h-auto w-full"
      role="img"
      aria-label={`${title} interface mockup`}
    >
      <defs>
        <linearGradient id="mock-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#131722" />
          <stop offset="100%" stopColor="#0d1017" />
        </linearGradient>
        <linearGradient id="mock-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      <rect width="800" height="450" fill="#0d1017" />

      <rect x="0" y="0" width="800" height="44" fill="#11141d" />
      <circle cx="22" cy="22" r="6" fill="#ff5f57" />
      <circle cx="44" cy="22" r="6" fill="#febc2e" />
      <circle cx="66" cy="22" r="6" fill="#28c840" />
      <rect x="96" y="13" width="560" height="18" rx="9" fill="#0a0c12" />
      <circle cx="112" cy="22" r="3" fill="#2a2f3a" />
      <rect x="122" y="19.5" width="130" height="5" rx="2.5" fill="#2a2f3a" />

      <rect x="0" y="44" width="170" height="406" fill="#0f1219" />
      <rect x="16" y="64" width="28" height="28" rx="8" fill="#1a1f2b" />
      <rect x="16" y="106" width="24" height="8" rx="4" fill="#3a4152" />
      <rect x="50" y="106" width="70" height="8" rx="4" fill="#2a2f3a" />
      <rect x="16" y="130" width="24" height="8" rx="4" fill="#3a4152" />
      <rect x="50" y="130" width="58" height="8" rx="4" fill="#2a2f3a" />
      <rect x="16" y="154" width="24" height="8" rx="4" fill="#3a4152" />
      <rect x="50" y="154" width="82" height="8" rx="4" fill="#2a2f3a" />
      <rect x="16" y="178" width="24" height="8" rx="4" fill="#3a4152" />
      <rect x="50" y="178" width="66" height="8" rx="4" fill="#2a2f3a" />
      <rect x="16" y="404" width="28" height="28" rx="14" fill="#1a1f2b" />
      <rect x="54" y="412" width="64" height="8" rx="4" fill="#2a2f3a" />
      <rect x="54" y="424" width="44" height="6" rx="3" fill="#1f2430" />

      <rect x="198" y="68" width="574" height="128" rx="14" fill="url(#mock-bg)" stroke="#1f2430" />
      <rect x="222" y="92" width="200" height="10" rx="5" fill="#3a4152" />
      <rect x="222" y="112" width="320" height="8" rx="4" fill="#2a2f3a" />
      <rect x="222" y="128" width="280" height="8" rx="4" fill="#2a2f3a" />
      <rect x="222" y="162" width="92" height="22" rx="11" fill="url(#mock-accent)" />

      <g>
        <rect x="198" y="216" width="178" height="140" rx="12" fill="#131722" stroke="#1f2430" />
        <rect x="216" y="234" width="120" height="80" rx="8" fill="#1a1f2b" />
        <rect x="216" y="250" width="46" height="12" rx="6" fill="#2a2f3a" />
        <rect x="216" y="268" width="80" height="12" rx="6" fill="#2a2f3a" />
        <rect x="216" y="322" width="56" height="8" rx="4" fill="#3a4152" />
        <rect x="286" y="318" width="64" height="16" rx="8" fill="url(#mock-accent)" opacity="0.9" />

        <rect x="396" y="216" width="178" height="140" rx="12" fill="#131722" stroke="#1f2430" />
        <rect x="414" y="234" width="120" height="80" rx="8" fill="#1a1f2b" />
        <rect x="414" y="250" width="46" height="12" rx="6" fill="#2a2f3a" />
        <rect x="414" y="268" width="80" height="12" rx="6" fill="#2a2f3a" />
        <rect x="414" y="322" width="56" height="8" rx="4" fill="#3a4152" />
        <rect x="484" y="318" width="64" height="16" rx="8" fill="url(#mock-accent)" opacity="0.9" />

        <rect x="594" y="216" width="178" height="140" rx="12" fill="#131722" stroke="#1f2430" />
        <rect x="612" y="234" width="120" height="80" rx="8" fill="#1a1f2b" />
        <rect x="612" y="250" width="46" height="12" rx="6" fill="#2a2f3a" />
        <rect x="612" y="268" width="80" height="12" rx="6" fill="#2a2f3a" />
        <rect x="612" y="322" width="56" height="8" rx="4" fill="#3a4152" />
        <rect x="682" y="318" width="64" height="16" rx="8" fill="url(#mock-accent)" opacity="0.9" />
      </g>
    </svg>
  );
}
