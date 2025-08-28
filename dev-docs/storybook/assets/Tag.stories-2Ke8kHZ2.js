import{j as a}from"./iframe-CYpY7HWk.js";import{T as o,a as i,s as _}from"./Tag-CmNWxwRE.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Jn1_BTA1.js";import"./utils-D0PRHCyu.js";import"./clsx-B-dksMZM.js";import"./Hidden-iJG_k6qY.js";import"./useFocusRing-BHe0ZVk6.js";import"./index-SW5Q4g1x.js";import"./index-DR9W1cWv.js";import"./useLabels-CrNCUv0H.js";import"./useButton-e9xCySfl.js";import"./Collection-BOk_2tHe.js";import"./index-BTERBuk0.js";import"./ListBox-CZpsbxG5.js";import"./DragAndDrop-CKNsaM-K.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cr-Ee4o-.js";import"./SelectionManager-B-t3s1CO.js";import"./useEvent-ChaamAse.js";import"./FocusScope-DPMBrb1R.js";import"./useDescription-BycwCd6J.js";import"./useControlledState-BZ7WHBYj.js";import"./ListKeyboardDelegate-C4NMIf2p.js";import"./Text-oay8j5lU.js";import"./inertValue-driQ7H0N.js";import"./useListState--fyADMUD.js";import"./useField-C0se5ntN.js";import"./useHighlightSelectionDescription-C9u-hXaW.js";import"./useUpdateEffect-BJ-t8phl.js";import"./useLocalizedStringFormatter-6SIvu_ff.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D7s4cL0b.js";import"./Button-D3CzCYQz.js";import"./Button.module-DKVuWS4g.js";import"./x-CAeE556l.js";import"./createLucideIcon-3lKKdzZh.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
