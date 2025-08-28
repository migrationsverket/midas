import{j as a}from"./jsx-runtime-BYYWji4R.js";import{c as l}from"./clsx-B-dksMZM.js";import{c as N}from"./createLucideIcon-uZw3gxGR.js";import{$ as S}from"./VisuallyHidden-BekSNXsj.js";import{u as h}from"./useLocalizedStringFormatter-9M_dEwOo.js";import{e as C}from"./index-Q7OVwvWC.js";import{B as k}from"./Button-iGJv1fur.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-zNjZoWML.js";import"./Button.module-CF2bVDCq.js";import"./Button-v_l_ujRb.js";import"./Hidden-BC9qER92.js";import"./useLabels-FEgier_d.js";import"./useButton-DQcVpLGQ.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],j=N("loader-circle",B),L="_container_1m4iv_1",w="_spinner_1m4iv_5",O="_dark_1m4iv_15",o={container:L,spinner:w,dark:O},P={loadingPleaseWait:"Loading, please wait..."},W={loadingPleaseWait:"Laddar, vänligen vänta..."},b={en:P,sv:W},n=({small:e,isOnColor:i=!1,className:c})=>{const x=h(b);return a.jsxs("div",{className:l(o.container,c),role:"status",children:[a.jsx(j,{className:l(o.spinner,i&&o.dark),size:e?16:32,strokeWidth:e?2:3,absoluteStrokeWidth:!0}),a.jsx(S,{children:x.format("loadingPleaseWait")})]})};try{n.displayName="Spinner",n.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee={component:n,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:e,step:i,args:c})=>{await i("it should accept custom classNames",async()=>{await C(e.getByRole("status")).toHaveClass(o.container,c.className)})}},r={args:{small:!0}},t={args:{small:!0,isOnColor:!0},render:e=>a.jsxs(k,{children:[a.jsx(n,{...e}),"Laddar"]})};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,_,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const ae=["Primary","Small","InButton"];export{t as InButton,s as Primary,r as Small,ae as __namedExportsOrder,ee as default};
