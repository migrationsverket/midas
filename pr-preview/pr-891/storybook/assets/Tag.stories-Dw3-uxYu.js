import{j as a}from"./iframe-DVfi3_SF.js";import{T as o,a as i,s as c}from"./Tag-Bsw507l8.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-D5dtCU50.js";import"./utils-DSuW7o8J.js";import"./clsx-B-dksMZM.js";import"./Hidden-CsByKLFz.js";import"./useFocusRing-B4faYJtf.js";import"./index-8vKeZmgO.js";import"./index-C7DQzPvW.js";import"./useLabels-DWWz7lO4.js";import"./useButton-DLqLP6Xz.js";import"./Collection-nWpTXyZ6.js";import"./index-BEZ9BlHC.js";import"./ListBox-Bvg9W8SZ.js";import"./DragAndDrop-DVcWIIfP.js";import"./getScrollParent-C1MrzQw1.js";import"./scrollIntoView-Bobw8t0H.js";import"./Separator-B6aL-dkg.js";import"./SelectionManager-C8jPpCbl.js";import"./useEvent-QfvmovDb.js";import"./SelectionIndicator-CnznPozG.js";import"./useDescription-hr8W1nNh.js";import"./useControlledState-CIbbCaYD.js";import"./ListKeyboardDelegate-0sfQUa7K.js";import"./RSPContexts-CQyNRPa7.js";import"./Text-A3DLHuq6.js";import"./inertValue-DggJFzlR.js";import"./useListState-Cl6ck14N.js";import"./useHighlightSelectionDescription-BZ7nlgGs.js";import"./useUpdateEffect-DZ1x5ktA.js";import"./useLocalizedStringFormatter-7LOyipa-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-BTEUBtgZ.js";import"./useField-Cboyd4E_.js";import"./clsx-Ciqy0D92.js";import"./Button-C_F6Y6Yg.js";import"./Button.module-CtQ1deO8.js";import"./x-XFe__SQz.js";import"./createLucideIcon-BXAfGPAx.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
