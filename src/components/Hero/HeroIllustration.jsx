
/* eslint-disable react/no-unknown-property */
export default function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Business Analyst illustration"
            style={{ width: '100%', height: '100%', maxWidth: '420px' }}
        >
            <defs>
                {/* Gradients */}
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0D1B3E" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#F0D080" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A2F5E" />
                    <stop offset="100%" stopColor="#0D1B3E" />
                </linearGradient>
                <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E3370" />
                    <stop offset="100%" stopColor="#162252" />
                </linearGradient>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2A4DA0" />
                    <stop offset="100%" stopColor="#1A3080" />
                </linearGradient>
                <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F5C9A0" />
                    <stop offset="100%" stopColor="#E8A87C" />
                </linearGradient>
                <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A0A00" />
                    <stop offset="100%" stopColor="#3D1A00" />
                </linearGradient>
                <linearGradient id="barBlue" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#3A6ED8" />
                    <stop offset="100%" stopColor="#6A9EF8" />
                </linearGradient>
                <linearGradient id="barGold" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#F0D080" />
                </linearGradient>
                <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
                </filter>
                <filter id="glowGold">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Background glow */}
            <circle cx="240" cy="240" r="230" fill="url(#bgGlow)" />

            {/* ── Decorative orbit rings ── */}
            <circle cx="240" cy="240" r="210" stroke="rgba(201,168,76,0.08)" strokeWidth="1" fill="none" />
            <circle cx="240" cy="240" r="185" stroke="rgba(201,168,76,0.05)" strokeWidth="1" fill="none" />

            {/* ── Floating data nodes ── */}
            {/* Node top-right */}
            <circle cx="385" cy="110" r="6" fill="url(#goldGrad)" filter="url(#glowGold)" >
                <animate attributeName="cy" values="110;102;110" dur="3s" repeatCount="indefinite" />
            </circle>
            <line x1="379" y1="110" x2="340" y2="148" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Node top-left */}
            <circle cx="95" cy="135" r="5" fill="#3A6ED8" opacity="0.8">
                <animate attributeName="cy" values="135;127;135" dur="4s" repeatCount="indefinite" />
            </circle>
            <line x1="100" y1="135" x2="140" y2="162" stroke="rgba(58,110,216,0.25)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Node bottom-right */}
            <circle cx="400" cy="360" r="5" fill="#3A6ED8" opacity="0.6">
                <animate attributeName="cy" values="360;368;360" dur="3.5s" repeatCount="indefinite" />
            </circle>

            {/* Node bottom-left */}
            <circle cx="80" cy="350" r="4" fill="url(#goldGrad)" filter="url(#glowGold)">
                <animate attributeName="cy" values="350;342;350" dur="4.5s" repeatCount="indefinite" />
            </circle>

            {/* ── Airplane ── */}
            <g transform="translate(60, 68) rotate(-15)" opacity="0.85">
                <animate attributeName="transform" values="translate(60,68) rotate(-15);translate(72,60) rotate(-15);translate(60,68) rotate(-15)" dur="5s" repeatCount="indefinite" />
                {/* fuselage */}
                <ellipse cx="30" cy="8" rx="28" ry="6" fill="url(#goldGrad)" />
                {/* wings */}
                <polygon points="22,8 36,8 42,22 16,22" fill="#C9A84C" opacity="0.7" />
                <polygon points="22,8 36,8 42,-6 16,-6" fill="#C9A84C" opacity="0.7" />
                {/* tail */}
                <polygon points="2,8 -10,8 -8,0" fill="#C9A84C" />
                {/* window */}
                <circle cx="32" cy="8" r="3" fill="#0D1B3E" opacity="0.8" />
                {/* contrail */}
                <line x1="-8" y1="8" x2="-35" y2="8" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 4" />
            </g>

            {/* ── Desk ── */}
            <rect x="60" y="300" width="360" height="18" rx="6" fill="url(#deskGrad)" filter="url(#cardShadow)" />
            {/* Desk legs */}
            <rect x="90" y="318" width="12" height="50" rx="4" fill="#142050" />
            <rect x="378" y="318" width="12" height="50" rx="4" fill="#142050" />

            {/* ── Laptop base ── */}
            <rect x="130" y="260" width="210" height="12" rx="4" fill="#0D1B3E" />
            {/* Laptop screen frame */}
            <rect x="120" y="155" width="220" height="110" rx="10" fill="#0A1530" filter="url(#cardShadow)" />
            <rect x="128" y="162" width="204" height="96" rx="6" fill="url(#screenGrad)" />

            {/* ── Screen content: Dashboard ── */}
            {/* Title bar */}
            <rect x="136" y="170" width="80" height="5" rx="2" fill="url(#goldGrad)" opacity="0.9" />
            <rect x="224" y="170" width="50" height="5" rx="2" fill="rgba(255,255,255,0.15)" />

            {/* Bar chart */}
            <rect x="138" y="200" width="14" height="40" rx="2" fill="url(#barBlue)" />
            <rect x="156" y="215" width="14" height="25" rx="2" fill="url(#barGold)" />
            <rect x="174" y="205" width="14" height="35" rx="2" fill="url(#barBlue)" opacity="0.7" />
            <rect x="192" y="220" width="14" height="20" rx="2" fill="url(#barGold)" opacity="0.7" />
            <rect x="210" y="210" width="14" height="30" rx="2" fill="url(#barBlue)" />

            {/* Donut / pie chart */}
            {/* Outer arc approx using circles */}
            <circle cx="272" cy="210" r="22" stroke="url(#goldGrad)" strokeWidth="10" fill="none" strokeDasharray="75 63" strokeDashoffset="16" />
            <circle cx="272" cy="210" r="22" stroke="#3A6ED8" strokeWidth="10" fill="none" strokeDasharray="45 93" strokeDashoffset="-59" />
            <circle cx="272" cy="210" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="10" fill="none" strokeDasharray="18 120" strokeDashoffset="-104" />
            <circle cx="272" cy="210" r="12" fill="#0D1B3E" />

            {/* Line chart */}
            <polyline points="228,245 242,238 256,242 270,232 284,236 298,228 312,230" stroke="url(#goldGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="228,248 242,252 256,246 270,250 284,244 298,248 312,242" stroke="#3A6ED8" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />

            {/* Ping dot on line chart */}
            <circle cx="284" cy="236" r="3" fill="#C9A84C">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* ── Character ── */}
            {/* Body / blazer */}
            <ellipse cx="240" cy="390" rx="48" ry="30" fill="#0D1B3E" opacity="0.5" /> {/* shadow */}
            <rect x="205" y="285" width="70" height="60" rx="14" fill="url(#bodyGrad)" />
            {/* Collar */}
            <polygon points="235,285 240,300 245,285" fill="#F5C9A0" />
            {/* Shirt */}
            <rect x="232" y="285" width="16" height="30" rx="4" fill="rgba(255,255,255,0.15)" />

            {/* Neck */}
            <rect x="233" y="270" width="14" height="20" rx="6" fill="url(#skinGrad)" />

            {/* Head */}
            <ellipse cx="240" cy="248" rx="32" ry="34" fill="url(#skinGrad)" />

            {/* Hair — bun / updo */}
            <ellipse cx="240" cy="220" rx="32" ry="18" fill="url(#hairGrad)" />
            <ellipse cx="240" cy="214" rx="22" ry="12" fill="url(#hairGrad)" />
            {/* Bun */}
            <circle cx="240" cy="206" r="12" fill="url(#hairGrad)" />
            {/* Hair bun pin — gold */}
            <line x1="235" y1="200" x2="245" y2="212" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />

            {/* Ear */}
            <ellipse cx="208" cy="250" rx="4" ry="6" fill="url(#skinGrad)" />
            <ellipse cx="272" cy="250" rx="4" ry="6" fill="url(#skinGrad)" />
            {/* Earring */}
            <circle cx="208" cy="256" r="3" fill="url(#goldGrad)" />
            <circle cx="272" cy="256" r="3" fill="url(#goldGrad)" />

            {/* Eyes */}
            <ellipse cx="228" cy="248" rx="5" ry="4" fill="#1A0A00" />
            <ellipse cx="252" cy="248" rx="5" ry="4" fill="#1A0A00" />
            {/* Eye shine */}
            <circle cx="229.5" cy="246.5" r="1.5" fill="white" />
            <circle cx="253.5" cy="246.5" r="1.5" fill="white" />

            {/* Eyebrows */}
            <path d="M221 241 Q228 238 234 241" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M246 241 Q252 238 259 241" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Smile */}
            <path d="M233 260 Q240 266 247 260" stroke="#C07850" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Nose */}
            <path d="M237 254 Q240 258 243 254" stroke="#D4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Arms */}
            {/* Left arm — pointing at screen */}
            <path d="M208 295 Q190 290 175 275" stroke="url(#skinGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
            {/* Right arm — resting */}
            <path d="M272 295 Q290 305 300 300" stroke="url(#skinGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
            {/* Hands */}
            <circle cx="173" cy="274" r="8" fill="url(#skinGrad)" />
            <circle cx="302" cy="300" r="7" fill="url(#skinGrad)" />

            {/* ── Small sticky notes on side ── */}
            {/* Left note */}
            <rect x="68" y="195" width="50" height="42" rx="4" fill="#F0D080" opacity="0.9" transform="rotate(-5, 93, 216)" filter="url(#cardShadow)" />
            <line x1="76" y1="205" x2="108" y2="201" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
            <line x1="76" y1="213" x2="108" y2="209" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
            <line x1="76" y1="221" x2="108" y2="217" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />

            {/* Right note */}
            <rect x="360" y="200" width="48" height="40" rx="4" fill="rgba(58,110,216,0.85)" transform="rotate(4, 384, 220)" filter="url(#cardShadow)" />
            <line x1="368" y1="210" x2="398" y2="212" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="368" y1="218" x2="398" y2="220" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="368" y1="226" x2="390" y2="228" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

            {/* ── Coffee cup ── */}
            <rect x="355" y="275" width="26" height="22" rx="5" fill="#1A2F5E" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
            {/* Steam */}
            <path d="M362 273 Q364 265 362 258" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M362 273 Q364 265 362 258;M362 273 Q366 265 364 258;M362 273 Q364 265 362 258" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M369 273 Q371 264 369 257" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M369 273 Q371 264 369 257;M369 273 Q373 264 371 257;M369 273 Q371 264 369 257" dur="2.5s" repeatCount="indefinite" />
            </path>
            {/* Cup handle */}
            <path d="M381 280 Q390 280 390 286 Q390 292 381 292" stroke="rgba(201,168,76,0.5)" strokeWidth="2" fill="none" />

            {/* ── Japan torii gate (subtle, background) ── */}
            <g opacity="0.07">
                <rect x="395" y="290" width="60" height="5" rx="2" fill="#C9A84C" />
                <rect x="393" y="285" width="64" height="4" rx="2" fill="#C9A84C" />
                <rect x="400" y="295" width="5" height="50" rx="2" fill="#C9A84C" />
                <rect x="445" y="295" width="5" height="50" rx="2" fill="#C9A84C" />
            </g>

            {/* ── Floating KPI cards ── */}
            {/* Card 1 */}
            <g filter="url(#cardShadow)">
                <animate attributeName="transform" values="translate(0,0);translate(0,-6);translate(0,0)" dur="4s" repeatCount="indefinite" />
                <rect x="52" y="310" width="80" height="40" rx="8" fill="rgba(13,27,62,0.95)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text x="92" y="327" textAnchor="middle" fill="#C9A84C" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">4 YRS</text>
                <text x="92" y="342" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Inter,sans-serif">EXPERIENCE</text>
            </g>

            {/* Card 2 */}
            <g>
                <animate attributeName="transform" values="translate(0,0);translate(0,6);translate(0,0)" dur="3.5s" repeatCount="indefinite" />
                <rect x="348" y="318" width="82" height="40" rx="8" fill="rgba(13,27,62,0.95)" stroke="rgba(58,110,216,0.4)" strokeWidth="1" filter="url(#cardShadow)" />
                <text x="389" y="335" textAnchor="middle" fill="#6A9EF8" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">✈ PSS</text>
                <text x="389" y="350" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Inter,sans-serif">AIRLINE EXPERT</text>
            </g>

            {/* ── Subtle grid dots ── */}
            {[0, 1, 2, 3, 4].map(col =>
                [0, 1, 2].map(row => (
                    <circle
                        key={`${col}-${row}`}
                        cx={70 + col * 80}
                        cy={430 + row * 22}
                        r="1.5"
                        fill="rgba(201,168,76,0.12)"
                    />
                ))
            )}
        </svg>
    );
}
