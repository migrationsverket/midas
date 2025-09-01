import{j as a}from"./iframe-BTwnqCvn.js";import{T as o,a as i,s as D}from"./Tag-DbiCr3w_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CShAPAgZ.js";import"./utils-QNeeTrhZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-DZtEaIh2.js";import"./useFocusRing-DCeeqQ4B.js";import"./index-BfO3BEOu.js";import"./index-BT0TVhw7.js";import"./useLabels-CipQzpez.js";import"./useButton-JytO0VUL.js";import"./Collection-vULTflIB.js";import"./index-ca2XTDNy.js";import"./ListBox-CAmCU0cF.js";import"./DragAndDrop-ChoekWiU.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C31kiWTx.js";import"./SelectionManager-BLdJSbqT.js";import"./useEvent-DF4FEG-V.js";import"./FocusScope-COLrQoUG.js";import"./useDescription-DfU0gQ7F.js";import"./useControlledState-CZ3Rm1TI.js";import"./ListKeyboardDelegate-CRmBMJ-K.js";import"./Text-CJxCMya1.js";import"./inertValue-D9VrNG3s.js";import"./useListState-BDzP7Vli.js";import"./useHighlightSelectionDescription-BE3zKrUd.js";import"./useUpdateEffect-CIc4KHjg.js";import"./useLocalizedStringFormatter-CrcF-A2_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BgHoylzv.js";import"./useField-A2mC1b8s.js";import"./Button-Fphya-n-.js";import"./Button.module-CF2bVDCq.js";import"./x-C9U95zDY.js";import"./createLucideIcon-h5uZDkv-.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
