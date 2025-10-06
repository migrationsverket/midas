import{j as a}from"./iframe-OvParz4y.js";import{T as o,a as i,s as D}from"./Tag--XiekZKd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BU1rph52.js";import"./utils-D5PNVm2c.js";import"./clsx-B-dksMZM.js";import"./Hidden-CJ_3mG7e.js";import"./useFocusRing-CXxLMDBi.js";import"./index-CgmTFkWi.js";import"./index-D4WuOPeu.js";import"./useLabels-DnhJZlvB.js";import"./useButton-Ch6--qMZ.js";import"./Collection-D5253RwK.js";import"./index-CTbwqdYf.js";import"./ListBox-DWPFWwPN.js";import"./DragAndDrop-fcKPLRA5.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-GW0YiiHv.js";import"./SelectionManager-Cc1s8Y5K.js";import"./useEvent-BR__Wyp7.js";import"./FocusScope-S0oG5ykN.js";import"./useDescription-DspgypPA.js";import"./useControlledState-DzvcEBaA.js";import"./context-CMF8K1IZ.js";import"./Text-Dm8lU5eA.js";import"./inertValue-C_r95yO0.js";import"./useListState-BLdYeB7o.js";import"./useHighlightSelectionDescription-CGl7LVNV.js";import"./useUpdateEffect-BsYgdxTi.js";import"./useLocalizedStringFormatter-hlDkwb6T.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-zBbzLq5o.js";import"./useField-BOwRirt-.js";import"./clsx-Ciqy0D92.js";import"./Button-C8-hJVMz.js";import"./Button.module-DRhvPh0f.js";import"./x-DOf3aVeQ.js";import"./createLucideIcon-0sQ5JkJw.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
