import{j as e}from"./iframe-BooRIkJT.js";import{C as m}from"./CheckboxGroup-DkoJCvYN.js";import{C as n}from"./Checkbox-BbZvhlDh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B9tJyWw2.js";import"./utils-744b8K7d.js";import"./useObjectRef-C69ZsrXw.js";import"./clsx-B-dksMZM.js";import"./Text-BN2_aXJR.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./clsx-Ciqy0D92.js";import"./Text-EWpD-_jr.js";import"./Label-DgdpX6TQ.js";import"./Button-BqahGGDP.js";import"./Hidden-KVVrjxXu.js";import"./number-DfkVkf0F.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./Dialog-BTC-_GDP.js";import"./RSPContexts-DW-eESO9.js";import"./OverlayArrow-gMNeP8g9.js";import"./useResizeObserver-PuSMNmf3.js";import"./useControlledState-BubjIjDe.js";import"./Collection-DURp8c-8.js";import"./CollectionBuilder-ljaGCZ4i.js";import"./index-B__T8vyM.js";import"./Separator-C0Ght5Sg.js";import"./SelectionManager-D1jwCzet.js";import"./useEvent-DMEFFZ8b.js";import"./scrollIntoView-BCltoq3s.js";import"./SelectionIndicator-C9RAn77b.js";import"./useDescription-yfp6cPtE.js";import"./ListKeyboardDelegate-CE4VHnG8.js";import"./PressResponder-G8aGvnJM.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2SbqVTa.js";import"./getScrollParent-GNvtAy2u.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./Button-t6IXiYo0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./createLucideIcon-CtYgVG1u.js";import"./x-Cy8qabpY.js";import"./Heading-Cm_OjdTp.js";import"./info-CLONA53z.js";import"./Popover-wdM7J1SK.js";import"./useFormValidation-C73jfdEu.js";import"./useField-DaTFMrNe.js";import"./Form-lu2e_-CI.js";import"./check-CH5de5PO.js";import"./useToggleState-Be0mdiha.js";const lr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(n,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},p={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...p.parameters?.docs?.source}}};const dr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,p as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,dr as __namedExportsOrder,lr as default};
