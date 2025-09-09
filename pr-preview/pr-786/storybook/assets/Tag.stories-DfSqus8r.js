import{j as a}from"./iframe-CMrdGcpV.js";import{T as o,a as i,s as D}from"./Tag-5rAi3aTB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DTA015GD.js";import"./utils-DnExCjfw.js";import"./clsx-B-dksMZM.js";import"./Hidden-B50sXY4T.js";import"./useFocusRing-DiCZjOhQ.js";import"./index-BCyO9uYu.js";import"./index-jsZTaXrx.js";import"./useLabels-D2KDV_ZR.js";import"./useButton-IJbAZOCe.js";import"./Collection-Oh2eTBOn.js";import"./index-DxcNOOW2.js";import"./ListBox-CpE-EnCv.js";import"./DragAndDrop-DOMqb8r5.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DvKK5Jvg.js";import"./SelectionManager-qiqireWI.js";import"./useEvent-Dzb_Je_p.js";import"./FocusScope-CKS4xpiN.js";import"./useDescription-Dpf2PkGG.js";import"./useControlledState-K8TgW5Uq.js";import"./ListKeyboardDelegate-DUITzGXb.js";import"./Text-Dpd2WXB7.js";import"./inertValue-2SkFZHjg.js";import"./useListState-3Km1JsVe.js";import"./useHighlightSelectionDescription-BMet6Fyt.js";import"./useUpdateEffect-uvrOFbfH.js";import"./useLocalizedStringFormatter-CAd2T90X.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-omxDo9Dk.js";import"./useField-D36GmWtQ.js";import"./Button-BFwd0WEW.js";import"./Button.module-BkTnSRp5.js";import"./x-QuYFyK5A.js";import"./createLucideIcon-B-7ATGuZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
