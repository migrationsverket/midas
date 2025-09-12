import{j as a}from"./iframe-CuA_HfLz.js";import{T as o,a as i,s as D}from"./Tag-A4CXqsph.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BNmtowNF.js";import"./utils-CGeSy2Rh.js";import"./clsx-B-dksMZM.js";import"./Hidden-iHRd-MbM.js";import"./useFocusRing-tguvtbyd.js";import"./index-1mAOh-2J.js";import"./index-CDpKywge.js";import"./useLabels-D2fxeWGH.js";import"./useButton-C07Rl6Ah.js";import"./Collection-D_gJpwov.js";import"./index-gY4x1fyU.js";import"./ListBox-B0NqATDh.js";import"./DragAndDrop-CSuHtKNT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-s3EaLyuY.js";import"./SelectionManager-Duu5y2qQ.js";import"./useEvent-DJJABKQy.js";import"./FocusScope-WEro-k5C.js";import"./useDescription-CN_sHlcn.js";import"./useControlledState-BqpHJnSU.js";import"./ListKeyboardDelegate-Df-LXrGc.js";import"./Text-BvPU-aQH.js";import"./inertValue-8R1DspZr.js";import"./useListState-DXgfY3hm.js";import"./useHighlightSelectionDescription-BdBDMLNT.js";import"./useUpdateEffect-JWcW9fG9.js";import"./useLocalizedStringFormatter-CUWbTmkw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BBWwFnfb.js";import"./useField-hvsWQr6h.js";import"./Button-BYMKg1bB.js";import"./Button.module-DRhvPh0f.js";import"./x-CiYU9bso.js";import"./createLucideIcon-DNS3Wdg_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
