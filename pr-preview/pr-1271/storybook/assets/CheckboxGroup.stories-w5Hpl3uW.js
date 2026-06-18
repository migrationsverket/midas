import{j as e}from"./iframe-CZzQp4L4.js";import{C as m}from"./CheckboxGroup-XKOGI3DM.js";import{C as p}from"./Checkbox-BaX22mtO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2NzjSdH.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./Text-D4nq5ZrE.js";import"./useFocusRing-BmXcpeVt.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./clsx-Ciqy0D92.js";import"./Text-CgRiWgOz.js";import"./Label-PycvJ6D4.js";import"./Button-CMuMpLTA.js";import"./Hidden-BsPoJuN8.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./Dialog-Em9T_sNe.js";import"./RSPContexts-C0f-FQan.js";import"./OverlayArrow-BWmspBAH.js";import"./useResizeObserver-kChHHO69.js";import"./useControlledState-Bzqk2M-v.js";import"./Collection-8ZnFVCkO.js";import"./index-IxhRrh31.js";import"./Separator-glEOqD4B.js";import"./SelectionManager-CzxGmGcX.js";import"./useEvent-BLtqzDzs.js";import"./scrollIntoView-C5X5vw03.js";import"./SelectionIndicator-FgeZ0UGL.js";import"./useDescription-CsoYkjOr.js";import"./ListKeyboardDelegate-DiVo4jo3.js";import"./PressResponder-qkhnBXZz.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8gubePBQ.js";import"./getScrollParent-D5Oq2B6G.js";import"./VisuallyHidden-aeJx5n8b.js";import"./ModalOverlay-B1wpkTSM.js";import"./x-BkS9uTgk.js";import"./createLucideIcon-Cp1wTSwb.js";import"./useLocalizedStringFormatter-DHizypL-.js";import"./Heading-C7OfNizA.js";import"./Button-fUmHoMv6.js";import"./Button.module-BB7N-cLd.js";import"./info-BQIpRp7q.js";import"./Popover-ULM8piUT.js";import"./Form-659gi0gy.js";import"./useField-C2MfHxqd.js";import"./check-uaHuxoY8.js";import"./useToggleState-Dbu77dnE.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
