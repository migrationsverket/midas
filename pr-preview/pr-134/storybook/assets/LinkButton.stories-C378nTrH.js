import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{$ as E}from"./Link-XcigMV-L.js";import{c as A}from"./clsx-B-dksMZM.js";import{u as m}from"./useFocusable-C6jNUHDg.js";import{C as D}from"./chevron-right-CtBhK8oM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";import"./createLucideIcon-WuqQdmgs.js";const z='"../../../theme/src/lib/tokens.css"',C="#143c50",I="#25607f",F="#4289ad",V='"Inter", sans-serif',W="1rem",O="500",q="#ffffff",G="#bfbfbf",H="#f2f2f2",J="#e6e6e6",K="#000000",M="undefined",Q="0 0 0 2px #ffffff, 0 0 0 4px #000000",U="(max-width: 767px)",X="#e62323",Y="#b31b1b",Z="#801313",ee="_linkButton_1jpx8_4",re="_secondary_1jpx8_43",te="_tertiary_1jpx8_71",ae="_danger_1jpx8_96",se="_iconLeft_1jpx8_122",ne="_icon_1jpx8_122",oe="_fullwidth_1jpx8_130",ie="_button_1jpx8_135",e={tokens:z,blue150:C,blue130:I,blue90:F,display:V,desktopSize:W,mediumWeight:O,white:q,gray50:G,gray10:H,gray20:J,black:K,medium:M,focus:Q,smBreakpoint:U,signalRed100:X,signalRed130:Y,signalRed150:Z,linkButton:ee,secondary:re,tertiary:te,danger:ae,iconLeft:se,icon:ne,fullwidth:oe,button:ie},d=({children:c,variant:t,fullwidth:T,iconPlacement:$,...l})=>p.jsxs(E,{className:A(e.linkButton,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,T&&e.fullwidth,$==="left"&&e.iconLeft,l.className),...l,children:[c,p.jsx(D,{size:20,className:e.icon})]});try{d.displayName="LinkButton",d.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{m.displayName="RouterProvider",m.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const _e={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},r={args:{children:"Till E-tjänst",href:"#"}},a={args:{...r.args,variant:"secondary"}},s={args:{...r.args,variant:"tertiary"}},n={args:{...r.args,children:"Föregående",iconPlacement:"left"}},o={args:{...r.args,isDisabled:!0}},i={args:{children:"Till E-tjänst",onPress:()=>alert("navigation fn")}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var j,P,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(v=(P=n.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var R,w,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var L,S,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const be=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink"];export{i as AppLink,o as Disabled,n as Previous,r as Primary,a as Secondary,s as Tertiary,be as __namedExportsOrder,_e as default};
