"use client";

interface HeroFloralOrnamentsProps {
  slideIndex: number;
}

interface SlideTheme {
  primary: string;
  secondary: string;
  accent: string;
  soft: string;
  leaf: string;
}

const THEMES: Record<number, SlideTheme> = {
  0: {
    // Slide 1: Design & Sampling (Royal Blue & Amber)
    primary: "#3A52A8",
    secondary: "#1D2F71",
    accent: "#F4A93B",
    soft: "#6B86E8",
    leaf: "#2B47A8",
  },
  1: {
    // Slide 2: Tops & Bottoms (Rich Wine & Gold)
    primary: "#7E1724",
    secondary: "#4A0E16",
    accent: "#F4A93B",
    soft: "#D45B6C",
    leaf: "#961C2A",
  },
  2: {
    // Slide 3: Global Export (Amber & Navy)
    primary: "#F5A32B",
    secondary: "#1D2F71",
    accent: "#E58A1F",
    soft: "#FBD38D",
    leaf: "#C05621",
  },
  3: {
    // Slide 4: Responsible Production (Azure & Eco Green)
    primary: "#3A52A8",
    secondary: "#2F855A",
    accent: "#F4A93B",
    soft: "#9AE6B4",
    leaf: "#319795",
  },
};

export default function HeroFloralOrnaments({ slideIndex }: HeroFloralOrnamentsProps) {
  const theme = THEMES[slideIndex] || THEMES[0];
  const pId = `floral-p-${slideIndex}`;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[380px] sm:h-[440px] pointer-events-none overflow-hidden select-none z-0"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 440"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients tailored to the current slide palette */}
          <linearGradient id={`${pId}-g1`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.secondary} stopOpacity="0.85" />
            <stop offset="60%" stopColor={theme.primary} stopOpacity="0.7" />
            <stop offset="100%" stopColor={theme.soft} stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id={`${pId}-g2`} x1="0%" y1="80%" x2="100%" y2="20%">
            <stop offset="0%" stopColor={theme.accent} stopOpacity="0.9" />
            <stop offset="70%" stopColor={theme.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={theme.soft} stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id={`${pId}-g3`} x1="0%" y1="100%" x2="80%" y2="0%">
            <stop offset="0%" stopColor={theme.primary} stopOpacity="0.75" />
            <stop offset="50%" stopColor={theme.soft} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={`${pId}-leaf`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={theme.primary} stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id={`${pId}-top-ribbon`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.primary} stopOpacity="0" />
            <stop offset="25%" stopColor={theme.soft} stopOpacity="0.35" />
            <stop offset="50%" stopColor={theme.accent} stopOpacity="0.45" />
            <stop offset="75%" stopColor={theme.primary} stopOpacity="0.3" />
            <stop offset="100%" stopColor={theme.soft} stopOpacity="0" />
          </linearGradient>

          {/* Soft Silk Ribbon Gradient */}
          <linearGradient id={`${pId}-ribbon-soft`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.soft} stopOpacity="0.6" />
            <stop offset="50%" stopColor={theme.accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor={theme.primary} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ==============================================================
            LEFT FLOURISH (Fans out smoothly from bottom-left towards center)
            ============================================================== */}
        <g className="transition-all duration-700 opacity-80 sm:opacity-90 lg:opacity-75">
          {/* Main Petals - Curving smoothly upward and right */}
          <path
            d="M -20,380 C 40,280 90,190 230,140 C 180,210 130,300 40,390 Z"
            fill={`url(#${pId}-g1)`}
          />
          <path
            d="M -30,340 C 50,220 140,140 280,105 C 220,185 150,270 20,370 Z"
            fill={`url(#${pId}-g2)`}
          />
          <path
            d="M -10,290 C 60,170 160,100 290,65 C 240,150 160,240 10,340 Z"
            fill={`url(#${pId}-g3)`}
          />
          <path
            d="M -40,410 C 20,320 80,250 190,200 C 145,260 100,340 30,420 Z"
            fill={theme.secondary}
            fillOpacity="0.35"
          />

          {/* Secondary Translucent Silk Wave (replaces dashed line) */}
          <path
            d="M -15,360 C 55,250 135,170 260,120 C 230,180 160,260 20,380 Z"
            fill={`url(#${pId}-ribbon-soft)`}
          />

          {/* Continuous Elegant Calligraphic Swirl Lines (100% Solid & Flowing) */}
          <path
            d="M 10,380 C 80,260 170,180 290,130 C 350,100 400,120 380,170 C 360,210 290,210 250,170"
            fill="none"
            stroke={theme.accent}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
          <path
            d="M -10,330 C 70,220 170,150 310,100 C 360,80 400,105 385,140"
            fill="none"
            stroke={theme.primary}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          {/* Solid Silk Filament Line (previously dashed) */}
          <path
            d="M 30,390 C 110,300 200,240 330,200 C 380,185 410,210 395,235"
            fill="none"
            stroke={theme.soft}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />

          {/* Leaf / Petal Sprigs sprouting along the swirl */}
          <path
            d="M 230,140 C 245,115 270,110 285,125 C 270,140 245,145 230,140 Z"
            fill={`url(#${pId}-leaf)`}
          />
          <path
            d="M 290,130 C 310,110 335,112 345,130 C 325,140 305,138 290,130 Z"
            fill={theme.primary}
            fillOpacity="0.65"
          />
          <path
            d="M 180,180 C 190,155 215,150 230,165 C 215,178 195,182 180,180 Z"
            fill={theme.accent}
            fillOpacity="0.7"
          />

          {/* Modern Graphic Halftone Dot Matrix (inspired by reference image) */}
          <g opacity="0.38" fill={theme.primary}>
            <circle cx="50" cy="115" r="1.6" />
            <circle cx="64" cy="115" r="1.6" />
            <circle cx="78" cy="115" r="1.6" />
            <circle cx="92" cy="115" r="1.6" />

            <circle cx="50" cy="129" r="1.6" />
            <circle cx="64" cy="129" r="1.6" />
            <circle cx="78" cy="129" r="1.6" />
            <circle cx="92" cy="129" r="1.6" />

            <circle cx="50" cy="143" r="1.6" />
            <circle cx="64" cy="143" r="1.6" />
            <circle cx="78" cy="143" r="1.6" />
            <circle cx="92" cy="143" r="1.6" />
          </g>

          {/* Luxury Diamond Sparkle Glints (✦) */}
          <path
            d="M 0,-7 Q 0,0 7,0 Q 0,0 0,7 Q 0,0 -7,0 Q 0,0 0,-7 Z"
            transform="translate(270, 85)"
            fill={theme.accent}
            fillOpacity="0.85"
          />
          <path
            d="M 0,-5 Q 0,0 5,0 Q 0,0 0,5 Q 0,0 -5,0 Q 0,0 0,-5 Z"
            transform="translate(370, 95)"
            fill={theme.primary}
            fillOpacity="0.75"
          />

          {/* Soft Bokeh Halos & Floating Particles */}
          <circle cx="120" cy="190" r="18" fill={theme.soft} fillOpacity="0.12" />
          <circle cx="330" cy="115" r="4" fill={theme.primary} fillOpacity="0.6" />
          <circle cx="220" cy="160" r="3.5" fill={theme.soft} fillOpacity="0.7" />
          <circle cx="310" cy="180" r="4.5" fill={theme.accent} fillOpacity="0.65" />
          <circle cx="160" cy="220" r="3" fill={theme.soft} fillOpacity="0.5" />
          <circle cx="395" cy="160" r="3" fill={theme.primary} fillOpacity="0.45" />
          <circle cx="250" cy="235" r="2" fill={theme.accent} fillOpacity="0.5" />
        </g>

        {/* ==============================================================
            TOP-CENTER CONNECTING ARC & GLINTS (Behind model's head)
            ============================================================== */}
        <g className="transition-all duration-700 opacity-70 sm:opacity-85">
          {/* Main Top Ribbon Arch */}
          <path
            d="M 260,110 C 380,45 620,45 740,110"
            fill="none"
            stroke={`url(#${pId}-top-ribbon)`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Smooth Secondary Aura Curve (Solid line replacing dashed line) */}
          <path
            d="M 310,130 C 420,80 580,80 690,130"
            fill="none"
            stroke={theme.soft}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
          {/* Diamond Sparkle at Top-Center */}
          <path
            d="M 0,-6 Q 0,0 6,0 Q 0,0 0,6 Q 0,0 -6,0 Q 0,0 0,-6 Z"
            transform="translate(500, 48)"
            fill={theme.accent}
            fillOpacity="0.75"
          />
          <circle cx="430" cy="65" r="2.5" fill={theme.soft} fillOpacity="0.6" />
          <circle cx="570" cy="62" r="2.5" fill={theme.primary} fillOpacity="0.6" />
        </g>

        {/* ==============================================================
            RIGHT FLOURISH (Fans out smoothly from bottom-right towards center)
            ============================================================== */}
        <g className="transition-all duration-700 opacity-80 sm:opacity-90 lg:opacity-75">
          {/* Main Petals - Curving smoothly upward and left */}
          <path
            d="M 1020,380 C 960,280 910,190 770,140 C 820,210 870,300 960,390 Z"
            fill={`url(#${pId}-g1)`}
          />
          <path
            d="M 1030,340 C 950,220 860,140 720,105 C 780,185 850,270 980,370 Z"
            fill={`url(#${pId}-g2)`}
          />
          <path
            d="M 1010,290 C 940,170 840,100 710,65 C 760,150 840,240 990,340 Z"
            fill={`url(#${pId}-g3)`}
          />
          <path
            d="M 1040,410 C 980,320 920,250 810,200 C 855,260 900,340 970,420 Z"
            fill={theme.secondary}
            fillOpacity="0.35"
          />

          {/* Secondary Translucent Silk Wave (replaces dashed line) */}
          <path
            d="M 1015,360 C 945,250 865,170 740,120 C 770,180 840,260 980,380 Z"
            fill={`url(#${pId}-ribbon-soft)`}
          />

          {/* Continuous Elegant Calligraphic Swirl Lines (100% Solid & Flowing) */}
          <path
            d="M 990,380 C 920,260 830,180 710,130 C 650,100 600,120 620,170 C 640,210 710,210 750,170"
            fill="none"
            stroke={theme.accent}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
          <path
            d="M 1010,330 C 930,220 830,150 690,100 C 640,80 600,105 615,140"
            fill="none"
            stroke={theme.primary}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          {/* Solid Silk Filament Line (previously dashed) */}
          <path
            d="M 970,390 C 890,300 800,240 670,200 C 620,185 590,210 605,235"
            fill="none"
            stroke={theme.soft}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />

          {/* Leaf / Petal Sprigs sprouting along the swirl */}
          <path
            d="M 770,140 C 755,115 730,110 715,125 C 730,140 755,145 770,140 Z"
            fill={`url(#${pId}-leaf)`}
          />
          <path
            d="M 710,130 C 690,110 665,112 655,130 C 675,140 695,138 710,130 Z"
            fill={theme.primary}
            fillOpacity="0.65"
          />
          <path
            d="M 820,180 C 810,155 785,150 770,165 C 785,178 805,182 820,180 Z"
            fill={theme.accent}
            fillOpacity="0.7"
          />

          {/* Modern Graphic Halftone Dot Matrix (inspired by reference image) */}
          <g opacity="0.38" fill={theme.accent}>
            <circle cx="908" cy="115" r="1.6" />
            <circle cx="922" cy="115" r="1.6" />
            <circle cx="936" cy="115" r="1.6" />
            <circle cx="950" cy="115" r="1.6" />

            <circle cx="908" cy="129" r="1.6" />
            <circle cx="922" cy="129" r="1.6" />
            <circle cx="936" cy="129" r="1.6" />
            <circle cx="950" cy="129" r="1.6" />

            <circle cx="908" cy="143" r="1.6" />
            <circle cx="922" cy="143" r="1.6" />
            <circle cx="936" cy="143" r="1.6" />
            <circle cx="950" cy="143" r="1.6" />
          </g>

          {/* Luxury Diamond Sparkle Glints (✦) */}
          <path
            d="M 0,-7 Q 0,0 7,0 Q 0,0 0,7 Q 0,0 -7,0 Q 0,0 0,-7 Z"
            transform="translate(730, 85)"
            fill={theme.accent}
            fillOpacity="0.85"
          />
          <path
            d="M 0,-5 Q 0,0 5,0 Q 0,0 0,5 Q 0,0 -5,0 Q 0,0 0,-5 Z"
            transform="translate(630, 95)"
            fill={theme.primary}
            fillOpacity="0.75"
          />

          {/* Soft Bokeh Halos & Floating Particles */}
          <circle cx="880" cy="190" r="18" fill={theme.soft} fillOpacity="0.12" />
          <circle cx="670" cy="115" r="4" fill={theme.primary} fillOpacity="0.6" />
          <circle cx="780" cy="160" r="3.5" fill={theme.soft} fillOpacity="0.7" />
          <circle cx="690" cy="180" r="4.5" fill={theme.accent} fillOpacity="0.65" />
          <circle cx="840" cy="220" r="3" fill={theme.soft} fillOpacity="0.5" />
          <circle cx="605" cy="160" r="3" fill={theme.primary} fillOpacity="0.45" />
          <circle cx="750" cy="235" r="2" fill={theme.accent} fillOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
