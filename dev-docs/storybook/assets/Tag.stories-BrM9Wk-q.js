import{j as a}from"./iframe-Bbq6OEL7.js";import{T as o,a as i,s as D}from"./Tag-C0q64Y70.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DHQrLW6j.js";import"./utils-D7qWQN9D.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dluzveo8.js";import"./useFocusRing-gQtDjcQ5.js";import"./index-B_cEvVqW.js";import"./index-hhUOaa-1.js";import"./useLabels-B1yiLdjt.js";import"./useButton-CSapev83.js";import"./Collection-XJYY2HCU.js";import"./index-TuVbiVR2.js";import"./ListBox-DidhkNDr.js";import"./DragAndDrop-B9LZ6Bl3.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DEdnTuor.js";import"./SelectionManager-BuLF63Kv.js";import"./useEvent-COAg9LHJ.js";import"./FocusScope-DlUY-YE-.js";import"./useDescription-qAxebIaa.js";import"./useControlledState-D8-wi2Pi.js";import"./ListKeyboardDelegate-D5rxe_B9.js";import"./Text-ChGUBPXW.js";import"./inertValue-CqK6t5-4.js";import"./useListState-DKaY1yxB.js";import"./useHighlightSelectionDescription-Bkf8v0io.js";import"./useUpdateEffect-CrjDTlUu.js";import"./useLocalizedStringFormatter-CEFD_zxB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DzLrnHyd.js";import"./useField-BUq8qGmT.js";import"./Button-EBDLzq-T.js";import"./Button.module-DgYkWG2o.js";import"./x-Cu-tACKX.js";import"./createLucideIcon-3A-Y9C_1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
