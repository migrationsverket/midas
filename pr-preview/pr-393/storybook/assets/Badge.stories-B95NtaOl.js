import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{r as B}from"./index-BbAIUH2N.js";import{c as C}from"./clsx-B-dksMZM.js";import{e as j}from"./index-DtSMq7G1.js";import{B as L}from"./Button-B7iFvHN6.js";import{c as N}from"./createLucideIcon-8wDOqnHv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BAmjpgnq.js";import"./utils-Cd6MiihZ.js";import"./ProgressBar-Dh0Vg3qS.js";import"./Label-Bf-bZThx.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./useFocusable-5VAxOUE-.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=N("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),I='"../theme/tokens.css"',v="_badge_1rzmj_4",R="_hasChildren_1rzmj_18",S="_badgeContainer_1rzmj_27",c={tokens:I,"--font-family":'"Inter", sans-serif',"--signal-red-140":"#e62323","--text-on-color":"light-dark(#ffffff, #ffffff)",badge:v,hasChildren:R,badgeContainer:S},s=({children:e,className:a,...d})=>{const x=B.Children.count(e)>0;return r.jsx("span",{className:C(c.badge,x&&c.hasChildren,a),...d,children:e})};try{s.displayName="Badge",s.__docgenInfo={description:"",displayName:"Badge",props:{}}}catch{}const i=({children:e,className:a,...d})=>r.jsx("span",{className:C(c.badgeContainer,a),...d,children:e});try{i.displayName="BadgeContainer",i.__docgenInfo={description:"",displayName:"BadgeContainer",props:{}}}catch{}const Y={component:s,title:"Components/Badge",tags:["autodocs"],parameters:{layout:"centered"},args:{}},p=({...e})=>r.jsx(L,{variant:"tertiary","aria-label":"Notiser",children:r.jsxs(i,{children:[r.jsx(k,{}),r.jsx(s,{...e,"data-testid":"badge"})]})}),t={args:{},render:p,play:async({canvas:e})=>{const a=await e.findByTestId("badge");await j(a).toHaveStyle({backgroundColor:"rgb(230, 35, 35)"})}},o={args:{children:"1"},render:p},n={args:{children:"123"},render:p};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var _,f,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '1'
  },
  render: Render
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '123'
  },
  render: Render
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const Z=["NoLabel","WithLabel","LongLabel"];export{n as LongLabel,t as NoLabel,o as WithLabel,Z as __namedExportsOrder,Y as default};
