import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSlogan?: boolean;
  lang?: 'ar' | 'en';
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'auto',
  showSlogan = false,
  lang = 'ar',
}) => {
  const isDarkBg = variant === 'light'; // light logo for dark backgrounds

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Geometric Emblem: Directional Path + Discovery Compass Star */}
      <div className="relative w-10 h-10 shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Subtle Outer Pathway Circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke={isDarkBg ? '#B9F0DF' : '#278C78'}
            strokeWidth="3.5"
            strokeDasharray="4 8"
            opacity="0.5"
          />

          {/* Upward Dynamic Pathway Arch */}
          <path
            d="M20 74 C 28 40, 52 26, 80 26"
            stroke={isDarkBg ? '#B9F0DF' : '#278C78'}
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Complementary Dynamic Cross Arch */}
          <path
            d="M30 84 C 48 68, 68 56, 84 40"
            stroke={isDarkBg ? '#ffffff' : '#102A43'}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Compass Star / Knowledge Beacon at Top Right Path Endpoint */}
          <polygon
            points="80,14 84,24 94,28 84,32 80,42 76,32 66,28 76,24"
            fill={isDarkBg ? '#B9F0DF' : '#278C78'}
          />

          {/* Central Grounding Pearl Node */}
          <circle
            cx="50"
            cy="50"
            r="6"
            fill={isDarkBg ? '#ffffff' : '#183C59'}
          />
        </svg>
      </div>

      {/* Brand Wordmark and optional slogan */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-2">
          <span
            className={`text-2xl font-bold tracking-tight font-serif ${
              isDarkBg ? 'text-white' : 'text-[#102A43]'
            }`}
            style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            مَسَار
          </span>
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              isDarkBg ? 'text-[#B9F0DF]' : 'text-[#278C78]'
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            MASAR
          </span>
        </div>
        {showSlogan && (
          <span
            className={`text-[11px] mt-1 font-normal ${
              isDarkBg ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            {lang === 'ar' ? 'مستقبلك يبدأ بفهم خياراتك' : 'Your Future Starts With Understanding'}
          </span>
        )}
      </div>
    </div>
  );
};
