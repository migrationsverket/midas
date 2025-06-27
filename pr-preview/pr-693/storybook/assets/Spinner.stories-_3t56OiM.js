import{j as s}from"./jsx-runtime-BYYWji4R.js";import{c as l}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-DQK9Z80p.js";import{e as N}from"./index-CqmFxPum.js";import{B as S}from"./Button-CXM00Bsn.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button.module-AG3JZ-l4.js";import"./Button-C9yg6fHw.js";import"./utils-BLyg3OOq.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-DVgdqMmF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./context-d6PNTTSe.js";import"./useButton-DVh6qrnV.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=x("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),C="_container_32v8g_4",k="_spinner_32v8g_8",B="_dark_32v8g_18",j="_vsHidden_32v8g_22",a={container:C,spinner:k,dark:B,vsHidden:j},o=({small:e,isOnColor:c=!1,className:i})=>s.jsxs("div",{className:l(a.container,i),role:"status",children:[s.jsx(h,{className:l(a.spinner,c&&a.dark),size:e?16:32,strokeWidth:e?2:3,absoluteStrokeWidth:!0}),s.jsx("span",{className:a.vsHidden,children:"Laddar, vänligen vänta."})]});try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},r={play:async({canvas:e,step:c,args:i})=>{await c("it should accept custom classNames",async()=>{await N(e.getByRole("status")).toHaveClass(a.container,i.className)})}},t={args:{small:!0}},n={args:{small:!0,isOnColor:!0},render:e=>s.jsxs(S,{children:[s.jsx(o,{...e}),"Laddar"]})};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,f,v;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const G=["Primary","Small","InButton"];export{n as InButton,r as Primary,t as Small,G as __namedExportsOrder,A as default};
