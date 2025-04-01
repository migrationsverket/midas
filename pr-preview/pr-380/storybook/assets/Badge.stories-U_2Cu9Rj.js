import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as B}from"./index-BbAIUH2N.js";import{c as x}from"./clsx-B-dksMZM.js";import{e as L}from"./index-DtSMq7G1.js";import{B as N}from"./Button-C8dtrVzB.js";import{c as j}from"./createLucideIcon-8wDOqnHv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-C6oo4-9j.js";import"./utils-fGMpyvF6.js";import"./ProgressBar--YvcVoO5.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./useFocusRing-CklmaPa3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=j("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),I='"../theme/tokens.css"',v="_badge_1bxos_4",R="_hasChildren_1bxos_13",S="_badgeContainer_1bxos_22",c={tokens:I,"--font-family":'"Inter", sans-serif',"--signal-red-140":"#e62323","--text-on-color":"light-dark(#ffffff, #ffffff)",badge:v,hasChildren:R,badgeContainer:S},n=({children:e,className:a,...d})=>{const C=B.Children.count(e)>0;return r.jsx("span",{className:x(c.badge,C&&c.hasChildren,a),...d,children:e})};try{n.displayName="Badge",n.__docgenInfo={description:"",displayName:"Badge",props:{}}}catch{}const i=({children:e,className:a,...d})=>r.jsx("span",{className:x(c.badgeContainer,a),...d,children:e});try{i.displayName="BadgeContainer",i.__docgenInfo={description:"",displayName:"BadgeContainer",props:{}}}catch{}const Z={component:n,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},p=({...e})=>r.jsx(N,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(i,{children:[r.jsx(k,{}),r.jsx(n,{...e,"data-testid":"badge"})]})}),t={args:{},render:p,play:async({canvas:e})=>{const a=await e.findByTestId("badge");await L(a).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},o={args:{children:"1"},render:p},s={args:{children:"123"},render:p};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var h,y,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '123'
  },
  render: Render
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const $=["NoLabel","WithLabel","LongLabel"];export{s as LongLabel,t as NoLabel,o as WithLabel,$ as __namedExportsOrder,Z as default};
