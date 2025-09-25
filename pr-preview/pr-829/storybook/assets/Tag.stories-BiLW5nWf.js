import{j as a}from"./iframe-DoEm8jOK.js";import{T as o,a as i,s as D}from"./Tag-FJXlBsLt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BuoyjQKt.js";import"./utils-CBBL1yxz.js";import"./clsx-B-dksMZM.js";import"./Hidden-UMpvD0EO.js";import"./useFocusRing-D76VYtD6.js";import"./index-DMJ9tBuT.js";import"./index-C4s_PXg9.js";import"./useLabels-Cd3X_Ale.js";import"./useButton-BlgZJUnf.js";import"./Collection-BdA7v9ZY.js";import"./index-qQhZJVFU.js";import"./ListBox-CylVf3Kv.js";import"./DragAndDrop-B3PhYWzx.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BWaW984y.js";import"./SelectionManager-CfpEtskZ.js";import"./useEvent-BpenKleG.js";import"./FocusScope-DMHgaQJH.js";import"./useDescription-DzeLSQN-.js";import"./useControlledState-BNJvzmwi.js";import"./ListKeyboardDelegate-3OKEOtnS.js";import"./Text-B9Snu3HI.js";import"./inertValue-CYLkmPrr.js";import"./useListState-CC04pTqu.js";import"./useHighlightSelectionDescription-C3_HKyAV.js";import"./useUpdateEffect-DonTD7t0.js";import"./useLocalizedStringFormatter-B9EjVLIH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CyDi0rgY.js";import"./useField-d2Ru0eqd.js";import"./Button-Cj5-N1s4.js";import"./Button.module-DRhvPh0f.js";import"./x-DAhXhk8F.js";import"./createLucideIcon-Bt1qQWgl.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
