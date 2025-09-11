import{j as a}from"./iframe-DodFFUPz.js";import{T as o,a as i,s as D}from"./Tag-DFMWc6Ph.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DlgpH9zy.js";import"./utils-B0ktdMfN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BMaOK31V.js";import"./useFocusRing-xjhFmxw0.js";import"./index-qd6lekP5.js";import"./index-BdOUKbCM.js";import"./useLabels-C957H083.js";import"./useButton-DNUx9KoH.js";import"./Collection-DVyPhVvc.js";import"./index-BbvkHo5C.js";import"./ListBox-DUEi7gll.js";import"./DragAndDrop-BW4_X2RN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DTKMcsj4.js";import"./SelectionManager-CjQXhSGJ.js";import"./useEvent-Df2naM8K.js";import"./FocusScope-eY7MJ6OK.js";import"./useDescription-DPzpj0jq.js";import"./useControlledState-DZBAJmat.js";import"./ListKeyboardDelegate-C3mHkZCx.js";import"./Text-CMG3G2yF.js";import"./inertValue-DlGEYrW7.js";import"./useListState-D7xuXn63.js";import"./useHighlightSelectionDescription-CTph-G9S.js";import"./useUpdateEffect-BY37yw-K.js";import"./useLocalizedStringFormatter-Dis84LT3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CnHGM-1y.js";import"./useField-Dr65GWyi.js";import"./Button-BqHUSULr.js";import"./Button.module-DRhvPh0f.js";import"./x-CG-_Q5di.js";import"./createLucideIcon-DFykA5GW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
