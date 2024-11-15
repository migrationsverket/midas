import{j as m}from"./jsx-runtime-CfatFE5O.js";import{$ as E}from"./Link-Bpch1j5v.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as p}from"./useFocusable-CBtYJN0G.js";import{C as D}from"./chevron-right-BQHsS9JL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DQK9Z80p.js";const z='"../../../theme/src/lib/tokens.css"',C="#143c50",I="#25607f",F="#4289ad",V='"Inter", sans-serif',W="1rem",O="500",q="#ffffff",G="#bfbfbf",H="#f2f2f2",J="#e6e6e6",K="#000000",M="undefined",Q="(max-width: 767px)",U="#e62323",X="#b31b1b",Y="#801313",Z="_linkButton_o3fxl_4",ee="_secondary_o3fxl_44",re="_tertiary_o3fxl_73",te="_danger_o3fxl_99",ae="_iconLeft_o3fxl_126",se="_icon_o3fxl_126",oe="_fullwidth_o3fxl_134",ne="_button_o3fxl_139",e={tokens:z,blue150:C,blue130:I,blue90:F,display:V,desktopSize:W,mediumWeight:O,white:q,gray50:G,gray10:H,gray20:J,black:K,medium:M,smBreakpoint:Q,signalRed100:U,signalRed130:X,signalRed150:Y,linkButton:Z,secondary:ee,tertiary:re,danger:te,iconLeft:ae,icon:se,fullwidth:oe,button:ne},d=({children:c,variant:t,fullwidth:T,iconPlacement:$,...l})=>m.jsxs(E,{className:A(e.linkButton,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,T&&e.fullwidth,$==="left"&&e.iconLeft,l.className),...l,children:[c,m.jsx(D,{size:20,className:e.icon})]});try{d.displayName="LinkButton",d.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{p.displayName="RouterProvider",p.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const ye={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},r={args:{children:"Till E-tjänst",href:"#"}},a={args:{...r.args,variant:"secondary"}},s={args:{...r.args,variant:"tertiary"}},o={args:{...r.args,children:"Föregående",iconPlacement:"left"}},n={args:{...r.args,isDisabled:!0}},i={args:{children:"Till E-tjänst",onPress:()=>alert("navigation fn")}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,k,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var P,v,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(R=(v=o.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var w,B,L;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,j,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const _e=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink"];export{i as AppLink,n as Disabled,o as Previous,r as Primary,a as Secondary,s as Tertiary,_e as __namedExportsOrder,ye as default};
