import{j as a}from"./iframe-FvAOTTHD.js";import{T as o,a as i,s as D}from"./Tag-CtEBIR2P.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CMpG05H-.js";import"./utils-B58NrUMl.js";import"./clsx-B-dksMZM.js";import"./Hidden-BVjww_ie.js";import"./useFocusRing-hotFAerX.js";import"./index-gauWVXKn.js";import"./index-CeRpVf4G.js";import"./useLabels-E2PF7qOc.js";import"./useButton-BM7XiuNQ.js";import"./Collection-B8YxUbfc.js";import"./index-BFNXf6d_.js";import"./ListBox-BUihuynq.js";import"./DragAndDrop-ay1Y-t06.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Df9GpfLP.js";import"./SelectionManager-hZgAMiNy.js";import"./useEvent-Wwxq6gdI.js";import"./FocusScope-CvzK8lRJ.js";import"./useDescription-lW6CWylo.js";import"./useControlledState-CE7Ah11s.js";import"./ListKeyboardDelegate-DvD2NOwr.js";import"./Text-aBdNN9yS.js";import"./inertValue-BKJFDmBR.js";import"./useListState-CACId7yg.js";import"./useHighlightSelectionDescription-d6M6VmyO.js";import"./useUpdateEffect-CBpSttm7.js";import"./useLocalizedStringFormatter-CYm7Y1FX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DO2zdEjM.js";import"./useField-OdaFYfb7.js";import"./Button-CPWgYa19.js";import"./Button.module-DRhvPh0f.js";import"./x-DpS2lygu.js";import"./createLucideIcon-BDx-H3zl.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
