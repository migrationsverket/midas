import{j as a}from"./iframe-BvtnbEWO.js";import{T as o,a as i,s as c}from"./Tag-CQecM679.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-BDKaMgDI.js";import"./utils-Dmj49lEG.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-AZDmCl.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./ListBox-DtidrHjR.js";import"./DragAndDrop-Da2BPJ6T.js";import"./getScrollParent-DAh1nnIS.js";import"./scrollIntoView-CptB-SyI.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useDescription-3yaDVIih.js";import"./useControlledState-Dzlb7uXm.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./RSPContexts-BMp6jLpo.js";import"./Text-G_ihDvZJ.js";import"./inertValue-orH6NezI.js";import"./useListState-CFYSJQ23.js";import"./useHighlightSelectionDescription-BqU753u8.js";import"./useUpdateEffect-DZw5GxmE.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-DVP5XgGP.js";import"./useField-BnzoMeMJ.js";import"./clsx-Ciqy0D92.js";import"./Button-DciKK2iU.js";import"./Button.module-CtQ1deO8.js";import"./x-B4WpRfld.js";import"./createLucideIcon-DLTmB58A.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
