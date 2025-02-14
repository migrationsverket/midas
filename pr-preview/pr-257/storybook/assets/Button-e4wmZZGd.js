import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{$ as u}from"./Button-QjS3GA-B.js";import{c as m}from"./clsx-B-dksMZM.js";const f='"../theme/tokens.css"',p="#143c50",y="#25607f",g="#4289ad",h='"Inter", sans-serif',b="1rem",_="500",v="#ffffff",R="#bfbfbf",w="#f2f2f2",k="#e6e6e6",x="#000000",B="undefined",j="(max-width: 767px)",q="0 0 0 2px #ffffff, 0 0 0 4px #000000",z="#e62323",N="#b31b1b",T="#801313",A="_button_1tedv_4",S="_primary_1tedv_36",$="_secondary_1tedv_42",I="_tertiary_1tedv_66",P="_iconBtn_1tedv_88",W="_danger_1tedv_109",C="_iconRight_1tedv_131",D="_fullwidth_1tedv_135",E="_small_1tedv_139",e={tokens:f,blue150:p,blue130:y,blue90:g,display:h,desktopSize:b,mediumWeight:_,white:v,gray50:R,gray10:w,gray20:k,black:x,medium:B,smBreakpoint:j,focus:q,signalRed100:z,signalRed130:N,signalRed150:T,button:A,primary:S,secondary:$,tertiary:I,iconBtn:P,danger:W,iconRight:C,fullwidth:D,small:E},F=({variant:t="primary",fullwidth:o,className:r,iconPlacement:c,size:a,icon:i,iconSize:l,...s})=>{const d=a==="small"?14:l||20;return n.jsx(u,{className:m(e.button,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,t==="icon"&&e.iconBtn,o&&e.fullwidth,a==="small"&&e.small,c==="right"&&e.iconRight,r),...s,children:n.jsxs(n.Fragment,{children:[i&&n.jsx(i,{"aria-hidden":!0,size:d}),s.children]})})};F.__docgenInfo={description:`Button to perform various actions.

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
