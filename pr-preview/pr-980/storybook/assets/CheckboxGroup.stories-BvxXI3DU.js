import{j as e}from"./iframe-ew_c8Ar1.js";import{C as m}from"./CheckboxGroup-KZnjvoDq.js";import{C as p}from"./Checkbox-CiW4OrE0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BvGGtKbz.js";import"./utils-Dqzr4Pki.js";import"./clsx-B-dksMZM.js";import"./Text-DCZDHd_s.js";import"./useFocusRing-BCBGQLiA.js";import"./index-B-AnuWqo.js";import"./index-DV6EzAem.js";import"./clsx-Ciqy0D92.js";import"./Text-qQ_AxwzD.js";import"./Label-YBy9VX1d.js";import"./Button-CNKdX4lK.js";import"./Hidden-BqxvZ74N.js";import"./useLabels-BfgLEKzw.js";import"./useButton-DD4YI9ZW.js";import"./Dialog-BQ3If_6k.js";import"./RSPContexts-C0CdLA6m.js";import"./OverlayArrow-CaCN9pdQ.js";import"./useResizeObserver-tdd60-57.js";import"./useControlledState-CcfGPE8i.js";import"./Collection-DVPNe_rB.js";import"./index-CAuzshzC.js";import"./Separator-D8J14l87.js";import"./SelectionManager-D8qpnu3e.js";import"./useEvent-TRpBA60y.js";import"./scrollIntoView-B87_qoAO.js";import"./SelectionIndicator-jAxqj1hI.js";import"./useDescription-BpxF-b7t.js";import"./ListKeyboardDelegate-t0Dd7Zgy.js";import"./PressResponder-DRxrBBeJ.js";import"./useLocalizedStringFormatter-CJvI6W0Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BzLbdOeN.js";import"./VisuallyHidden-pImEXMGE.js";import"./Button-DR2FWxw-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BsyJ0bjv.js";import"./createLucideIcon-CjgT-vsM.js";import"./x-CCzrZzPy.js";import"./Heading-BCUqRBlG.js";import"./info-yrpflt1x.js";import"./Popover-dF1uHzQn.js";import"./useFormValidation-BLzMQRkI.js";import"./useField-Bj1_yxTO.js";import"./Form-C-XbQG_I.js";import"./check-DS-jP0A8.js";import"./useToggleState-ChMiuz0M.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
