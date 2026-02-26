import{j as e}from"./iframe-qA047as2.js";import{C as m}from"./CheckboxGroup-x7VkKmVT.js";import{C as p}from"./Checkbox-BcQ5NfC3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-aeuP4CDb.js";import"./utils-CnePkaRa.js";import"./clsx-B-dksMZM.js";import"./Text-DZAVuivT.js";import"./useFocusRing-No8xSroW.js";import"./index-BDL1KNLx.js";import"./index-DVFaELLp.js";import"./clsx-Ciqy0D92.js";import"./Text-CzZwSmIU.js";import"./Label-BybkoEIV.js";import"./Button-CDa9hyQV.js";import"./Hidden-74NDefsp.js";import"./useLabels-BED0MCXy.js";import"./useButton-ZFa7mm27.js";import"./Dialog-BL2TaiMM.js";import"./RSPContexts-DtyC-LdE.js";import"./OverlayArrow-DdBbsO1q.js";import"./useResizeObserver-BqZpnL1N.js";import"./useControlledState-BqDoX1oC.js";import"./Collection-Dh4VjxAz.js";import"./index-BHvREsci.js";import"./Separator-BhpHx7-2.js";import"./SelectionManager-BNHHveg4.js";import"./useEvent-DpQSoI-M.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5C--0__.js";import"./useDescription-3SukAPA1.js";import"./ListKeyboardDelegate-BydgnHxR.js";import"./PressResponder-BFZ8lth1.js";import"./useLocalizedStringFormatter-4TG4W5do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUa9hm7C.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNz_8c2V.js";import"./Button-IkqPRuS8.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BEiZ3BMs.js";import"./createLucideIcon-Bdodb09A.js";import"./x-DPER_DtP.js";import"./Heading-860Teim3.js";import"./info-OQEBfFox.js";import"./Popover-blMgf662.js";import"./useFormValidation-D9d090zr.js";import"./useField-Dbbo2A5n.js";import"./Form-Cacq4RkI.js";import"./check-DgomVN7j.js";import"./useToggleState-C8g4NIu8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
