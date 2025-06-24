import{j as e}from"./jsx-runtime-BYYWji4R.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as y}from"./createLucideIcon-DQK9Z80p.js";import{B as S}from"./Button-BjVYXvP1.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-AG3JZ-l4.js";import"./Button-BD6hc4wl.js";import"./utils-oc6myKvD.js";import"./ProgressBar-CQGqtZ9B.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./useFocusRing-DUrskli4.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=y("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),h="_container_32v8g_4",k="_spinner_32v8g_8",C="_dark_32v8g_18",j="_vsHidden_32v8g_22",s={container:h,spinner:k,dark:C,vsHidden:j},n=({small:r,isOnColor:f=!1})=>e.jsxs("div",{className:s.container,role:"status",children:[e.jsx(x,{className:v(s.spinner,f&&s.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:s.vsHidden,children:"Laddar, vänligen vänta."})]});try{n.displayName="Spinner",n.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}}}}}catch{}const T={component:n,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1}},a={args:{}},o={args:{small:!0}},t={args:{small:!0,isOnColor:!0},render:r=>e.jsxs(S,{children:[e.jsx(n,{...r}),"Laddar"]})};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,_,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const U=["Primary","Small","InButton"];export{t as InButton,a as Primary,o as Small,U as __namedExportsOrder,T as default};
