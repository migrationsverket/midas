import{j as e}from"./jsx-runtime-BYYWji4R.js";import{c as v}from"./clsx-B-dksMZM.js";import{c as y}from"./createLucideIcon-DQK9Z80p.js";import{B as S}from"./Button-P9ZqjxQM.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-AG3JZ-l4.js";import"./Button-D5YfTa-t.js";import"./utils-BLyg3OOq.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-rs5PgjfN.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=y("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),h="_container_32v8g_4",k="_spinner_32v8g_8",C="_dark_32v8g_18",j="_vsHidden_32v8g_22",s={container:h,spinner:k,dark:C,vsHidden:j},t=({small:r,isOnColor:f=!1})=>e.jsxs("div",{className:s.container,role:"status",children:[e.jsx(x,{className:v(s.spinner,f&&s.dark),size:r?16:32,strokeWidth:r?2:3,absoluteStrokeWidth:!0}),e.jsx("span",{className:s.vsHidden,children:"Laddar, vänligen vänta."})]});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}}}}}catch{}const F={component:t,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1}},a={args:{}},n={args:{small:!0}},o={args:{small:!0,isOnColor:!0},render:r=>e.jsxs(S,{children:[e.jsx(t,{...r}),"Laddar"]})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,_,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const M=["Primary","Small","InButton"];export{o as InButton,a as Primary,n as Small,M as __namedExportsOrder,F as default};
