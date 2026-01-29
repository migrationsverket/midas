import{j as e}from"./iframe-BFfxWrax.js";import{C as m}from"./CheckboxGroup-DQs_E3MZ.js";import{C as p}from"./Checkbox-CCM_xjBu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CzwgIoCO.js";import"./utils-C8IykF9r.js";import"./clsx-B-dksMZM.js";import"./Text-CEYrRu-P.js";import"./useFocusRing-DxTvBZDR.js";import"./index-DV5X86sq.js";import"./index-CLdRZTnk.js";import"./clsx-Ciqy0D92.js";import"./Text-Bhj_DbeZ.js";import"./Label-DmDD21Z5.js";import"./Button-C3IeQ2N5.js";import"./Hidden-B6F1QNEg.js";import"./useLabels-DvNW6A8N.js";import"./useButton-BbUUQ9F5.js";import"./Dialog-BpOw2c4w.js";import"./RSPContexts-Bb44GcTO.js";import"./OverlayArrow-BvhWaaGN.js";import"./useResizeObserver-DCdPtZtC.js";import"./useControlledState-HqAin-M6.js";import"./Collection-DldGlNHn.js";import"./index-Dow7YCmP.js";import"./Separator-DRUufS6Z.js";import"./SelectionManager-BzJ3qBxx.js";import"./useEvent-DtkOHSGp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ch46GEFT.js";import"./useDescription-DV4u1qz6.js";import"./ListKeyboardDelegate-B9GXBaZH.js";import"./PressResponder-3F0_3fmd.js";import"./useLocalizedStringFormatter-DvfqzT1M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXb6KWbz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ca_DY3bR.js";import"./Button-C0MNS1vn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cg3NQL_5.js";import"./createLucideIcon-CbYcBAPq.js";import"./x-w0Zhu9bS.js";import"./Heading-BjLhsWhp.js";import"./info-DY2xtnVi.js";import"./Popover-BUxNyRXV.js";import"./useFormValidation-GM6fJea0.js";import"./useField-BvLlyQY4.js";import"./Form-DTIVZCo5.js";import"./check-BUzfRBD1.js";import"./useToggleState-ozsGDeAQ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
