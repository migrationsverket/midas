import{j as n}from"./jsx-runtime-CBDCb4rg.js";import{$ as u}from"./Button-BeKNHBLF.js";import{c as m}from"./clsx-B-dksMZM.js";const p="_button_1tedv_4",y="_primary_1tedv_36",f="_secondary_1tedv_42",h="_tertiary_1tedv_66",_="_iconBtn_1tedv_88",g="_danger_1tedv_109",v="_iconRight_1tedv_131",b="_fullwidth_1tedv_135",w="_small_1tedv_139",e={button:p,primary:y,secondary:f,tertiary:h,iconBtn:_,danger:g,iconRight:v,fullwidth:b,small:w},R=({variant:t="primary",fullwidth:o,className:s,iconPlacement:l,size:a,icon:i,iconSize:d,...r})=>{const c=a==="small"?14:d||20;return n.jsx(u,{className:m(e.button,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,t==="icon"&&e.iconBtn,o&&e.fullwidth,a==="small"&&e.small,l==="right"&&e.iconRight,s),...r,children:n.jsxs(n.Fragment,{children:[i&&n.jsx(i,{"aria-hidden":!0,size:c}),r.children]})})};R.__docgenInfo={description:`Button to perform various actions.

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
| string`,elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"},{name:"string"}]},description:""}}};export{R as B};
