import{j as a}from"./iframe-Ch0JmQFQ.js";import{T as o,a as i,s as D}from"./Tag-CSiKMcOH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C8N-BbIQ.js";import"./utils-C9c7zziM.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cv_nccDR.js";import"./useFocusRing-DZ-uN-Ys.js";import"./index-Biv78JFP.js";import"./index-CbLu1h8t.js";import"./useLabels-C09IjMus.js";import"./useButton-C4k1wcTP.js";import"./Collection-CBjJ6Km_.js";import"./index-CItJXKvK.js";import"./ListBox-iXC516Iz.js";import"./DragAndDrop-CZEMXez3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DHYhJdgd.js";import"./SelectionManager-LX5fDf_J.js";import"./useEvent-DHAn57sL.js";import"./FocusScope-B5pDEU26.js";import"./useDescription-DZg1xLfE.js";import"./useControlledState-DPLzjG8r.js";import"./context-BU5pPVKk.js";import"./Text-m8PvCTxc.js";import"./inertValue-CGKC_dTJ.js";import"./useListState-Czo6rtY0.js";import"./useHighlightSelectionDescription-CuJIlKt-.js";import"./useUpdateEffect-BnhWaLBj.js";import"./useLocalizedStringFormatter-BEaL85Hf.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bf1LN3P5.js";import"./useField-C3BN75eK.js";import"./clsx-Ciqy0D92.js";import"./Button-KeuW9ZrK.js";import"./Button.module-CcWMkJAG.js";import"./x-DWJBgQtU.js";import"./createLucideIcon-BuboWg66.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
