import{j as e}from"./iframe-CXiR3iKp.js";import{C as m}from"./CheckboxGroup-C32PvB42.js";import{C as p}from"./Checkbox-BX63tR06.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DhN8Qwjc.js";import"./utils-Bp_8F4M1.js";import"./clsx-B-dksMZM.js";import"./Text-VVcfFgTz.js";import"./useFocusRing-DoagLvTG.js";import"./index-BVvfbKRI.js";import"./index-DLJWMq1n.js";import"./clsx-Ciqy0D92.js";import"./Text-DQ2_N-F1.js";import"./Label-Dga4mRfK.js";import"./Button-DQDqzjOI.js";import"./Hidden-l5OStL3l.js";import"./useLabels-hiXhHu80.js";import"./useButton-DoaLh7Qx.js";import"./Dialog-90d5LqQ1.js";import"./RSPContexts-BzUEWbO_.js";import"./OverlayArrow-BuEOYobt.js";import"./useResizeObserver-Dh_BagkN.js";import"./useControlledState-D8SfxPND.js";import"./Collection-DOgSX1Rr.js";import"./index-BnfzSOVc.js";import"./Separator-03-x-_Sf.js";import"./SelectionManager-Cg-LEXRR.js";import"./useEvent-CYUKjQ_Y.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTH59uWk.js";import"./useDescription-CwhQFL3q.js";import"./ListKeyboardDelegate-xGHUZWyo.js";import"./PressResponder-BB0iuKRP.js";import"./useLocalizedStringFormatter-oYkQuV-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTKnXGEx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-QuqGTMLw.js";import"./Button-6_2D52en.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0YZmeDYQ.js";import"./createLucideIcon-D8BZH6VC.js";import"./x-B58mgY9H.js";import"./Heading-CV0Qf8hu.js";import"./info-Dpef2w5o.js";import"./Popover-DkEvv8Au.js";import"./useFormValidation-1zZirEp8.js";import"./useField-DlTgCsXO.js";import"./Form-DKaWK_r_.js";import"./check-DLQ3AuH2.js";import"./useToggleState-ZTrJpODp.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
