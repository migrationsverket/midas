import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{$ as z}from"./Link-DlrH9a4q.js";import{c as A}from"./clsx-B-dksMZM.js";import{a as e}from"./Button-DPHeQjfs.js";import{k as m}from"./useFocusable-oEo1n-jK.js";import{P as I}from"./plus-CMayvuTk.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hidden-CeomKQRv.js";import"./index-Drt3gf4w.js";import"./createLucideIcon-WuqQdmgs.js";const W='"../../../theme/src/lib/tokens.css"',F='"Inter", sans-serif',T="1rem",E="500",O="#143c50",V="#25607f",q="#4289ad",C="_link_bzhf3_4",D="_fullwidth_bzhf3_25",u={tokens:W,display:F,desktopSize:T,mediumWeight:E,blue150:O,blue130:V,blue90:q,link:C,fullwidth:D},l=({variant:r="primary",fullwidth:L,size:d,icon:p,iconSize:$,iconPlacement:N,...c})=>{const R=d==="small"?14:$||16;return t.jsx(z,{className:A(e.button,r==="primary"&&e.primary,r==="secondary"&&e.secondary,r==="tertiary"&&e.tertiary,r==="danger"&&e.danger,r==="icon"&&e.iconBtn,L&&u.fullwidth,d==="small"&&e.small,N==="right"?e.iconRight:e.iconLeft,u.link,c.className),...c,children:t.jsxs(t.Fragment,{children:[p&&t.jsx(p,{size:R}),c.children]})})};try{l.displayName="LinkButton",l.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{m.displayName="RouterProvider",m.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const te={component:l,title:"Components/LinkButton",tags:["autodocs"],argTypes:{iconPlacement:{options:["right","left"],control:{type:"radio"},defaultValue:"left"}}},o={args:{children:"Hej",href:"#"}},n={args:{children:"Hej",href:"#",variant:"secondary"}},a={args:{children:"Hej",variant:"tertiary",href:"#",icon:I}},s={args:{children:"Hej",fullwidth:!0,href:"#"}},i={args:{children:"Button",onPress:()=>alert("navigation fn")}};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    href: '#'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,_,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    href: '#',
    variant: 'secondary'
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var k,j,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    variant: 'tertiary',
    href: '#',
    icon: Plus
  }
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var x,P,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    fullwidth: true,
    href: '#'
  }
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var v,B,H;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    onPress: () => alert('navigation fn')
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const oe=["Primary","Secondary","TertiaryWithIcon","Fullwidth","AppLink"];export{i as AppLink,s as Fullwidth,o as Primary,n as Secondary,a as TertiaryWithIcon,oe as __namedExportsOrder,te as default};
