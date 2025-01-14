import{j as a}from"./jsx-runtime-CfatFE5O.js";import{$ as D}from"./Link-D86ra8fS.js";import{c as I}from"./clsx-B-dksMZM.js";import{u as p}from"./useFocusable-CUvAewCR.js";import{C,a as F}from"./chevron-right-CvgscaxW.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DQK9Z80p.js";const W='"../../../theme/src/lib/tokens.css"',O="#143c50",G="#25607f",H="#4289ad",J='"Inter", sans-serif',K="1rem",M="500",Q="#ffffff",U="#bfbfbf",X="#f2f2f2",Y="#e6e6e6",Z="#000000",ee="undefined",re="0 0 0 2px #ffffff, 0 0 0 4px #000000",te="(max-width: 767px)",ae="#e62323",ne="#b31b1b",se="#801313",oe="_linkButton_13utk_4",ie="_secondary_13utk_43",ce="_tertiary_13utk_67",le="_danger_13utk_88",de="_iconBtn_13utk_110",ue="_iconLeft_13utk_131",me="_fullwidth_13utk_135",pe="_button_13utk_140",e={tokens:W,blue150:O,blue130:G,blue90:H,display:J,desktopSize:K,mediumWeight:M,white:Q,gray50:U,gray10:X,gray20:Y,black:Z,medium:ee,focus:re,smBreakpoint:te,signalRed100:ae,signalRed130:ne,signalRed150:se,linkButton:oe,secondary:ie,tertiary:ce,danger:le,iconBtn:de,iconLeft:ue,fullwidth:me,button:pe},d=({children:l,variant:t,fullwidth:T,icon:u,iconPlacement:m,className:V,as:$,...q})=>{const z=$||D,A=()=>u?a.jsx(u,{size:20,className:e.icon}):m==="left"?a.jsx(C,{size:20,className:e.icon}):a.jsx(F,{size:20,className:e.icon});return a.jsxs(z,{className:I(e.linkButton,t==="primary"&&e.primary,t==="secondary"&&e.secondary,t==="tertiary"&&e.tertiary,t==="danger"&&e.danger,t==="icon"&&e.iconBtn,T&&e.fullwidth,m==="left"&&e.iconLeft,V),...q,children:[l,a.jsx(A,{})]})};try{d.displayName="LinkButton",d.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"icon" | "primary" | "secondary" | "tertiary" | "danger"'}},fullwidth:{defaultValue:null,description:"",name:"fullwidth",required:!1,type:{name:"boolean"}},iconPlacement:{defaultValue:null,description:"",name:"iconPlacement",required:!1,type:{name:'"left" | "right"'}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"LucideIcon"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{p.displayName="RouterProvider",p.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const ve={component:d,title:"Components/LinkButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{name:"label"},variant:{options:["primary","secondary","tertiary","danger"],control:{type:"radio"},defaultValue:"primary"},isDisabled:{options:[!0,!1],control:{type:"radio"}},iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},r={args:{children:"Till E-tjänst",href:"#"}},n={args:{...r.args,variant:"secondary"}},s={args:{...r.args,variant:"tertiary"}},o={args:{...r.args,children:"Föregående",iconPlacement:"left"}},i={args:{...r.args,isDisabled:!0}},c={args:{children:"Till E-tjänst",onPress:()=>alert("navigation fn")}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    href: '#'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,b,h;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'secondary'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,x,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: 'tertiary'
  }
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var v,B,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Föregående',
    iconPlacement: 'left'
  }
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var L,R,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var N,S,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Be=["Primary","Secondary","Tertiary","Previous","Disabled","AppLink"];export{c as AppLink,i as Disabled,o as Previous,r as Primary,n as Secondary,s as Tertiary,Be as __namedExportsOrder,ve as default};
