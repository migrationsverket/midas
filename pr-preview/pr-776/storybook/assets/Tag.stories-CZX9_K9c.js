import{j as a}from"./iframe-Bz1AALJH.js";import{T as o,a as i,s as D}from"./Tag-wdueHPBE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DoZdyROw.js";import"./utils-Dj5t-nbC.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwA-xBTQ.js";import"./useFocusRing-BXoYjw2R.js";import"./index-C3LwyAjV.js";import"./index-7S2drmrD.js";import"./useLabels-jTcOTHm4.js";import"./useButton-BPzcYraN.js";import"./Collection-CLP_EnkK.js";import"./index-C-mTMFl9.js";import"./ListBox-B7M4iS6z.js";import"./DragAndDrop-BGQQrtat.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C-G_DkBV.js";import"./SelectionManager-RumHmCa_.js";import"./useEvent-DLKtNRWs.js";import"./FocusScope-C2rjxUq_.js";import"./useDescription-CrsPTJ_8.js";import"./useControlledState-Duw0Plbf.js";import"./ListKeyboardDelegate-cktBDvXM.js";import"./Text-BFEldzGt.js";import"./inertValue-CxbOOfTa.js";import"./useListState-D9R6HEhq.js";import"./useHighlightSelectionDescription-DaqgaUB5.js";import"./useUpdateEffect-BhG2OgJr.js";import"./useLocalizedStringFormatter-Kwqu7qiQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CK3fE0an.js";import"./useField-CJW-hnQC.js";import"./Button-C2psp4YE.js";import"./Button.module-9Myim2MN.js";import"./x-zoKsuzPI.js";import"./createLucideIcon-B_o5qdIv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
