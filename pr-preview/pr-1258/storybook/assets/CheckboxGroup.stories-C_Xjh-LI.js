import{j as e}from"./iframe-BqQ5c8fE.js";import{C as m}from"./CheckboxGroup-CQWJgKh5.js";import{C as p}from"./Checkbox-D5KdQcZu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-vKbkj088.js";import"./utils-vcgv-geB.js";import"./clsx-B-dksMZM.js";import"./Text-mKjyceMN.js";import"./useFocusRing-0ttJCKLt.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./clsx-Ciqy0D92.js";import"./Text-DZT9e49R.js";import"./Label-C_r7Z9fb.js";import"./Button-BUzCWcrF.js";import"./Hidden-lysAnu3A.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./Dialog-R4f7XIN1.js";import"./RSPContexts-BnH9bYe5.js";import"./OverlayArrow-B6clPy7K.js";import"./useResizeObserver-CqZUYUxF.js";import"./useControlledState-p_0xc8M1.js";import"./Collection-CxdKGeHr.js";import"./index-21XDGZRk.js";import"./Separator-BgqByx8U.js";import"./SelectionManager-DSIhunJP.js";import"./useEvent-CwwdPrs-.js";import"./scrollIntoView-BSmOLwAx.js";import"./SelectionIndicator-C8zII3ul.js";import"./useDescription-BXuFRPve.js";import"./ListKeyboardDelegate-ChxPjGZv.js";import"./PressResponder-BBf-2b62.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKM6sTcQ.js";import"./getScrollParent-BizxzfZb.js";import"./VisuallyHidden-BYz02vHS.js";import"./ModalOverlay-7Jl_Yv-h.js";import"./x-DEICiepl.js";import"./createLucideIcon-BcjPS7EP.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Heading-nX8hWCWb.js";import"./Button-BS1gBrNw.js";import"./Button.module-BB7N-cLd.js";import"./info-DPNCsAFe.js";import"./Popover-kbi6VSQQ.js";import"./Form-DesHcFFM.js";import"./useField-BpwbsBj8.js";import"./check-BgzoDrGb.js";import"./useToggleState-DD_ZSnCr.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
