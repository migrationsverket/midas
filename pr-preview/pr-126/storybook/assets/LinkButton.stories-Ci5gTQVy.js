import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{$ as E}from"./Link-DTBCvxNE.js";import{c as A}from"./clsx-B-dksMZM.js";import{k as p}from"./useFocusable-VocBF6K7.js";import{C as D}from"./chevron-right-CtBhK8oM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Drt3gf4w.js";import"./createLucideIcon-WuqQdmgs.js";const z='"../../../theme/src/lib/tokens.css"',C="#143c50",I="#25607f",F="#4289ad",V='"Inter", sans-serif',W="1rem",O="500",q="#ffffff",G="#bfbfbf",H="#f2f2f2",J="#e6e6e6",K="#000000",M="undefined",Q="(max-width: 767px)",U="#e62323",X="#b31b1b",Y="#801313",Z="_linkButton_1vaxn_4",ee="_secondary_1vaxn_44",re="_tertiary_1vaxn_73",ae="_danger_1vaxn_99",te="_iconLeft_1vaxn_126",ne="_icon_1vaxn_126",se="_fullwidth_1vaxn_134",oe="_button_1vaxn_139",e={tokens:z,blue150:C,blue130:I,blue90:F,display:V,desktopSize:W,mediumWeight:O,white:q,gray50:G,gray10:H,gray20:J,black:K,medium:M,smBreakpoint:Q,signalRed100:U,signalRed130:X,signalRed150:Y,linkButton:Z,secondary:ee,tertiary:re,danger:ae,iconLeft:te,icon:ne,fullwidth:se,button:oe},d=({children:c,variant:a,fullwidth:T,iconPlacement:$,...l})=>m.jsxs(E,{className:A(e.linkButton,a==="primary"&&e.primary,a==="secondary"&&e.secondary,a==="tertiary"&&e.tertiary,a==="danger"&&e.danger,T&&e.fullwidth,$==="left"&&e.iconLeft,l.className),...l,children:[c,m.jsx(D,{size:20,className:e.icon})]});try{d.displayName="LinkButton",d.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{p.displayName="RouterProvider",p.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const fe={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},r={args:{children:"Till E-tjänst",href:"#"}},t={args:{...r.args,variant:"secondary"}},n={args:{...r.args,variant:"tertiary"}},s={args:{...r.args,children:"Föregående",iconPlacement:"left"}},o={args:{...r.args,isDisabled:!0}},i={args:{children:"Till E-tjänst",onPress:()=>alert("navigation fn")}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,_,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(b=(_=t.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,k,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,P,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(R=(P=s.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var w,B,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,j,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const _e=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink"];export{i as AppLink,o as Disabled,s as Previous,r as Primary,t as Secondary,n as Tertiary,_e as __namedExportsOrder,fe as default};
