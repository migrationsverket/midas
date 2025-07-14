import{j as a}from"./jsx-runtime-BYYWji4R.js";import{c as l}from"./clsx-B-dksMZM.js";import{c as S}from"./createLucideIcon-uZw3gxGR.js";import{$ as v}from"./VisuallyHidden-Bwo2Sxwr.js";import{u as h}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{e as w}from"./index-CqmFxPum.js";import{B as C}from"./Button-CyYX7D6N.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-zNjZoWML.js";import"./Button.module-DKVuWS4g.js";import"./Button-Dw7lljiq.js";import"./Hidden-BC9qER92.js";import"./useButton-DFlERivp.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],B=S("loader-circle",k),j="_container_3nw95_4",L="_spinner_3nw95_8",O="_dark_3nw95_18",n={container:j,spinner:L,dark:O},P={loadingPleaseWait:"Loading, please wait..."},W={loadingPleaseWait:"Laddar, vänligen vänta..."},b={en:P,sv:W},o=({small:e,isOnColor:i=!1,className:c})=>{const N=h(b);return a.jsxs("div",{className:l(n.container,c),role:"status",children:[a.jsx(B,{className:l(n.spinner,i&&n.dark),size:e?16:32,strokeWidth:e?2:3,absoluteStrokeWidth:!0}),a.jsx(v,{children:N.format("loadingPleaseWait")})]})};try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Z={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:e,step:i,args:c})=>{await i("it should accept custom classNames",async()=>{await w(e.getByRole("status")).toHaveClass(n.container,c.className)})}},r={args:{small:!0}},t={args:{small:!0,isOnColor:!0},render:e=>a.jsxs(C,{children:[a.jsx(o,{...e}),"Laddar"]})};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const ee=["Primary","Small","InButton"];export{t as InButton,s as Primary,r as Small,ee as __namedExportsOrder,Z as default};
