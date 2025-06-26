import{j as e}from"./jsx-runtime-BYYWji4R.js";import{c as S}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-DQK9Z80p.js";import{$ as h}from"./VisuallyHidden-jmj7sg3v.js";import{u as k}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{B as C}from"./Button-D2_AVwS4.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./useFocusRing-DFgaa26k.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-zNjZoWML.js";import"./Button.module-AG3JZ-l4.js";import"./Button-CEgTOQBH.js";import"./Hidden-BC9qER92.js";import"./useButton-D8WL2Jhl.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=x("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),j="_container_3nw95_4",v="_spinner_3nw95_8",B="_dark_3nw95_18",n={container:j,spinner:v,dark:B},O={loadingPleaseWait:"Loading, please wait..."},w={loadingPleaseWait:"Laddar, vänligen vänta..."},P={en:O,sv:w},t=({small:r,isOnColor:_=!1})=>{const y=k(P);return e.jsxs("div",{className:n.container,role:"status",children:[e.jsx(L,{className:S(n.spinner,_&&n.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx(h,{children:y.format("loadingPleaseWait")})]})};try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}}}}}catch{}const T={component:t,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1}},a={args:{}},s={args:{small:!0}},o={args:{small:!0,isOnColor:!0},render:r=>e.jsxs(C,{children:[e.jsx(t,{...r}),"Laddar"]})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const U=["Primary","Small","InButton"];export{o as InButton,a as Primary,s as Small,U as __namedExportsOrder,T as default};
