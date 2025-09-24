import{j as a}from"./iframe-CcYoyLxx.js";import{T as o,a as i,s as D}from"./Tag-Cq8ll2C8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-fkqxYGh8.js";import"./utils-WR6yldpT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DOd4ujoM.js";import"./useFocusRing-CPI2SbyA.js";import"./index-C0uXs65s.js";import"./index-CpHb6on0.js";import"./useLabels-C_XT6TXb.js";import"./useButton-B9jkgDei.js";import"./Collection-WhI5xScY.js";import"./index-CHvJCWCo.js";import"./ListBox-BN-RvBMO.js";import"./DragAndDrop-C-6P_C_D.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D35uj8Q1.js";import"./SelectionManager-CO7_lkYd.js";import"./useEvent-CAU0qwJ1.js";import"./FocusScope-CY1pImQD.js";import"./useDescription-B0NNvk6L.js";import"./useControlledState-BlvvK_IF.js";import"./ListKeyboardDelegate-CLua4GlK.js";import"./Text-DKylz8nA.js";import"./inertValue-CxlipqdI.js";import"./useListState-B-mTTNYx.js";import"./useHighlightSelectionDescription-h5F1FNLk.js";import"./useUpdateEffect-B9XcE4Ms.js";import"./useLocalizedStringFormatter-Xe47ETul.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BCJYtjDC.js";import"./useField-z33bZt7X.js";import"./Button-BXUrLeTK.js";import"./Button.module-DRhvPh0f.js";import"./x-BxLywLri.js";import"./createLucideIcon-CpEhFOyb.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
