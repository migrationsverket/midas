import{j as e}from"./iframe-100qMnfY.js";import{C as m}from"./CheckboxGroup-Cy56l7IV.js";import{C as p}from"./Checkbox-4zfHP7sC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BvABXoNl.js";import"./utils-DREZrf5w.js";import"./clsx-B-dksMZM.js";import"./Text-B4kw0-X3.js";import"./useFocusRing-CVO60JuB.js";import"./index-DtVlivv4.js";import"./index-4-70Rh_t.js";import"./clsx-Ciqy0D92.js";import"./Text-B8ramOt9.js";import"./Label-frAuwLVC.js";import"./Button-CLD1ku7M.js";import"./Hidden-BfdaDtwq.js";import"./useLabels-ChwZdlgF.js";import"./useButton-BCpYX0mb.js";import"./Dialog-CwQWAlDM.js";import"./RSPContexts-C0KhFtOq.js";import"./OverlayArrow-BGLiWg8z.js";import"./useResizeObserver-BueACssj.js";import"./useControlledState-UappQ29V.js";import"./Collection-D7aIGeON.js";import"./index-2i8EAZWI.js";import"./Separator-DYqZSnxV.js";import"./SelectionManager-BGVqBHe4.js";import"./useEvent-kutblQB0.js";import"./scrollIntoView-7R9ToXO2.js";import"./SelectionIndicator-BTSStY39.js";import"./useDescription-Dr1tnAab.js";import"./ListKeyboardDelegate-CFzyQsN-.js";import"./PressResponder-B2JtbMCO.js";import"./useLocalizedStringFormatter-X_3lrB61.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-kLQEpmJe.js";import"./VisuallyHidden-4x0NHiv7.js";import"./Button-CSE2hNCe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zfYfv8U6.js";import"./createLucideIcon-CoQzWAgu.js";import"./x-i3ng02A_.js";import"./Heading-Rgb2c7mX.js";import"./info-Dk9KzqW4.js";import"./Popover-CU8eGpke.js";import"./useFormValidation-5HIGbRHA.js";import"./useField-CQ-Xt63e.js";import"./Form-29CVYf5x.js";import"./check-BC96pg3F.js";import"./useToggleState-D-1YOFgs.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
