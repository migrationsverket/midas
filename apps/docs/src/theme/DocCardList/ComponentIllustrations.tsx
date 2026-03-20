import React from 'react'

type SVG = React.SVGProps<SVGSVGElement>
type IllustrationFC = (props: SVG) => React.ReactElement

// Lofi palette — all light-dark() aware Midas tokens
const NAVY   = 'var(--midas-button-background-primary-base)' // dark navy
const FIELD  = 'var(--midas-field-01-base)'                  // light gray
const BORDER = 'var(--midas-border-color-primary)'           // high-contrast dark
const GRAY   = 'var(--midas-layer-accent-01-base)'           // medium gray
const ICON   = 'var(--midas-icon-secondary)'                 // secondary gray
const SURF   = 'var(--midas-layer-02-base)'                  // surface / white

// --- Lofi SVG primitives ---

// Input field: gray fill + bottom border only
const Fld = ({ x, y, w, h = 28 }: { x: number; y: number; w: number; h?: number }) => (
  <>
    <rect x={x} y={y} width={w} height={h} fill={FIELD} />
    <line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={BORDER} strokeWidth={1.5} />
  </>
)

// Gray text placeholder bar
const Bar = ({ x, y, w, h = 8 }: { x: number; y: number; w: number; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} fill={GRAY} />
)

// Secondary (icon/label) bar — slightly darker
const IBar = ({ x, y, w, h = 7 }: { x: number; y: number; w: number; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} fill={ICON} />
)

// Primary button: navy solid
const BtnP = ({ x, y, w, h = 26 }: { x: number; y: number; w: number; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} fill={NAVY} />
)

// Secondary button: outlined
const BtnS = ({ x, y, w, h = 26 }: { x: number; y: number; w: number; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} fill="none" stroke={BORDER} strokeWidth={1.5} />
)

// Chevron down centered at (cx, cy)
const Chev = ({ cx, cy, s = 5 }: { cx: number; cy: number; s?: number }) => (
  <polyline
    points={`${cx - s},${cy - s * 0.4} ${cx},${cy + s * 0.6} ${cx + s},${cy - s * 0.4}`}
    stroke={BORDER} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round"
  />
)

// Chevron right (breadcrumb separator)
const ChevR = ({ cx, cy, s = 4 }: { cx: number; cy: number; s?: number }) => (
  <polyline
    points={`${cx - s * 0.5},${cy - s} ${cx + s * 0.5},${cy} ${cx - s * 0.5},${cy + s}`}
    stroke={ICON} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round"
  />
)

// Checkbox
const CBox = ({ x, y, on = false }: { x: number; y: number; on?: boolean }) => (
  <>
    <rect x={x} y={y} width={14} height={14} fill={on ? NAVY : 'none'} stroke={BORDER} strokeWidth={1.5} />
    {on && (
      <polyline
        points={`${x + 3},${y + 7} ${x + 6},${y + 10} ${x + 11},${y + 4}`}
        stroke="white" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
    )}
  </>
)

// Radio button
const Radio = ({ cx, cy, on = false }: { cx: number; cy: number; on?: boolean }) => (
  <>
    <circle cx={cx} cy={cy} r={7} fill="none" stroke={BORDER} strokeWidth={1.5} />
    {on && <circle cx={cx} cy={cy} r={3} fill={NAVY} />}
  </>
)

// Close X centered at (cx, cy)
const XIcon = ({ cx, cy, s = 4 }: { cx: number; cy: number; s?: number }) => (
  <>
    <line x1={cx - s} y1={cy - s} x2={cx + s} y2={cy + s} stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" />
    <line x1={cx + s} y1={cy - s} x2={cx - s} y2={cy + s} stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" />
  </>
)

// ---

export const FallbackIllustration: IllustrationFC = (props) => (
  <svg viewBox="0 0 120 80" fill="none" {...props}>
    <IBar x={8} y={10} w={48} />
    <Fld x={8} y={22} w={104} />
    <Fld x={8} y={56} w={104} />
    <Bar x={8} y={38} w={104} h={12} />
    <Bar x={14} y={41} w={70} h={6} />
  </svg>
)

