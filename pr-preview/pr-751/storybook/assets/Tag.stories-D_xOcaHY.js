import{j as a}from"./iframe-4kbjWhdY.js";import{T as o,a as i,s as _}from"./Tag-BB9WEKmC.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BCE0vaA_.js";import"./utils-DEjkxMCY.js";import"./clsx-B-dksMZM.js";import"./Hidden-CdE63u58.js";import"./useFocusRing-DNLoxoKj.js";import"./index-BO_u2b3Q.js";import"./index-m7eO5rAx.js";import"./useLabels-CUCoNvtn.js";import"./useButton-3HKmGh7y.js";import"./Collection-DthmVklz.js";import"./index-BCVchfYO.js";import"./ListBox-BUbLEjoj.js";import"./DragAndDrop-Be-6rfgQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CYJv4MM6.js";import"./SelectionManager-CuBcwmf1.js";import"./useEvent-CTac32wQ.js";import"./FocusScope-QL5ehmCL.js";import"./useDescription-DA7GmP2S.js";import"./useControlledState-Cv5IFUWm.js";import"./ListKeyboardDelegate-BTOc5ngV.js";import"./Text-uHHGtTze.js";import"./inertValue-SkVlqi9-.js";import"./useListState-lBzizMUM.js";import"./useField-7j9CF2gX.js";import"./useHighlightSelectionDescription-BgeGqFsk.js";import"./useUpdateEffect-BZAAHnK0.js";import"./useLocalizedStringFormatter-CXyAmtv9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CZOZgw4d.js";import"./Button-pSdafJ0d.js";import"./Button.module-DKVuWS4g.js";import"./x-7wAAahvq.js";import"./createLucideIcon-Cv9r8c7H.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
