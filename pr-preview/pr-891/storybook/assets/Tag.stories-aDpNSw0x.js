import{j as a}from"./iframe-CcqQFNZ4.js";import{T as o,a as i,s as c}from"./Tag-BWQxhmGR.js";import"./preload-helper-Ct5FWWRu.js";import"./Button-BwODYqP3.js";import"./utils-CzaLILIa.js";import"./clsx-B-dksMZM.js";import"./Hidden-_YiRnjLS.js";import"./useFocusRing-BA6Kf1-f.js";import"./index-DuhG6G0z.js";import"./index-DovVAc5x.js";import"./useLabels-BZCRLtmz.js";import"./useButton-3G_DPaEV.js";import"./Collection-DKS4mvyp.js";import"./index-CO0eKQ8f.js";import"./ListBox-dO6hNHIP.js";import"./DragAndDrop-DjpyQzV6.js";import"./getScrollParent-U4gqDdev.js";import"./scrollIntoView-BPCWOSeZ.js";import"./Separator-BPm2hpSN.js";import"./SelectionManager-DWpnT7EH.js";import"./useEvent-CKEINn0T.js";import"./SelectionIndicator-BkaQps3-.js";import"./useDescription-4VoNSCjv.js";import"./useControlledState-DWv4BEMA.js";import"./ListKeyboardDelegate-CBJTrAZi.js";import"./RSPContexts-AhW-oOA3.js";import"./Text-CJ6eX-zL.js";import"./inertValue-Dzhaqs66.js";import"./useListState-DjqVpJ3e.js";import"./useHighlightSelectionDescription-DRuqpOdp.js";import"./useUpdateEffect-JescmLq4.js";import"./useLocalizedStringFormatter-SKtJYtnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useHasTabbableChild-7ydMDL90.js";import"./useField-1XPfFC0b.js";import"./clsx-Ciqy0D92.js";import"./Button-Bb_v90_P.js";import"./Button.module-CtQ1deO8.js";import"./x-CwAMwMTg.js";import"./createLucideIcon-tejd7HsP.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p="test",Z={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":p,children:s.children})})},t={play:async({canvas:s,step:m,args:{className:n}})=>{await m("it should preserve its classNames when being passed new ones",async()=>{l(s.getByTestId(p)).toHaveClass(c.tag,n)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
