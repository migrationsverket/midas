import{j as a}from"./iframe-CaEkMUDz.js";import{c as l}from"./clsx-B-dksMZM.js";import{c as x}from"./createLucideIcon-DzkhmYjn.js";import{$ as N}from"./VisuallyHidden-DJbvfKzS.js";import{u as h}from"./useLocalizedStringFormatter-BEsxfgcm.js";import{B as O}from"./Button-BeBSHCem.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Da0SHqjH.js";import"./useFocusRing-CgJAwe9O.js";import"./index-aA2e8oZU.js";import"./index-C5b2PewP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./Button.module-CF2bVDCq.js";import"./Button-CS45EYvF.js";import"./Hidden-k4I1Jvb9.js";import"./useLabels-DRnbZ2Bl.js";import"./useButton-BnCjDBTO.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],C=x("loader-circle",B),k="_container_1m4iv_1",L="_spinner_1m4iv_5",j="_dark_1m4iv_15",n={container:k,spinner:L,dark:j},w={loadingPleaseWait:"Loading, please wait..."},P={loadingPleaseWait:"Laddar, vänligen vänta..."},W={en:w,sv:P},o=({small:e,isOnColor:i=!1,className:c})=>{const v=h(W);return a.jsxs("div",{className:l(n.container,c),role:"status",children:[a.jsx(C,{className:l(n.spinner,i&&n.dark),size:e?16:32,strokeWidth:e?2:3,absoluteStrokeWidth:!0}),a.jsx(N,{children:v.format("loadingPleaseWait")})]})};try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{small:{defaultValue:{value:"false"},description:"Displays a smaller spinner when set to true",name:"small",required:!1,type:{name:"boolean"}},isOnColor:{defaultValue:{value:"false"},description:"For use on coloured background",name:"isOnColor",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const{expect:b}=__STORYBOOK_MODULE_TEST__,J={component:o,title:"Components/Spinner",tags:["autodocs"],parameters:{layout:"centered"},args:{small:!1,isOnColor:!1,className:"test-class"}},s={play:async({canvas:e,step:i,args:c})=>{await i("it should accept custom classNames",async()=>{await b(e.getByRole("status")).toHaveClass(n.container,c.className)})}},r={args:{small:!0}},t={args:{small:!0,isOnColor:!0},render:e=>a.jsxs(O,{children:[a.jsx(o,{...e}),"Laddar"]})};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
