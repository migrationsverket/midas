import{j as a}from"./iframe-BdZIs7Nq.js";import{T as o,a as i,s as D}from"./Tag-BODMC1wX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DZ1TXkhS.js";import"./utils-9VM7gbof.js";import"./clsx-B-dksMZM.js";import"./Hidden-CCsMENpc.js";import"./useFocusRing-58f0kNXi.js";import"./index-Dx2NAYb_.js";import"./index-CC8Z7BUM.js";import"./useLabels-C37pHCj4.js";import"./useButton-wvX2NSPw.js";import"./Collection-BPH56TpB.js";import"./index-CAqydA6Q.js";import"./ListBox-TruDQssi.js";import"./DragAndDrop-DWebWdrg.js";import"./getScrollParent-B81GzG2u.js";import"./scrollIntoView-B2YRZ0ka.js";import"./Separator-CxgV3VRV.js";import"./SelectionManager-CVq7QkyU.js";import"./useEvent-BLg8pK1v.js";import"./SelectionIndicator-C-wCbqPn.js";import"./useDescription-B5TdgaAT.js";import"./useControlledState-B1Csoh4W.js";import"./ListKeyboardDelegate-iMF-pjGg.js";import"./RSPContexts-COiY_WDf.js";import"./Text-gVEPdTqt.js";import"./inertValue-Dny35HSI.js";import"./useListState-BU5PIiuT.js";import"./useHighlightSelectionDescription-Tcica_Xh.js";import"./useUpdateEffect-B3BxTJSV.js";import"./useLocalizedStringFormatter-DjqDSjxr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CxTn42Z7.js";import"./useField-9VKnv8gt.js";import"./clsx-Ciqy0D92.js";import"./Button-Cld53E4_.js";import"./Button.module-CcWMkJAG.js";import"./x-CpgR8AzC.js";import"./createLucideIcon-B3MQJBqz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
