import{j as a}from"./iframe-D22RnrI5.js";import{T as o,a as i,s as c}from"./Tag-Chqj6JjD.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-rdu5FjWn.js";import"./utils-IQwsi_Mp.js";import"./clsx-B-dksMZM.js";import"./Hidden-CtIENPW4.js";import"./useFocusRing-CelFkdst.js";import"./index-B6eCQ9aw.js";import"./index-DZ5AQ9RU.js";import"./useLabels-DCbQxQd_.js";import"./useButton-DTvkVre_.js";import"./Collection-D-9NlrVc.js";import"./index-Btrb5JSf.js";import"./ListBox-yKbFYqkd.js";import"./DragAndDrop-Bl8S20Ks.js";import"./getScrollParent-CBtZzG_M.js";import"./scrollIntoView-DFHnj_oN.js";import"./Separator-ovPP9zcr.js";import"./SelectionManager-BDylyf_D.js";import"./useEvent-CbrHpgHc.js";import"./SelectionIndicator-tBl4dzhl.js";import"./useDescription-BfXV2LOb.js";import"./useControlledState-Civ9vvMz.js";import"./ListKeyboardDelegate-B8eLekIo.js";import"./RSPContexts-DFUkwuHx.js";import"./Text-C_rQTysa.js";import"./inertValue-DzcDtwOb.js";import"./useListState-BIvJZgbp.js";import"./useHighlightSelectionDescription-BCwXsxMy.js";import"./useUpdateEffect-DI3MoPHF.js";import"./useLocalizedStringFormatter-BSWUiH8B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-I6TtfmqG.js";import"./useField-r-GiupzV.js";import"./clsx-Ciqy0D92.js";import"./Button-T9TteJoQ.js";import"./Button.module-CtQ1deO8.js";import"./x-35cMYwCl.js";import"./createLucideIcon-DImY0aIE.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
