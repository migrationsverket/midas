import{j as a}from"./iframe-C8bMXFlR.js";import{T as o,a as i,s as D}from"./Tag-DOxrPltw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BQ34HGfx.js";import"./utils-B48jH5Wi.js";import"./clsx-B-dksMZM.js";import"./Hidden-DIPLLSrI.js";import"./useFocusRing-vZdHyggg.js";import"./index-SMAI7IyX.js";import"./index-BjFwAF97.js";import"./useLabels-le9OUEgt.js";import"./useButton-BDq6E-13.js";import"./Collection-Dxo7gSrK.js";import"./index-LgX-1hlH.js";import"./ListBox-BONsJt7x.js";import"./DragAndDrop-CEYD-cVL.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CJFmLjrj.js";import"./SelectionManager-B-SZkH87.js";import"./useEvent-DPRgh361.js";import"./FocusScope-CXeChsrc.js";import"./useDescription-BxsRzYXT.js";import"./useControlledState-C0DEDXqo.js";import"./ListKeyboardDelegate-Dr-Lbyjw.js";import"./Text-DRbuNIWw.js";import"./inertValue-B0E8SARS.js";import"./useListState-Zo8Bef2z.js";import"./useHighlightSelectionDescription-Dwk7UZCN.js";import"./useUpdateEffect-B_6DwuIm.js";import"./useLocalizedStringFormatter-Cdo_Mg4Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-y6EsfJSl.js";import"./useField-DOxa1fdF.js";import"./Button-neHr3WcT.js";import"./Button.module-DRhvPh0f.js";import"./x-BXevkvuY.js";import"./createLucideIcon-CKDZTqyk.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
