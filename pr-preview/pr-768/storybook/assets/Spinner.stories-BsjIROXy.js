import{j as a}from"./iframe-DGsNrSXT.js";import{c as l}from"./clsx-B-dksMZM.js";import{c as N}from"./createLucideIcon-BSjeWOth.js";import{$ as h}from"./VisuallyHidden-D5bdiVmD.js";import{u as v}from"./useLocalizedStringFormatter-D1MTD9us.js";import{B as O}from"./Button-BNhCK5b0.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CeRCI_IU.js";import"./useFocusRing-CmKVXNS9.js";import"./index-DA2UlEzH.js";import"./index-BZLvSFXL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-DKVuWS4g.js";import"./Button-DFpXN0mf.js";import"./Hidden-DzIzvD-S.js";import"./useLabels-xiTNAS69.js";import"./useButton-BEBz-IAp.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],B=N("loader-circle",w),C="_container_3nw95_4",k="_spinner_3nw95_8",L="_dark_3nw95_18",n={container:C,spinner:k,dark:L},j={loadingPleaseWait:"Loading, please wait..."},P={loadingPleaseWait:"Laddar, vänligen vänta..."},W={en:j,sv:P},o=({small:e,isOnColor:c=!1,className:i})=>{const x=v(W);return a.jsxs("div",{className:l(n.container,i),role:"status",children:[a.jsx(B,{className:l(n.spinner,c&&n.dark),size:e?16:32,strokeWidth:e?2:3,absoluteStrokeWidth:!0}),a.jsx(h,{children:x.format("loadingPleaseWait")})]})};try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{expect:b}=__STORYBOOK_MODULE_TEST__,J={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:e,step:c,args:i})=>{await c("it should accept custom classNames",async()=>{await b(e.getByRole("status")).toHaveClass(n.container,i.className)})}},r={args:{small:!0}},t={args:{small:!0,isOnColor:!0},render:e=>a.jsxs(O,{children:[a.jsx(o,{...e}),"Laddar"]})};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(styles.container, args.className as string);
    });
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    small: true
  }
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var y,f,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    small: true,
    isOnColor: true
  },
  render: args => <Button>
      <Spinner {...args} />
      Laddar
    </Button>
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const Q=["Primary","Small","InButton"];export{t as InButton,s as Primary,r as Small,Q as __namedExportsOrder,J as default};
