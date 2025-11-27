import{j as e}from"./iframe-BcYLPvvG.js";import{C as m}from"./CheckboxGroup-DFq4bfdd.js";import{C as p}from"./Checkbox-yY6uB3gd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DiuvsHLT.js";import"./utils-DuGQH1VB.js";import"./clsx-B-dksMZM.js";import"./Text-Ctvw4Oon.js";import"./useFocusRing-mtX7PO0G.js";import"./index-8OTKUVm4.js";import"./index-DIjlvTAp.js";import"./clsx-Ciqy0D92.js";import"./Text-BmaZQl73.js";import"./Label-Bit6Cf-h.js";import"./Button-Dk0RbBuY.js";import"./Hidden-tUEU5F-V.js";import"./useLabels-h9x39qhJ.js";import"./useButton-CxdPVYy7.js";import"./Dialog-D-fPsuyf.js";import"./RSPContexts-BtVOhJLL.js";import"./OverlayArrow-BkRfPN1b.js";import"./useResizeObserver-DePrYVsQ.js";import"./useControlledState-Cl08l4Il.js";import"./Collection-CCHEZMzV.js";import"./index-Mki23RMT.js";import"./Separator-BUeiXq91.js";import"./SelectionManager-CDiMoMVa.js";import"./useEvent-HfrKpO3k.js";import"./scrollIntoView-BpuKwFUC.js";import"./SelectionIndicator-zLjbsGri.js";import"./useDescription-BkSntyEJ.js";import"./ListKeyboardDelegate-O58EAQ7o.js";import"./PressResponder-K1Un6ieo.js";import"./useLocalizedStringFormatter-CEq-wPRG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DblQOhU2.js";import"./VisuallyHidden-B8-euVpR.js";import"./Button-C21XDfHm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C15hJ3-x.js";import"./createLucideIcon-h4XNnCB9.js";import"./x-xAvv45r1.js";import"./Heading-B9CW9bk0.js";import"./info-DCBVzFQl.js";import"./Popover-Bqe-56I-.js";import"./useFormValidation-84Kof8wr.js";import"./useField-DopM9hg3.js";import"./Form-wxpWhKM7.js";import"./check-OlfJk0El.js";import"./useToggleState-DZyHUlpN.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
