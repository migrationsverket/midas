import{j as a}from"./iframe-Ch7FknzR.js";import{T as o,a as i,s as D}from"./Tag-DlpiSVTS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D5odQzto.js";import"./utils-DM0R21dB.js";import"./clsx-B-dksMZM.js";import"./Hidden-XRwnd7Zu.js";import"./useFocusRing-anxBJeJ0.js";import"./index-DRM5vA1Q.js";import"./index-BsRWB-yo.js";import"./useLabels-B97PPfXt.js";import"./useButton-eQYohx6F.js";import"./Collection-GtkOQX93.js";import"./index-CK0WUy1_.js";import"./ListBox-BbggaYuJ.js";import"./DragAndDrop-CJNXsuqv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C0XEt-fF.js";import"./SelectionManager-XgEF97Rq.js";import"./useEvent-Byq4Glce.js";import"./FocusScope-B6PdwGPA.js";import"./useDescription-Ndu22-uA.js";import"./useControlledState-ZT7_75f-.js";import"./ListKeyboardDelegate-UvMTK2BA.js";import"./Text-BhgVr0BQ.js";import"./inertValue-dvhMJ45K.js";import"./useListState-yn7pKxvr.js";import"./useHighlightSelectionDescription-Ce842bQO.js";import"./useUpdateEffect-DWDFWOI_.js";import"./useLocalizedStringFormatter-DoeQKr5m.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DYlDbZZp.js";import"./useField-wcr6iWpT.js";import"./Button-CZkOz81y.js";import"./Button.module-BkTnSRp5.js";import"./x-45dK5OLL.js";import"./createLucideIcon-wJpKcBaO.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
