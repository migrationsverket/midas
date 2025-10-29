import{j as a}from"./iframe-Cn95Trhs.js";import{T as o,a as i,s as c}from"./Tag-r19DGV_Y.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-D8Giz6cX.js";import"./utils-B_Rqc_aW.js";import"./clsx-B-dksMZM.js";import"./Hidden-7SzS1JPj.js";import"./useFocusRing-_qs5_0yz.js";import"./index-BY3baLss.js";import"./index-BcP-6fTE.js";import"./useLabels-DEGYN1v0.js";import"./useButton-DASWZRz7.js";import"./Collection-BUX6Z683.js";import"./index-CGQWjv4N.js";import"./ListBox-D5dRBsAn.js";import"./DragAndDrop-ul2VAYp0.js";import"./getScrollParent-Bt397MOx.js";import"./scrollIntoView-Bq7zohMa.js";import"./Separator-CIGEmpkd.js";import"./SelectionManager-DG3fdn3B.js";import"./useEvent-pwVu5ejx.js";import"./SelectionIndicator-tJ79aiI1.js";import"./useDescription-BExuhEP2.js";import"./useControlledState-CGhILm4m.js";import"./ListKeyboardDelegate-BX573gQJ.js";import"./RSPContexts-DBwctYh3.js";import"./Text-dcT-5KgR.js";import"./inertValue-CaVYG8NK.js";import"./useListState-yVeyVb7o.js";import"./useHighlightSelectionDescription-DKl_Rrc6.js";import"./useUpdateEffect-CR1US5I7.js";import"./useLocalizedStringFormatter-DQ6TS5SV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-CxRLyiAb.js";import"./useField-Dfi7nSV3.js";import"./clsx-Ciqy0D92.js";import"./Button-BfGcSgjz.js";import"./Button.module-CtQ1deO8.js";import"./x-CwLaLTIN.js";import"./createLucideIcon-BhsQ84wm.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
