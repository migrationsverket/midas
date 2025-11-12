import{j as e}from"./iframe-C4nZhlHp.js";import{C as m}from"./CheckboxGroup-C2ijNkwG.js";import{C as p}from"./Checkbox-DLTHBpF0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BIrWKztk.js";import"./utils-BThtOLN3.js";import"./clsx-B-dksMZM.js";import"./Text-BtqzfC97.js";import"./useFocusRing-CUt9jPRY.js";import"./index-CdzEK6sL.js";import"./index-Bcy_e8uM.js";import"./clsx-Ciqy0D92.js";import"./Text-Bl0ISbQ7.js";import"./Label-nMZHoR1R.js";import"./Button-BoerEFmi.js";import"./Hidden-DGAgWOv2.js";import"./useLabels-DFzN42D5.js";import"./useButton-DpHHTz7A.js";import"./Dialog-B3G-tmn3.js";import"./RSPContexts-WH4nMcxQ.js";import"./OverlayArrow-CKwxQumt.js";import"./useResizeObserver-CZeyxuFP.js";import"./useControlledState-CJQYAY_g.js";import"./Collection-BYOOna-_.js";import"./index-CrrCrdFV.js";import"./Separator-CH_H607m.js";import"./SelectionManager-QICQi-ba.js";import"./useEvent-BdTEiYUL.js";import"./scrollIntoView-DvFBFjjW.js";import"./SelectionIndicator-CvD-2Szl.js";import"./useDescription-C8Gi_2UD.js";import"./ListKeyboardDelegate-BH6lIL_e.js";import"./PressResponder-Bf9Ccmnl.js";import"./useLocalizedStringFormatter-6ucjq8Cp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtN2yNgt.js";import"./VisuallyHidden-BNOgBQKx.js";import"./useLocalizedStringFormatter-CL3ousm2.js";import"./Button-Dfl_9rMf.js";import"./Button.module-CtQ1deO8.js";import"./x-D5_o8_hp.js";import"./createLucideIcon-Cca3XJOR.js";import"./Heading-yb9MM0bb.js";import"./info-DMZ8PHWD.js";import"./Popover-DeuSIbOO.js";import"./useFormValidation-CXbCMZ0J.js";import"./useField-B48LiqQ_.js";import"./Form-CWA6zdQ3.js";import"./check-Brn6va9E.js";import"./useToggleState-BKAuuaZH.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
