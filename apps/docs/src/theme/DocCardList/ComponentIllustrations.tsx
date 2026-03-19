import React from 'react'

type SVG = React.SVGProps<SVGSVGElement>

// Midas color palette via CSS custom properties (auto dark-mode)
const P = 'var(--midas-border-color-tertiary)'  // primary dark blue
const M = 'var(--midas-color-blue-100)'         // medium blue
const L = 'var(--midas-color-blue-20)'          // light blue
const XL = 'var(--midas-color-blue-10)'         // very light blue
const N = 'var(--midas-layer-accent-01-base)'   // neutral gray
const S = 'var(--midas-layer-02-base)'          // surface (white)

type IllustrationFC = (props: SVG) => React.ReactElement

export const FallbackIllustration: IllustrationFC = (props) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="8" width="104" height="64" rx="4" fill={N} />
    <rect x="22" y="22" width="76" height="8" rx="2" fill={L} />
    <rect x="22" y="34" width="55" height="6" rx="2" fill={L} opacity="0.7" />
    <rect x="22" y="44" width="66" height="6" rx="2" fill={L} opacity="0.5" />
    <rect x="22" y="54" width="28" height="10" rx="3" fill={P} opacity="0.4" />
  </svg>
)

export const illustrations: Record<string, IllustrationFC> = {

  Accordion: (props) => (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="8" y="6" width="104" height="15" rx="2" fill={P} />
      <path d="M103 12 L107 16 L111 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="25" width="104" height="15" rx="2" fill={M} />
      <path d="M103 33 L107 29 L111 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="40" width="104" height="14" rx="2" fill={L} />
      <rect x="18" y="44" width="55" height="3" rx="1.5" fill={M} />
      <rect x="18" y="50" width="38" height="2" rx="1" fill={M} opacity="0.5" />
      <rect x="8" y="58" width="104" height="15" rx="2" fill={N} />
      <path d="M103 64 L107 68 L111 64" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Badge: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="34" y="16" width="52" height="48" rx="6" fill={N} />
      <rect x="44" y="26" width="32" height="5" rx="2" fill={P} />
      <rect x="44" y="35" width="24" height="4" rx="2" fill={L} />
      <rect x="44" y="43" width="20" height="4" rx="2" fill={L} />
      <circle cx="83" cy="20" r="11" fill={P} />
      <text x="83" y="24.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">3</text>
    </svg>
  ),

  Breadcrumbs: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="6" y="32" width="24" height="16" rx="3" fill={L} />
      <rect x="10" y="38" width="16" height="4" rx="2" fill={M} />
      <path d="M34 38 L38 40 L34 42" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="42" y="32" width="28" height="16" rx="3" fill={L} />
      <rect x="47" y="38" width="18" height="4" rx="2" fill={M} />
      <path d="M74 38 L78 40 L74 42" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="82" y="32" width="32" height="16" rx="3" fill={P} />
      <rect x="88" y="38" width="20" height="4" rx="2" fill="white" />
    </svg>
  ),

  Button: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="24" y="20" width="72" height="28" rx="4" fill={P} />
      <rect x="40" y="32" width="40" height="4" rx="2" fill="white" />
      <rect x="24" y="56" width="32" height="14" rx="3" fill="none" stroke={P} strokeWidth="1.5" />
      <rect x="30" y="61" width="20" height="4" rx="2" fill={P} />
      <rect x="62" y="56" width="34" height="14" rx="3" fill={L} />
      <rect x="68" y="61" width="22" height="4" rx="2" fill={M} />
    </svg>
  ),

  Calendar: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="104" height="66" rx="3" fill={S} stroke={L} strokeWidth="1" />
      <rect x="8" y="8" width="104" height="18" rx="3" fill={P} />
      <rect x="44" y="14" width="32" height="4" rx="2" fill="white" />
      <path d="M18 18 L15 14 L18 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M103 10 L106 14 L103 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={12 + i * 14} y="30" width="10" height="6" rx="1" fill={L} />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={12 + i * 14} y="40" width="10" height="8" rx="1" fill={i === 3 ? P : XL} />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={12 + i * 14} y="52" width="10" height="8" rx="1" fill={XL} />
      ))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={12 + i * 14} y="64" width="10" height="6" rx="1" fill={XL} />
      ))}
    </svg>
  ),

  Card: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="10" y="6" width="100" height="68" rx="4" fill={S} stroke={L} strokeWidth="1" />
      <rect x="10" y="6" width="100" height="24" rx="4" fill={P} />
      <rect x="20" y="14" width="42" height="5" rx="2" fill="white" />
      <rect x="20" y="21" width="26" height="3" rx="1.5" fill="white" opacity="0.6" />
      <rect x="20" y="38" width="80" height="4" rx="2" fill={L} />
      <rect x="20" y="46" width="65" height="4" rx="2" fill={L} />
      <rect x="20" y="54" width="50" height="4" rx="2" fill={L} />
      <rect x="20" y="62" width="32" height="8" rx="3" fill={P} />
    </svg>
  ),

  Checkbox: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="14" y="14" width="16" height="16" rx="2" fill={P} />
      <path d="M18 22 L21 25 L28 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="18" width="68" height="4" rx="2" fill={P} />
      <rect x="38" y="25" width="50" height="3" rx="1.5" fill={L} />
      <rect x="14" y="38" width="16" height="16" rx="2" fill={P} />
      <path d="M18 46 L21 49 L28 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="42" width="55" height="4" rx="2" fill={P} />
      <rect x="38" y="49" width="40" height="3" rx="1.5" fill={L} />
      <rect x="14" y="60" width="16" height="14" rx="2" fill="none" stroke={N} strokeWidth="1.5" />
      <rect x="38" y="64" width="68" height="4" rx="2" fill={N} />
    </svg>
  ),

  ComboBox: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="30" height="4" rx="2" fill={P} />
      <rect x="8" y="18" width="90" height="22" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="26" width="40" height="4" rx="2" fill={N} />
      <rect x="86" y="19" width="11" height="20" rx="2" fill={P} />
      <path d="M89 28 L92 32 L95 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="42" width="90" height="11" rx="1" fill={XL} />
      <rect x="8" y="54" width="90" height="11" rx="1" fill={L} />
      <rect x="16" y="57" width="36" height="4" rx="2" fill={M} />
      <rect x="8" y="66" width="90" height="11" rx="1" fill={XL} />
    </svg>
  ),

  DateField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="12" width="38" height="4" rx="2" fill={P} />
      <rect x="8" y="22" width="104" height="28" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="28" width="24" height="16" rx="2" fill={L} />
      <rect x="20" y="34" width="16" height="4" rx="2" fill={M} />
      <rect x="44" y="32" width="3" height="8" rx="1.5" fill={P} opacity="0.3" />
      <rect x="51" y="28" width="24" height="16" rx="2" fill={L} />
      <rect x="55" y="34" width="16" height="4" rx="2" fill={M} />
      <rect x="79" y="32" width="3" height="8" rx="1.5" fill={P} opacity="0.3" />
      <rect x="86" y="28" width="18" height="16" rx="2" fill={P} />
      <rect x="89" y="34" width="12" height="4" rx="2" fill="white" />
    </svg>
  ),

  DatePicker: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="10" width="38" height="4" rx="2" fill={P} />
      <rect x="8" y="20" width="86" height="22" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="28" width="44" height="4" rx="2" fill={N} />
      <rect x="82" y="21" width="11" height="20" rx="2" fill={P} />
      <rect x="84" y="26" width="7" height="6" rx="1" fill="white" opacity="0.8" />
      <rect x="84" y="28" width="2" height="4" rx="1" fill={P} />
      <rect x="89" y="28" width="2" height="4" rx="1" fill={P} />
      <rect x="8" y="48" width="86" height="26" rx="3" fill={XL} stroke={L} strokeWidth="1" />
      <rect x="8" y="48" width="86" height="12" rx="3" fill={P} />
      <rect x="40" y="52" width="22" height="4" rx="2" fill="white" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={12 + i * 12} y="63" width="8" height="6" rx="1" fill={i === 3 ? M : L} />
      ))}
    </svg>
  ),

  FileTrigger: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="30" y="8" width="60" height="26" rx="4" fill={P} />
      <path d="M60 28 L60 16 M55 21 L60 16 L65 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="42" width="28" height="34" rx="3" fill={L} stroke={M} strokeWidth="1" />
      <path d="M28 42 L36 50" stroke={M} strokeWidth="1" />
      <rect x="28" y="42" width="8" height="8" rx="2" fill={L} stroke={M} strokeWidth="1" />
      <rect x="44" y="42" width="28" height="34" rx="3" fill={N} />
      <rect x="84" y="42" width="28" height="34" rx="3" fill={N} />
      <rect x="50" y="52" width="16" height="3" rx="1.5" fill={M} />
      <rect x="50" y="58" width="12" height="3" rx="1.5" fill={L} />
    </svg>
  ),

  Grid: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {[0, 1, 2].map(col =>
        [0, 1, 2].map(row => (
          <rect
            key={`${col}-${row}`}
            x={8 + col * 37}
            y={8 + row * 23}
            width="33"
            height="19"
            rx="2"
            fill={col === 0 && row === 0 ? P : col === 2 && row === 2 ? P : col === 1 && row === 1 ? M : L}
          />
        ))
      )}
    </svg>
  ),

  Heading: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="80" height="13" rx="2" fill={P} />
      <rect x="8" y="26" width="62" height="10" rx="2" fill={M} />
      <rect x="8" y="41" width="48" height="8" rx="2" fill={L} />
      <rect x="8" y="56" width="104" height="4" rx="2" fill={N} />
      <rect x="8" y="64" width="94" height="4" rx="2" fill={N} />
      <rect x="8" y="72" width="72" height="4" rx="2" fill={N} />
    </svg>
  ),

  InfoBanner: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="16" width="104" height="48" rx="4" fill={XL} stroke={L} strokeWidth="1.5" />
      <rect x="8" y="16" width="6" height="48" rx="3" fill={P} />
      <circle cx="28" cy="40" r="10" fill={P} />
      <rect x="27" y="34" width="2" height="3" rx="1" fill="white" />
      <rect x="27" y="39" width="2" height="6" rx="1" fill="white" />
      <rect x="46" y="30" width="58" height="6" rx="2" fill={P} />
      <rect x="46" y="40" width="46" height="4" rx="2" fill={M} opacity="0.6" />
      <rect x="46" y="48" width="54" height="4" rx="2" fill={M} opacity="0.4" />
    </svg>
  ),

  Layout: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="6" y="6" width="108" height="14" rx="2" fill={P} />
      <rect x="6" y="24" width="28" height="50" rx="2" fill={L} />
      <rect x="10" y="29" width="20" height="4" rx="2" fill={M} />
      <rect x="10" y="37" width="20" height="3" rx="1.5" fill={M} opacity="0.6" />
      <rect x="10" y="44" width="16" height="3" rx="1.5" fill={M} opacity="0.4" />
      <rect x="10" y="51" width="18" height="3" rx="1.5" fill={M} opacity="0.4" />
      <rect x="38" y="24" width="76" height="50" rx="2" fill={XL} />
      <rect x="46" y="32" width="55" height="7" rx="2" fill={P} />
      <rect x="46" y="43" width="60" height="4" rx="2" fill={N} />
      <rect x="46" y="51" width="50" height="4" rx="2" fill={N} />
      <rect x="46" y="59" width="38" height="4" rx="2" fill={N} />
    </svg>
  ),

  Link: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="18" width="104" height="4" rx="2" fill={N} />
      <rect x="8" y="26" width="86" height="4" rx="2" fill={N} />
      <rect x="8" y="36" width="50" height="5" rx="2" fill={P} />
      <rect x="8" y="43" width="50" height="2" rx="1" fill={P} />
      <path d="M63 38 L69 32 M63 32 L69 32 L69 38" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="52" width="104" height="4" rx="2" fill={N} />
      <rect x="8" y="60" width="72" height="4" rx="2" fill={N} />
    </svg>
  ),

  LinkButton: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="18" y="14" width="84" height="28" rx="4" fill={P} />
      <rect x="34" y="26" width="40" height="4" rx="2" fill="white" />
      <path d="M80 18 L87 11 M80 11 L87 11 L87 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="38" y="54" width="44" height="4" rx="2" fill={P} />
      <rect x="38" y="60" width="44" height="1.5" rx="0.75" fill={P} />
      <path d="M86 53 L90 49 M85 49 L90 49 L90 54" stroke={P} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Logo: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="28" y="10" width="64" height="60" rx="8" fill={P} />
      <path d="M42 62 L42 26 L60 52 L78 26 L78 62" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),

  Menu: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="34" y="4" width="52" height="18" rx="3" fill={P} />
      <rect x="44" y="10" width="24" height="4" rx="2" fill="white" />
      <path d="M75 10 L78 14 L81 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="34" y="24" width="72" height="52" rx="3" fill={S} stroke={L} strokeWidth="1" />
      <rect x="34" y="24" width="72" height="14" rx="3" fill={L} />
      <rect x="44" y="29" width="38" height="4" rx="2" fill={P} />
      <line x1="34" y1="44" x2="106" y2="44" stroke={L} strokeWidth="1" />
      <rect x="44" y="49" width="38" height="4" rx="2" fill={M} />
      <line x1="34" y1="59" x2="106" y2="59" stroke={L} strokeWidth="1" />
      <rect x="44" y="64" width="30" height="4" rx="2" fill={M} />
    </svg>
  ),

  Modal: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="0" y="0" width="120" height="80" fill={P} opacity="0.25" rx="2" />
      <rect x="14" y="10" width="92" height="62" rx="4" fill={S} />
      <rect x="14" y="10" width="92" height="20" rx="4" fill={P} />
      <rect x="24" y="17" width="42" height="5" rx="2" fill="white" />
      <path d="M96 14 L102 20 M102 14 L96 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="24" y="36" width="72" height="4" rx="2" fill={L} />
      <rect x="24" y="44" width="60" height="4" rx="2" fill={L} />
      <rect x="24" y="56" width="28" height="11" rx="3" fill={P} />
      <rect x="57" y="56" width="28" height="11" rx="3" fill={N} stroke={L} strokeWidth="1" />
    </svg>
  ),

  Pagination: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="4" y="31" width="18" height="18" rx="3" fill={N} />
      <path d="M15 38 L12 40 L15 42" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="26" y="31" width="16" height="18" rx="3" fill={N} />
      <rect x="30" y="38" width="8" height="4" rx="1" fill={M} />
      <rect x="46" y="31" width="16" height="18" rx="3" fill={P} />
      <rect x="50" y="38" width="8" height="4" rx="1" fill="white" />
      <rect x="66" y="31" width="16" height="18" rx="3" fill={N} />
      <rect x="70" y="38" width="8" height="4" rx="1" fill={M} />
      <rect x="86" y="31" width="16" height="18" rx="3" fill={N} />
      <rect x="90" y="38" width="8" height="4" rx="1" fill={M} />
      <rect x="106" y="31" width="10" height="18" rx="3" fill={N} />
      <path d="M107 38 L111 40 L107 42" stroke={P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Popover: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="42" y="55" width="36" height="18" rx="4" fill={P} />
      <rect x="52" y="62" width="16" height="4" rx="2" fill="white" />
      <rect x="14" y="6" width="92" height="42" rx="4" fill={S} stroke={L} strokeWidth="1.5" />
      <rect x="24" y="16" width="72" height="6" rx="2" fill={P} />
      <rect x="24" y="26" width="58" height="4" rx="2" fill={N} />
      <rect x="24" y="34" width="46" height="4" rx="2" fill={N} />
      <path d="M52 48 L60 55 L68 48" fill={S} stroke={L} strokeWidth="1.5" />
    </svg>
  ),

  ProgressBar: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="18" width="32" height="5" rx="2" fill={P} />
      <rect x="82" y="18" width="30" height="5" rx="2" fill={M} />
      <rect x="8" y="32" width="104" height="10" rx="5" fill={N} />
      <rect x="8" y="32" width="68" height="10" rx="5" fill={P} />
      <rect x="8" y="52" width="104" height="8" rx="4" fill={N} />
      <rect x="8" y="52" width="38" height="8" rx="4" fill={L} />
      <rect x="8" y="68" width="104" height="6" rx="3" fill={N} />
      <rect x="8" y="68" width="90" height="6" rx="3" fill={M} opacity="0.5" />
    </svg>
  ),

  Radio: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <circle cx="20" cy="20" r="9" fill={P} />
      <circle cx="20" cy="20" r="3.5" fill="white" />
      <rect x="36" y="16" width="55" height="5" rx="2" fill={P} />
      <rect x="36" y="23" width="40" height="3" rx="1.5" fill={L} />
      <circle cx="20" cy="46" r="9" fill="none" stroke={P} strokeWidth="2" />
      <rect x="36" y="42" width="45" height="5" rx="2" fill={P} />
      <rect x="36" y="49" width="32" height="3" rx="1.5" fill={L} />
      <circle cx="20" cy="68" r="7" fill="none" stroke={N} strokeWidth="2" />
      <rect x="36" y="65" width="55" height="5" rx="2" fill={N} />
    </svg>
  ),

  SearchField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="10" width="28" height="4" rx="2" fill={P} />
      <rect x="8" y="20" width="104" height="26" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <circle cx="26" cy="33" r="8" fill="none" stroke={M} strokeWidth="2" />
      <path d="M32 39 L36 43" stroke={M} strokeWidth="2" strokeLinecap="round" />
      <rect x="44" y="31" width="55" height="4" rx="2" fill={N} />
    </svg>
  ),

  Select: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="30" height="4" rx="2" fill={P} />
      <rect x="8" y="18" width="104" height="22" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="27" width="48" height="4" rx="2" fill={P} />
      <rect x="94" y="19" width="17" height="20" rx="2" fill={P} />
      <path d="M97 28 L102.5 33 L108 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="42" width="104" height="10" rx="1" fill={XL} />
      <rect x="16" y="45" width="40" height="4" rx="2" fill={N} />
      <rect x="8" y="53" width="104" height="10" rx="1" fill={L} />
      <rect x="16" y="56" width="32" height="4" rx="2" fill={M} />
      <rect x="8" y="64" width="104" height="10" rx="1" fill={XL} />
      <rect x="16" y="67" width="44" height="4" rx="2" fill={N} />
    </svg>
  ),

  Skeleton: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="30" height="30" rx="3" fill={N} />
      <rect x="46" y="10" width="66" height="10" rx="5" fill={N} />
      <rect x="46" y="24" width="50" height="7" rx="3.5" fill={N} opacity="0.7" />
      <rect x="8" y="48" width="104" height="8" rx="4" fill={N} />
      <rect x="8" y="60" width="88" height="8" rx="4" fill={N} opacity="0.7" />
      <rect x="8" y="72" width="65" height="5" rx="2.5" fill={N} opacity="0.4" />
    </svg>
  ),

  Spinner: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <circle cx="60" cy="40" r="26" stroke={N} strokeWidth="7" />
      <path d="M60 14 A26 26 0 0 1 86 40" stroke={P} strokeWidth="7" strokeLinecap="round" />
      <circle cx="60" cy="40" r="14" stroke={L} strokeWidth="4" />
      <path d="M60 26 A14 14 0 0 1 74 40" stroke={M} strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),

  Table: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="6" y="6" width="108" height="14" rx="2" fill={P} />
      <rect x="14" y="10" width="26" height="6" rx="1" fill="white" opacity="0.7" />
      <rect x="48" y="10" width="22" height="6" rx="1" fill="white" opacity="0.7" />
      <rect x="80" y="10" width="26" height="6" rx="1" fill="white" opacity="0.7" />
      <rect x="6" y="22" width="108" height="13" fill={XL} />
      <rect x="14" y="26" width="28" height="4" rx="2" fill={L} />
      <rect x="48" y="26" width="20" height="4" rx="2" fill={L} />
      <rect x="80" y="26" width="24" height="4" rx="2" fill={L} />
      <rect x="6" y="37" width="108" height="13" fill={S} />
      <rect x="14" y="41" width="22" height="4" rx="2" fill={L} />
      <rect x="48" y="41" width="26" height="4" rx="2" fill={L} />
      <rect x="80" y="41" width="18" height="4" rx="2" fill={L} />
      <rect x="6" y="52" width="108" height="13" fill={XL} />
      <rect x="14" y="56" width="30" height="4" rx="2" fill={L} />
      <rect x="48" y="56" width="18" height="4" rx="2" fill={L} />
      <rect x="80" y="56" width="22" height="4" rx="2" fill={L} />
      <rect x="6" y="67" width="108" height="1" fill={L} />
    </svg>
  ),

  Tabs: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="6" y="6" width="34" height="22" rx="3" fill={P} />
      <rect x="12" y="15" width="22" height="4" rx="2" fill="white" />
      <rect x="6" y="26" width="34" height="2" fill={P} />
      <rect x="44" y="6" width="32" height="22" rx="3" fill={N} />
      <rect x="50" y="15" width="20" height="4" rx="2" fill={M} />
      <rect x="80" y="6" width="34" height="22" rx="3" fill={N} />
      <rect x="86" y="15" width="20" height="4" rx="2" fill={M} />
      <rect x="6" y="28" width="108" height="46" rx="3" fill={XL} />
      <rect x="16" y="38" width="64" height="7" rx="2" fill={P} />
      <rect x="16" y="49" width="78" height="4" rx="2" fill={L} />
      <rect x="16" y="57" width="60" height="4" rx="2" fill={L} />
      <rect x="16" y="65" width="45" height="4" rx="2" fill={L} />
    </svg>
  ),

  Tag: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="12" width="44" height="18" rx="9" fill={P} />
      <rect x="16" y="19" width="28" height="4" rx="2" fill="white" />
      <rect x="58" y="12" width="54" height="18" rx="9" fill={L} />
      <rect x="66" y="19" width="30" height="4" rx="2" fill={M} />
      <rect x="8" y="38" width="38" height="18" rx="9" fill={M} />
      <rect x="16" y="45" width="22" height="4" rx="2" fill="white" />
      <rect x="52" y="38" width="60" height="18" rx="9" fill={N} />
      <rect x="60" y="45" width="32" height="4" rx="2" fill={P} />
      <path d="M100 42 L104 46 M104 42 L100 46" stroke={P} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8" y="64" width="30" height="10" rx="5" fill={L} />
      <rect x="44" y="64" width="46" height="10" rx="5" fill={XL} stroke={L} strokeWidth="1" />
    </svg>
  ),

  Text: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="8" width="104" height="7" rx="2" fill={P} />
      <rect x="8" y="20" width="104" height="5" rx="2.5" fill={N} />
      <rect x="8" y="29" width="96" height="5" rx="2.5" fill={N} />
      <rect x="8" y="38" width="100" height="5" rx="2.5" fill={N} />
      <rect x="8" y="47" width="82" height="5" rx="2.5" fill={N} />
      <rect x="8" y="60" width="72" height="4" rx="2" fill={L} />
      <rect x="8" y="68" width="56" height="4" rx="2" fill={L} />
    </svg>
  ),

  TextArea: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="6" width="32" height="4" rx="2" fill={P} />
      <rect x="8" y="14" width="104" height="58" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="22" width="78" height="4" rx="2" fill={N} />
      <rect x="16" y="30" width="86" height="4" rx="2" fill={N} />
      <rect x="16" y="38" width="68" height="4" rx="2" fill={N} />
      <rect x="16" y="46" width="74" height="4" rx="2" fill={N} />
      <rect x="16" y="54" width="52" height="4" rx="2" fill={N} />
      <path d="M100 64 L110 74 M105 64 L110 69" stroke={L} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  TextField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="8" y="12" width="38" height="5" rx="2" fill={P} />
      <rect x="8" y="24" width="104" height="26" rx="3" fill={S} stroke={P} strokeWidth="1.5" />
      <rect x="16" y="34" width="44" height="4" rx="2" fill={N} />
      <rect x="62" y="32" width="2" height="8" rx="1" fill={P} />
      <rect x="8" y="57" width="65" height="3" rx="1.5" fill={N} opacity="0.6" />
    </svg>
  ),

  Toast: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="4" y="4" width="112" height="72" rx="4" fill={N} opacity="0.25" />
      <rect x="12" y="18" width="96" height="44" rx="4" fill={S} stroke={L} strokeWidth="1" />
      <rect x="12" y="18" width="6" height="44" rx="3" fill={M} />
      <circle cx="32" cy="40" r="9" fill={M} />
      <rect x="31" y="35" width="2" height="2" rx="1" fill="white" />
      <rect x="31" y="40" width="2" height="6" rx="1" fill="white" />
      <rect x="48" y="30" width="52" height="6" rx="2" fill={P} />
      <rect x="48" y="40" width="40" height="4" rx="2" fill={N} />
      <path d="M98 22 L103 27 M103 22 L98 27" stroke={N} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  Tooltip: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x="40" y="54" width="40" height="18" rx="4" fill={P} />
      <rect x="50" y="61" width="20" height="4" rx="2" fill="white" />
      <rect x="18" y="8" width="84" height="36" rx="4" fill={P} />
      <rect x="28" y="18" width="64" height="5" rx="2" fill="white" opacity="0.9" />
      <rect x="32" y="27" width="50" height="4" rx="2" fill="white" opacity="0.6" />
      <path d="M52 44 L60 54 L68 44" fill={P} />
    </svg>
  ),

}
