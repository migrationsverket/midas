import{j as p}from"./jsx-runtime-CfatFE5O.js";import{$ as E}from"./Link-Bpch1j5v.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as m}from"./useFocusable-CBtYJN0G.js";import{C as D}from"./chevron-right-BQHsS9JL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DQK9Z80p.js";const z='"../../../theme/src/lib/tokens.css"',C="#143c50",I="#25607f",F="#4289ad",V='"Inter", sans-serif',W="1rem",O="500",q="#ffffff",G="#bfbfbf",H="#f2f2f2",J="#e6e6e6",K="#000000",M="undefined",Q="0 0 0 2px #ffffff, 0 0 0 4px #000000",U="(max-width: 767px)",X="#e62323",Y="#b31b1b",Z="#801313",ee="_linkButton_11l4p_4",re="_secondary_11l4p_43",te="_tertiary_11l4p_67",ae="_danger_11l4p_88",se="_iconLeft_11l4p_110",ne="_icon_11l4p_110",oe="_fullwidth_11l4p_118",ie="_button_11l4p_123",e={tokens:z,blue150:C,blue130:I,blue90:F,display:V,desktopSize:W,mediumWeight:O,white:q,gray50:G,gray10:H,gray20:J,black:K,medium:M,focus:Q,smBreakpoint:U,signalRed100:X,signalRed130:Y,signalRed150:Z,linkButton:ee,secondary:re,tertiary:te,danger:ae,iconLeft:se,icon:ne,fullwidth:oe,button:ie},d=({children:c,variant:t,fullwidth:T,iconPlacement:$,...l})=>p.jsxs(E,{className:A(e.linkButton,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,T&&e.fullwidth,$==="left"&&e.iconLeft,l.className),...l,children:[c,p.jsx(D,{size:20,className:e.icon})]});try{d.displayName="LinkButton",d.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{m.displayName="RouterProvider",m.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const _e={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},r={args:{children:"Till E-tjänst",href:"#"}},a={args:{...r.args,variant:"secondary"}},s={args:{...r.args,variant:"tertiary"}},n={args:{...r.args,children:"Föregående",iconPlacement:"left"}},o={args:{...r.args,isDisabled:!0}},i={args:{children:"Till E-tjänst",onPress:()=>alert("navigation fn")}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,k,P;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var x,v,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var w,B,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,j,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const be=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink"];export{i as AppLink,o as Disabled,n as Previous,r as Primary,a as Secondary,s as Tertiary,be as __namedExportsOrder,_e as default};
