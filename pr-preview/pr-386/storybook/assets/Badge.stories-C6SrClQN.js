import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as B}from"./index-BbAIUH2N.js";import{c as x}from"./clsx-B-dksMZM.js";import{e as N}from"./index-DtSMq7G1.js";import{B as j}from"./Button-BFFrTHdV.js";import{B as L}from"./bell-CiVOWHFZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./createLucideIcon-8wDOqnHv.js";const k='"../theme/tokens.css"',v="_badge_1bxos_4",I="_hasChildren_1bxos_13",R="_badgeContainer_1bxos_22",i={tokens:k,"--font-family":'"Inter", sans-serif',"--signal-red-140":"#e62323","--text-on-color":"light-dark(#ffffff, #ffffff)",badge:v,hasChildren:I,badgeContainer:R},s=({children:e,className:a,...d})=>{const C=B.Children.count(e)>0;return r.jsx("span",{className:x(i.badge,C&&i.hasChildren,a),...d,children:e})};try{s.displayName="Badge",s.__docgenInfo={description:"",displayName:"Badge",props:{}}}catch{}const c=({children:e,className:a,...d})=>r.jsx("span",{className:x(i.badgeContainer,a),...d,children:e});try{c.displayName="BadgeContainer",c.__docgenInfo={description:"",displayName:"BadgeContainer",props:{}}}catch{}const Z={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},p=({...e})=>r.jsx(j,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(c,{children:[r.jsx(L,{}),r.jsx(s,{...e,"data-testid":"badge"})]})}),t={args:{},render:p,play:async({canvas:e})=>{const a=await e.findByTestId("badge");await N(a).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},o={args:{children:"1"},render:p},n={args:{children:"123"},render:p};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: Render,
  play: async ({
    canvas
  }) => {
    const badge = await canvas.findByTestId('badge');
    await expect(badge).toHaveStyle({
      backgroundColor: 'rgb(230, 35, 35)'
    });
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,_,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '1'
  },
  render: Render
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var h,u,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '123'
  },
  render: Render
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const $=["NoLabel","WithLabel","LongLabel"];export{n as LongLabel,t as NoLabel,o as WithLabel,$ as __namedExportsOrder,Z as default};
