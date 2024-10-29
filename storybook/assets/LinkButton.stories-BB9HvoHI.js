import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{$}from"./Link-DlrH9a4q.js";import{c as H}from"./clsx-B-dksMZM.js";import{a as r}from"./Button-C_z7reC9.js";import{k as p}from"./useFocusable-oEo1n-jK.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hidden-CeomKQRv.js";import"./index-Drt3gf4w.js";const L='"../../../theme/src/lib/tokens.css"',N='"Inter", sans-serif',z="1rem",A="500",R="#143c50",F="#25607f",I="#4289ad",E="_link_bzhf3_4",W="_fullwidth_bzhf3_25",m={tokens:L,display:N,desktopSize:z,mediumWeight:A,blue150:R,blue130:F,blue90:I,link:E,fullwidth:W},i=({variant:e="primary",fullwidth:B,size:d,icon:l,iconSize:v,...c})=>{const P=d==="small"?14:v||16;return t.jsx($,{className:H(r.button,e==="primary"&&r.primary,e==="secondary"&&r.secondary,e==="tertiary"&&r.tertiary,e==="danger"&&r.danger,e==="icon"&&r.iconBtn,B&&m.fullwidth,d==="small"&&r.small,m.link,c.className),...c,children:t.jsxs(t.Fragment,{children:[l&&t.jsx(l,{size:P}),c.children]})})};try{i.displayName="LinkButton",i.__docgenInfo={description:"A link to be used when a user expects a button but web technologies force us to use a a-tag",displayName:"LinkButton",props:{}}}catch{}try{p.displayName="RouterProvider",p.__docgenInfo={description:"A RouterProvider accepts a `navigate` function from a framework or client side router,\nand provides it to all nested React Aria links to enable client side navigation.",displayName:"RouterProvider",props:{}}}catch{}const T={component:i,title:"Components/LinkButton",tags:["autodocs"]},o={args:{children:"Hej",href:"#"}},s={args:{children:"Hej",href:"#",variant:"secondary"}},n={args:{children:"Hej",fullwidth:!0,href:"#"}},a={args:{children:"Button",onPress:()=>alert("navigation fn")}};var u,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    href: '#'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    href: '#',
    variant: 'secondary'
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var b,k,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Hej',
    fullwidth: true,
    href: '#'
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,x,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    onPress: () => alert('navigation fn')
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const U=["Primary","Secondary","Fullwidth","AppLink"];export{a as AppLink,n as Fullwidth,o as Primary,s as Secondary,U as __namedExportsOrder,T as default};
