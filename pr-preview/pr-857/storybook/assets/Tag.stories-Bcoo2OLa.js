import{j as a}from"./iframe-D5H2gdWI.js";import{T as o,a as i,s as D}from"./Tag-COrxX__u.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CIW8w760.js";import"./utils-DOCP67o0.js";import"./clsx-B-dksMZM.js";import"./Hidden-DW2PIwc9.js";import"./useFocusRing-BOnoBs0F.js";import"./index-DK6A_GED.js";import"./index-DmsbfyR5.js";import"./useLabels-DQgWOaqz.js";import"./useButton-CI88r2ti.js";import"./Collection-P5-N7BUo.js";import"./index-CCwxL8di.js";import"./ListBox--uPGlRbO.js";import"./DragAndDrop-BqFi2U6Y.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C3GG6T3l.js";import"./SelectionManager-CbvoZvAv.js";import"./useEvent-qMRSFumg.js";import"./FocusScope-Bf_tAOLh.js";import"./useDescription-CCm3D8D_.js";import"./useControlledState-BL1nfF_v.js";import"./context-BjddJsJE.js";import"./Text-Dk9fLEsT.js";import"./inertValue-WXoAf2Xa.js";import"./useListState-DqxjIUOp.js";import"./useHighlightSelectionDescription-BSxDLDpC.js";import"./useUpdateEffect-EmOw5E-V.js";import"./useLocalizedStringFormatter-BgJlSjd8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CECLn_Bg.js";import"./useField-DW1UH0gb.js";import"./clsx-Ciqy0D92.js";import"./Button-DJx25tuQ.js";import"./Button.module-DRhvPh0f.js";import"./x-BZc7-_x_.js";import"./createLucideIcon-CAeggyAp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
