import{j as a}from"./iframe-DUlxGgkl.js";import{T as o,a as i,s as D}from"./Tag-CoyDRijP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-teJ0KhMe.js";import"./utils-CfM6WS1O.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHnIyV2Z.js";import"./useFocusRing-BUDjqzJF.js";import"./index-DuMS_O4q.js";import"./index-CpeaO1LB.js";import"./useLabels-BbQofoFC.js";import"./useButton-Bj6iQuy-.js";import"./Collection-DQPkfPCj.js";import"./index-BW58RzIG.js";import"./ListBox-Dte4j0dU.js";import"./DragAndDrop-DK89-85T.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DGG8v3ij.js";import"./SelectionManager-49Z_8nCc.js";import"./useEvent-kCAWRxSf.js";import"./FocusScope-BjmtK8A0.js";import"./useDescription-BPnH7aUU.js";import"./useControlledState-Df8EROTA.js";import"./ListKeyboardDelegate-Y4DKVu1I.js";import"./Text-BmOs51HA.js";import"./inertValue-QjQ0goyj.js";import"./useListState-05olfqoH.js";import"./useHighlightSelectionDescription-CQTjs-ao.js";import"./useUpdateEffect-Dw5lwWJm.js";import"./useLocalizedStringFormatter-BYlh22-K.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Bizn9RLi.js";import"./useField-CJg7MIQp.js";import"./Button-Dh20d4ot.js";import"./Button.module-DRhvPh0f.js";import"./x-CtrQWGDm.js";import"./createLucideIcon-Cd4Rxjzp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