export const illustrations: Record<string, IllustrationFC> = {
  Accordion: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Row 1 closed */}
      <Chev cx={16} cy={22} s={4} />
      <Bar x={28} y={18} w={72} />
      <line x1={8} y1={30} x2={112} y2={30} stroke={GRAY} strokeWidth={0.8} />
      {/* Row 2 open */}
      <polyline points="12,42 16,38 20,42" stroke={BORDER} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Bar x={28} y={38} w={60} />
      {/* Content area */}
      <rect x={8} y={48} width={104} height={24} fill={FIELD} />
      <Bar x={16} y={55} w={72} />
      <Bar x={16} y={65} w={52} />
    </svg>
  ),

  Badge: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Icon area */}
      <rect x={34} y={18} width={32} height={32} fill={FIELD} />
      <line x1={34} y1={50} x2={66} y2={50} stroke={BORDER} strokeWidth={1.5} />
      {/* Bell icon shape */}
      <path d="M50 28 Q50 24 54 26 Q58 28 58 34 L58 38 L42 38 L42 34 Q42 28 46 26 Q50 24 50 28" fill={GRAY} />
      {/* Badge dot */}
      <circle cx={62} cy={22} r={8} fill={NAVY} />
      <Bar x={57} y={19} w={10} h={6} />
      {/* Label */}
      <Bar x={40} y={58} w={20} />
    </svg>
  ),

  Breadcrumbs: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={8} y={35} w={22} h={7} />
      <ChevR cx={38} cy={38} />
      <Bar x={48} y={35} w={22} h={7} />
      <ChevR cx={78} cy={38} />
      <Bar x={88} y={35} w={24} h={7} />
    </svg>
  ),

  Button: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <BtnP x={10} y={8} w={100} h={20} />
      <BtnS x={10} y={34} w={100} h={20} />
      <Bar x={38} y={64} w={44} h={6} />
      <line x1={38} y1={70} x2={82} y2={70} stroke={BORDER} strokeWidth={1} />
    </svg>
  ),

  Calendar: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Header */}
      <rect x={8} y={6} width={104} height={16} fill={GRAY} />
      {/* Day headers */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <rect key={i} x={10 + i * 14} y={25} width={10} height={6} fill={ICON} opacity={0.5} />
      ))}
      {/* Day grid */}
      {[0, 1, 2, 3].map(row =>
        [0, 1, 2, 3, 4, 5, 6].map(col => (
          <rect
            key={`${row}-${col}`}
            x={10 + col * 14}
            y={35 + row * 11}
            width={10} height={8}
            fill={row === 1 && col === 3 ? NAVY : GRAY}
            opacity={row === 1 && col === 3 ? 1 : 0.3}
          />
        ))
      )}
    </svg>
  ),

  Card: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={8} width={104} height={64} fill="none" stroke={BORDER} strokeWidth={1} />
      <rect x={8} y={8} width={104} height={30} fill={GRAY} />
      <Bar x={16} y={46} w={60} h={8} />
      <Bar x={16} y={58} w={44} />
    </svg>
  ),

  Checkbox: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <CBox x={8} y={12} />
      <Bar x={28} y={17} w={64} />
      <CBox x={8} y={34} on />
      <Bar x={28} y={39} w={52} />
      <CBox x={8} y={56} />
      <Bar x={28} y={61} w={58} />
    </svg>
  ),

  ComboBox: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={10} w={40} />
      <Fld x={8} y={22} w={104} />
      <Chev cx={100} cy={36} />
      {/* Dropdown */}
      <rect x={8} y={52} width={104} height={22} fill={FIELD} stroke={BORDER} strokeWidth={0.8} />
      <rect x={8} y={52} width={104} height={11} fill={NAVY} opacity={0.12} />
      <Bar x={16} y={56} w={56} />
      <Bar x={16} y={67} w={44} />
    </svg>
  ),

  DateField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={10} w={40} />
      <rect x={8} y={22} width={104} height={28} fill={FIELD} />
      <line x1={8} y1={50} x2={112} y2={50} stroke={BORDER} strokeWidth={1.5} />
      {/* DD segment highlighted */}
      <rect x={13} y={29} width={20} height={14} fill={NAVY} opacity={0.15} />
      <Bar x={15} y={33} w={16} h={6} />
      <Bar x={37} y={33} w={4} h={6} />
      <Bar x={45} y={33} w={16} h={6} />
      <Bar x={65} y={33} w={4} h={6} />
      <Bar x={73} y={33} w={28} h={6} />
    </svg>
  ),

  DatePicker: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={10} w={40} />
      {/* Date field */}
      <rect x={8} y={22} width={80} height={28} fill={FIELD} />
      <line x1={8} y1={50} x2={88} y2={50} stroke={BORDER} strokeWidth={1.5} />
      <Bar x={14} y={33} w={48} h={6} />
      {/* Calendar icon button */}
      <rect x={90} y={22} width={22} height={28} fill={FIELD} />
      <line x1={90} y1={50} x2={112} y2={50} stroke={BORDER} strokeWidth={1.5} />
      <rect x={95} y={30} width={12} height={11} fill="none" stroke={BORDER} strokeWidth={1} />
      <line x1={95} y1={34} x2={107} y2={34} stroke={BORDER} strokeWidth={0.8} />
      <line x1={99} y1={28} x2={99} y2={32} stroke={BORDER} strokeWidth={1} />
      <line x1={103} y1={28} x2={103} y2={32} stroke={BORDER} strokeWidth={1} />
    </svg>
  ),

  FileTrigger: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <BtnS x={10} y={18} w={100} h={36} />
      {/* Upload arrow */}
      <line x1={60} y1={44} x2={60} y2={28} stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" />
      <polyline points="53,35 60,28 67,35" stroke={BORDER} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Bar x={72} y={34} w={24} h={6} />
    </svg>
  ),

  Grid: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {[0, 1, 2].map(col =>
        [0, 1].map(row => (
          <rect
            key={`${col}-${row}`}
            x={8 + col * 36} y={8 + row * 36}
            width={30} height={28}
            fill={FIELD} stroke={BORDER} strokeWidth={0.8}
          />
        ))
      )}
    </svg>
  ),

  Heading: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={8} y={12} w={92} h={14} />
      <Bar x={8} y={34} w={72} h={10} />
      <Bar x={8} y={54} w={104} h={7} />
      <Bar x={8} y={65} w={76} h={7} />
    </svg>
  ),

  InfoBanner: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={8} width={104} height={64} fill={FIELD} />
      <rect x={8} y={8} width={4} height={64} fill={NAVY} />
      {/* Info icon */}
      <circle cx={24} cy={26} r={8} fill={NAVY} />
      <line x1={24} y1={23} x2={24} y2={27} stroke={SURF} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={24} cy={30} r={1} fill={SURF} />
      <Bar x={36} y={21} w={64} h={8} />
      <Bar x={16} y={42} w={88} />
      <Bar x={16} y={54} w={72} />
      <Bar x={16} y={64} w={80} />
    </svg>
  ),

  Layout: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Header */}
      <rect x={8} y={8} width={104} height={14} fill={NAVY} />
      {/* Sidebar */}
      <rect x={8} y={24} width={28} height={48} fill={GRAY} />
      <Bar x={12} y={30} w={20} h={6} />
      <Bar x={12} y={40} w={20} h={6} />
      <Bar x={12} y={50} w={20} h={6} />
      {/* Main */}
      <rect x={38} y={24} width={74} height={48} fill={FIELD} />
      <Bar x={44} y={32} w={56} h={7} />
      <Bar x={44} y={44} w={60} />
      <Bar x={44} y={54} w={48} />
      <Bar x={44} y={64} w={56} />
    </svg>
  ),

  Link: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={20} y={33} w={80} h={8} />
      <line x1={20} y1={41} x2={100} y2={41} stroke={NAVY} strokeWidth={1.5} />
    </svg>
  ),

  LinkButton: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <BtnS x={10} y={22} w={100} h={28} />
      <Bar x={30} y={34} w={60} h={6} />
      <line x1={30} y1={40} x2={90} y2={40} stroke={BORDER} strokeWidth={1} />
    </svg>
  ),

  Logo: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={26} width={52} height={24} fill={NAVY} />
      <Bar x={66} y={28} w={46} h={8} />
      <Bar x={66} y={40} w={34} />
    </svg>
  ),

  Menu: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Trigger */}
      <rect x={8} y={6} width={72} height={22} fill={FIELD} />
      <line x1={8} y1={28} x2={80} y2={28} stroke={BORDER} strokeWidth={1.5} />
      <Bar x={14} y={15} w={44} />
      <Chev cx={72} cy={17} s={4} />
      {/* Dropdown */}
      <rect x={8} y={30} width={104} height={46} fill={FIELD} stroke={BORDER} strokeWidth={0.8} />
      <rect x={8} y={30} width={104} height={15} fill={NAVY} opacity={0.12} />
      <Bar x={16} y={35} w={60} />
      <Bar x={16} y={52} w={48} />
      <Bar x={16} y={65} w={55} />
    </svg>
  ),

  Modal: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={0} y={0} width={120} height={80} fill={BORDER} opacity={0.12} />
      <rect x={14} y={10} width={92} height={60} fill={SURF} stroke={BORDER} strokeWidth={0.8} />
      <Bar x={22} y={20} w={56} h={8} />
      <XIcon cx={98} cy={22} s={4} />
      <Bar x={22} y={36} w={76} />
      <Bar x={22} y={46} w={60} />
      <BtnP x={22} y={56} w={36} h={8} />
    </svg>
  ),

  Pagination: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Prev */}
      <BtnS x={8} y={28} w={18} h={20} />
      <polyline points="19,34 15,38 19,42" stroke={BORDER} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pages */}
      <rect x={30} y={28} width={16} height={20} fill={NAVY} />
      {[1, 2, 3].map(i => (
        <BtnS key={i} x={30 + i * 18} y={28} w={16} h={20} />
      ))}
      {/* Next */}
      <BtnS x={100} y={28} w={18} h={20} />
      <polyline points="107,34 111,38 107,42" stroke={BORDER} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Popover: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Trigger */}
      <BtnS x={8} y={52} w={24} h={20} />
      <Bar x={13} y={60} w={14} />
      {/* Popover */}
      <rect x={36} y={6} width={76} height={48} fill={SURF} stroke={BORDER} strokeWidth={1} />
      {/* Arrow */}
      <polygon points="36,32 28,36 36,40" fill={SURF} />
      <polyline points="36,32 28,36 36,40" stroke={BORDER} strokeWidth={1} fill="none" />
      <line x1={36} y1={32} x2={36} y2={40} stroke={SURF} strokeWidth={2} />
      <Bar x={44} y={18} w={56} h={8} />
      <Bar x={44} y={32} w={60} />
      <Bar x={44} y={43} w={44} />
    </svg>
  ),

  ProgressBar: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={8} y={28} w={50} />
      <Bar x={88} y={28} w={24} />
      <rect x={8} y={42} width={104} height={8} fill={GRAY} />
      <rect x={8} y={42} width={65} height={8} fill={NAVY} />
    </svg>
  ),

  Radio: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Radio cx={15} cy={20} />
      <Bar x={28} y={16} w={60} />
      <Radio cx={15} cy={40} on />
      <Bar x={28} y={36} w={50} />
      <Radio cx={15} cy={60} />
      <Bar x={28} y={56} w={55} />
    </svg>
  ),

  SearchField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={24} width={104} height={28} fill={FIELD} />
      <line x1={8} y1={52} x2={112} y2={52} stroke={BORDER} strokeWidth={1.5} />
      {/* Magnifier */}
      <circle cx={24} cy={38} r={7} fill="none" stroke={BORDER} strokeWidth={1.5} />
      <line x1={29} y1={43} x2={34} y2={48} stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" />
      <Bar x={40} y={34} w={52} />
    </svg>
  ),

  Select: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={10} w={40} />
      <rect x={8} y={22} width={104} height={28} fill={FIELD} />
      <line x1={8} y1={50} x2={112} y2={50} stroke={BORDER} strokeWidth={1.5} />
      {/* Selected pill indicator */}
      <rect x={14} y={32} width={32} height={12} rx={6} fill={NAVY} />
      <Chev cx={100} cy={36} />
    </svg>
  ),

  Skeleton: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={10} width={104} height={12} fill={GRAY} opacity={0.7} />
      <rect x={8} y={28} width={80} height={10} fill={GRAY} opacity={0.5} />
      <rect x={8} y={44} width={92} height={10} fill={GRAY} opacity={0.6} />
      <rect x={8} y={60} width={60} height={10} fill={GRAY} opacity={0.35} />
    </svg>
  ),

  Spinner: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <circle cx={60} cy={40} r={22} stroke={GRAY} strokeWidth={5} />
      <path d="M 60 18 A 22 22 0 0 1 82 40" stroke={NAVY} strokeWidth={5} strokeLinecap="round" />
    </svg>
  ),

  Table: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Header */}
      <rect x={8} y={6} width={104} height={16} fill={GRAY} />
      <Bar x={14} y={12} w={22} h={6} />
      <Bar x={48} y={12} w={18} h={6} />
      <Bar x={80} y={12} w={22} h={6} />
      {/* Rows */}
      {[0, 1, 2].map(i => (
        <React.Fragment key={i}>
          <rect x={8} y={22 + i * 16} width={104} height={14} fill={i % 2 === 0 ? FIELD : GRAY} opacity={i % 2 === 0 ? 1 : 0.2} />
          <Bar x={14} y={27 + i * 16} w={24} />
          <Bar x={48} y={27 + i * 16} w={18} />
          <Bar x={80} y={27 + i * 16} w={22} />
        </React.Fragment>
      ))}
    </svg>
  ),

  Tabs: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={8} y={10} w={28} h={8} />
      <Bar x={42} y={10} w={28} h={8} />
      <Bar x={76} y={10} w={28} h={8} />
      {/* Active tab indicator */}
      <line x1={8} y1={18} x2={36} y2={18} stroke={NAVY} strokeWidth={2} />
      <line x1={8} y1={22} x2={112} y2={22} stroke={GRAY} strokeWidth={1} />
      <rect x={8} y={26} width={104} height={46} fill={FIELD} />
      <Bar x={16} y={36} w={80} h={8} />
      <Bar x={16} y={50} w={64} />
      <Bar x={16} y={62} w={72} />
    </svg>
  ),

  Tag: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Navy tag */}
      <rect x={8} y={30} width={30} height={16} rx={8} fill={NAVY} />
      <Bar x={15} y={36} w={16} h={6} />
      {/* Outlined dismissable tag */}
      <rect x={44} y={30} width={38} height={16} rx={8} fill="none" stroke={BORDER} strokeWidth={1} />
      <Bar x={51} y={36} w={14} h={6} />
      <XIcon cx={74} cy={38} s={3} />
      {/* Gray tag */}
      <rect x={88} y={30} width={24} height={16} rx={8} fill={GRAY} />
      <Bar x={94} y={36} w={12} h={6} />
    </svg>
  ),

  Text: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <Bar x={8} y={10} w={104} h={9} />
      <Bar x={8} y={25} w={88} h={7} />
      <Bar x={8} y={37} w={96} h={7} />
      <Bar x={8} y={49} w={70} h={7} />
      <Bar x={8} y={63} w={60} h={7} />
    </svg>
  ),

  TextArea: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={8} w={40} />
      <rect x={8} y={20} width={104} height={52} fill={FIELD} />
      <line x1={8} y1={72} x2={112} y2={72} stroke={BORDER} strokeWidth={1.5} />
      <Bar x={14} y={30} w={80} />
      <Bar x={14} y={42} w={64} />
      <Bar x={14} y={54} w={72} />
    </svg>
  ),

  TextField: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <IBar x={8} y={10} w={48} />
      <Fld x={8} y={22} w={104} />
      <Bar x={14} y={33} w={60} h={6} />
      <Bar x={8} y={56} w={80} h={6} />
    </svg>
  ),

  Toast: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      <rect x={8} y={22} width={104} height={34} fill={NAVY} />
      {/* Check circle */}
      <circle cx={24} cy={39} r={8} fill={SURF} opacity={0.2} />
      <polyline points="19,39 23,43 30,34" stroke={SURF} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Bar x={36} y={35} w={60} h={7} />
      <line x1={100} y1={33} x2={106} y2={41} stroke={SURF} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={106} y1={33} x2={100} y2={41} stroke={SURF} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  ),

  Tooltip: (props) => (
    <svg viewBox="0 0 120 80" fill="none" {...props}>
      {/* Tooltip box */}
      <rect x={8} y={6} width={104} height={38} fill={NAVY} />
      {/* Arrow */}
      <polygon points="52,44 60,54 68,44" fill={NAVY} />
      <Bar x={16} y={16} w={88} h={7} />
      <Bar x={16} y={29} w={68} h={7} />
      {/* Trigger element */}
      <circle cx={60} cy={66} r={8} fill="none" stroke={BORDER} strokeWidth={1.5} />
      <line x1={60} y1={63} x2={60} y2={67} stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={60} cy={70} r={1} fill={BORDER} />
    </svg>
  ),
}
