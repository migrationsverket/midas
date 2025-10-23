import{j as a}from"./iframe-fDXOsywa.js";import{T as o,a as i,s as c}from"./Tag-CnK0QbzP.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-EDZL10yX.js";import"./utils-jl4nVMmS.js";import"./clsx-B-dksMZM.js";import"./Hidden-D-yqKUTe.js";import"./useFocusRing-gU4XRzOS.js";import"./index-wA_lPabs.js";import"./index-NMMldFA3.js";import"./useLabels-BmkcOEEQ.js";import"./useButton-CqL1Vm8Z.js";import"./Collection-Czo0vAYA.js";import"./index-DvgN5I0j.js";import"./ListBox-DvoWJG2N.js";import"./DragAndDrop-d3f2Y1aw.js";import"./getScrollParent-BT3G_gxy.js";import"./scrollIntoView-DBOgPBsD.js";import"./Separator-CnGRSVFD.js";import"./SelectionManager-BCynLREX.js";import"./useEvent-BlL3_Xul.js";import"./SelectionIndicator-CsU9yYbr.js";import"./useDescription-Dsp-kCKx.js";import"./useControlledState-BFHIlEy-.js";import"./ListKeyboardDelegate-CILeKQbh.js";import"./RSPContexts-DXYNxytm.js";import"./Text-BaIQfRso.js";import"./inertValue-CJmnah73.js";import"./useListState-BV5gmlhO.js";import"./useHighlightSelectionDescription-B222qQPF.js";import"./useUpdateEffect-DPNX0U6G.js";import"./useLocalizedStringFormatter-DiNpPFwm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-D0POKQcS.js";import"./useField-BtxACaX0.js";import"./clsx-Ciqy0D92.js";import"./Button-Ck-hw6bu.js";import"./Button.module-CtQ1deO8.js";import"./x-CvjAPI66.js";import"./createLucideIcon-T-T0oES3.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...r.parameters?.docs?.source}}};const $=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,$ as __namedExportsOrder,Z as default};
