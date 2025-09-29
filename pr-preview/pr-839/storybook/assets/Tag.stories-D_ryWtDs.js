import{j as a}from"./iframe-DYYkgjq3.js";import{T as o,a as i,s as D}from"./Tag-BbDYg98E.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DsecO-I9.js";import"./utils-ERwG-bhk.js";import"./clsx-B-dksMZM.js";import"./Hidden-ByvNcj-0.js";import"./useFocusRing-CXVxWb2Z.js";import"./index-BkP957MK.js";import"./index-BbAiRtLM.js";import"./useLabels-DULtx5DE.js";import"./useButton-DNO1CV8o.js";import"./Collection-Dkj-nU4a.js";import"./index-CbvmUOKO.js";import"./ListBox-CHt7CRXq.js";import"./DragAndDrop-B0-uVXUx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BpWIxdRK.js";import"./SelectionManager-Be8vPHf3.js";import"./useEvent-Bt5QbyWP.js";import"./FocusScope-BW11bWqO.js";import"./useDescription-DY-jCWVX.js";import"./useControlledState-C89L-LjP.js";import"./context-DgOrUSS4.js";import"./Text-B8EPLClD.js";import"./inertValue-C0cYgNZp.js";import"./useListState-BIrghBEY.js";import"./useHighlightSelectionDescription-DaQSCfeY.js";import"./useUpdateEffect-CmCWshut.js";import"./useLocalizedStringFormatter-sOe4V_qC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DLSeAgMx.js";import"./useField-CQI7xQQo.js";import"./Button--RMgjs_h.js";import"./Button.module-DRhvPh0f.js";import"./x-Wk_fGpUN.js";import"./createLucideIcon-DbHBjVu1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
