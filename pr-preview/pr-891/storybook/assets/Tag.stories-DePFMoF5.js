import{j as a}from"./iframe-crrRDQdL.js";import{T as o,a as i,s as c}from"./Tag-DZlMJuHS.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-D2FSU2f8.js";import"./utils-Ys3_FUZM.js";import"./clsx-B-dksMZM.js";import"./Hidden-CpiXS9Kq.js";import"./useFocusRing-CKHcw9hW.js";import"./index-DYukp6dc.js";import"./index-D6zF5ab1.js";import"./useLabels-BqmK4HVG.js";import"./useButton-OtuQrflQ.js";import"./Collection-Cry9oPG_.js";import"./index-CyA-Hgia.js";import"./ListBox-DHPWJyl7.js";import"./DragAndDrop-CjHt_41_.js";import"./getScrollParent-DizgQUhJ.js";import"./scrollIntoView-DH3xY7BC.js";import"./Separator-Pc9VU3of.js";import"./SelectionManager-CalKvBsA.js";import"./useEvent-CjunYZov.js";import"./SelectionIndicator-CQR2oYTR.js";import"./useDescription-CZlSe1aY.js";import"./useControlledState-BzKJy9y_.js";import"./ListKeyboardDelegate-g-Xfvl9E.js";import"./RSPContexts-EpQgLewh.js";import"./Text-C8ZiJPVn.js";import"./inertValue-v3hHuBEi.js";import"./useListState-VWyQVDf-.js";import"./useHighlightSelectionDescription-C_zkpFgD.js";import"./useUpdateEffect-DOyKRJHd.js";import"./useLocalizedStringFormatter-Bbj_fEdz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-CDhQ27af.js";import"./useField-BsLDZIoY.js";import"./clsx-Ciqy0D92.js";import"./Button-Bst02TFm.js";import"./Button.module-CtQ1deO8.js";import"./x-8f75MzE4.js";import"./createLucideIcon-CHU1oBRH.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
