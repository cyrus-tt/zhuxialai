interface CatIconProps {
  size?: number;
  className?: string;
}

export default function CatIcon({ size = 96, className = "" }: CatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left ear */}
      <path
        d="M25 55 L15 15 L45 40 Z"
        fill="#E8E0F5"
        stroke="#9B8EC4"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Left ear inner */}
      <path d="M26 48 L20 22 L40 40 Z" fill="#F5B8C4" opacity="0.6" />

      {/* Right ear */}
      <path
        d="M95 55 L105 15 L75 40 Z"
        fill="#E8E0F5"
        stroke="#9B8EC4"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Right ear inner */}
      <path d="M94 48 L100 22 L80 40 Z" fill="#F5B8C4" opacity="0.6" />

      {/* Head */}
      <ellipse
        cx="60"
        cy="68"
        rx="40"
        ry="36"
        fill="#E8E0F5"
        stroke="#9B8EC4"
        strokeWidth="2.5"
      />

      {/* Left eye */}
      <ellipse cx="44" cy="62" rx="6" ry="6.5" fill="#4A4458" />
      <ellipse cx="42" cy="60" rx="2.5" ry="2.5" fill="white" />
      <ellipse cx="46" cy="64" rx="1" ry="1" fill="white" opacity="0.6" />

      {/* Right eye */}
      <ellipse cx="76" cy="62" rx="6" ry="6.5" fill="#4A4458" />
      <ellipse cx="74" cy="60" rx="2.5" ry="2.5" fill="white" />
      <ellipse cx="78" cy="64" rx="1" ry="1" fill="white" opacity="0.6" />

      {/* Nose */}
      <path
        d="M57 74 L60 71 L63 74 Z"
        fill="#F5B8C4"
        stroke="#E8A0B0"
        strokeWidth="0.5"
      />

      {/* Mouth */}
      <path
        d="M60 74 Q55 80 50 78"
        stroke="#9B8EC4"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M60 74 Q65 80 70 78"
        stroke="#9B8EC4"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Left whiskers */}
      <line x1="12" y1="65" x2="36" y2="70" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <line x1="14" y1="73" x2="36" y2="74" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <line x1="16" y1="81" x2="37" y2="78" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

      {/* Right whiskers */}
      <line x1="108" y1="65" x2="84" y2="70" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <line x1="106" y1="73" x2="84" y2="74" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
      <line x1="104" y1="81" x2="83" y2="78" stroke="#9B8EC4" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="36" cy="76" rx="6" ry="4" fill="#F5B8C4" opacity="0.35" />
      <ellipse cx="84" cy="76" rx="6" ry="4" fill="#F5B8C4" opacity="0.35" />
    </svg>
  );
}

export function CatPaw({ size = 24, className = "" }: CatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main pad */}
      <ellipse cx="16" cy="20" rx="7" ry="6" fill="#E8E0F5" />
      {/* Toe beans */}
      <ellipse cx="9" cy="13" rx="3.5" ry="4" fill="#E8E0F5" transform="rotate(-15 9 13)" />
      <ellipse cx="16" cy="11" rx="3.5" ry="4" fill="#E8E0F5" />
      <ellipse cx="23" cy="13" rx="3.5" ry="4" fill="#E8E0F5" transform="rotate(15 23 13)" />
      {/* Inner pads */}
      <ellipse cx="16" cy="20" rx="4.5" ry="3.5" fill="#F5B8C4" opacity="0.5" />
      <ellipse cx="9" cy="13" rx="2" ry="2.5" fill="#F5B8C4" opacity="0.4" transform="rotate(-15 9 13)" />
      <ellipse cx="16" cy="11" rx="2" ry="2.5" fill="#F5B8C4" opacity="0.4" />
      <ellipse cx="23" cy="13" rx="2" ry="2.5" fill="#F5B8C4" opacity="0.4" transform="rotate(15 23 13)" />
    </svg>
  );
}
