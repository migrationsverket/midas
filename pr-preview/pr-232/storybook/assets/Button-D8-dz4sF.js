import{j as t}from"./jsx-runtime-DtgEGaVE.js";import{$ as u}from"./Button-PMtIgk3z.js";import{c as m}from"./clsx-B-dksMZM.js";const f='"../theme/tokens.css"',p="#143c50",y="#25607f",b="#4289ad",g='"Inter", sans-serif',h="1rem",_="500",R="#ffffff",w="#bfbfbf",k="#f2f2f2",v="#e6e6e6",x="#000000",B="undefined",j="(max-width: 767px)",q="0 0 0 2px #ffffff, 0 0 0 4px #000000",z="#e62323",N="#b31b1b",T="#801313",A="_button_1csb8_4",S="_primary_1csb8_41",$="_secondary_1csb8_47",I="_tertiary_1csb8_71",P="_iconBtn_1csb8_93",W="_danger_1csb8_114",C="_iconRight_1csb8_136",D="_fullwidth_1csb8_140",E="_small_1csb8_144",e={tokens:f,blue150:p,blue130:y,blue90:b,display:g,desktopSize:h,mediumWeight:_,white:R,gray50:w,gray10:k,gray20:v,black:x,medium:B,smBreakpoint:j,focus:q,signalRed100:z,signalRed130:N,signalRed150:T,button:A,primary:S,secondary:$,tertiary:I,iconBtn:P,danger:W,iconRight:C,fullwidth:D,small:E},F=({variant:n="primary",fullwidth:o,className:r,iconPlacement:c,size:s,icon:a,iconSize:l,...i})=>{const d=s==="small"?14:l||20;return t.jsx(u,{className:m(e.button,n==="primary"&&e.primary,n==="secondary"&&e.secondary,n==="tertiary"&&e.tertiary,n==="danger"&&e.danger,n==="icon"&&e.iconBtn,o&&e.fullwidth,s==="small"&&e.small,c==="right"&&e.iconRight,r),...i,children:t.jsxs(t.Fragment,{children:[a&&t.jsx(a,{"aria-hidden":!0,size:d}),i.children]})})};F.__docgenInfo={description:`Button to perform various actions.

@interface MidasButton

@see {@link https://designsystem.migrationsverket.se/components/button}`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'icon'"}]},description:`Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label

@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},fullwidth:{required:!1,tsType:{name:"boolean"},description:`Adds width: 100%; for the button to span entire width of parent

@default false`},size:{required:!1,tsType:{name:"literal",value:"'small'"},description:"Choose between different button sizes"},icon:{required:!1,tsType:{name:"LucideIcon"},description:`Add an icon from lucide-react

@see {@link https://lucide.dev/icons/}`},iconSize:{required:!1,tsType:{name:"number"},description:"Adjust icon size"},iconPlacement:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Display your icon on the left och right side of the button text"},children:{required:!1,tsType:{name:"union",raw:`| React.ReactNode
| ((
    values: ButtonRenderProps & {
      defaultChildren: React.ReactNode | undefined
    }
  ) => React.ReactNode)
| string`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"},{name:"string"}]},description:""}}};export{F as B};
