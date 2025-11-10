import{j as e}from"./iframe-z4Kn7Dod.js";import{C as m}from"./CheckboxGroup-CUQ3VnCc.js";import{C as p}from"./Checkbox-zVstkQYU.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-BUE0nCtQ.js";import"./utils-B0ZlOqSZ.js";import"./clsx-B-dksMZM.js";import"./Text-Co53YKw_.js";import"./useFocusRing-D7-U344R.js";import"./index-NwkKJrPN.js";import"./index-BkwicnWz.js";import"./clsx-Ciqy0D92.js";import"./Text-xMfMqXAz.js";import"./Label-CqSyALsl.js";import"./Button-DOGbQp-l.js";import"./Hidden-dMbFCmcO.js";import"./useLabels-DPTd5ivJ.js";import"./useButton-BloXFTco.js";import"./Dialog-BsBw6G-v.js";import"./RSPContexts-BgiZsYOn.js";import"./OverlayArrow-B-PSwc1Y.js";import"./useResizeObserver-CLkNWoqS.js";import"./useControlledState-BKRdwuD9.js";import"./Collection-DtXafGn7.js";import"./index-DGqIYxif.js";import"./Separator-DaJlhMjW.js";import"./SelectionManager-CY7IVRq2.js";import"./useEvent-Rn8cx-9B.js";import"./scrollIntoView--sCB4rtl.js";import"./SelectionIndicator-D0QPZ4A-.js";import"./useDescription-xE4b9EWQ.js";import"./ListKeyboardDelegate-D2qEYVI1.js";import"./PressResponder-B5W4yVD-.js";import"./useLocalizedStringFormatter-Ccm0cyRu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CIh3jiJ1.js";import"./VisuallyHidden-DSL3Qrb4.js";import"./useLocalizedStringFormatter-D2_yQbgI.js";import"./Button-BtgFqZmb.js";import"./Button.module-CtQ1deO8.js";import"./x-zOKjtXmD.js";import"./createLucideIcon-CnDnstCY.js";import"./Heading-BclOURfV.js";import"./info-BltGIt--.js";import"./Popover-C5iItwvu.js";import"./useFormValidation-BGvhWzWO.js";import"./useField-DPZ3oZeV.js";import"./Form-CPdiYGCT.js";import"./check-CQKc65_m.js";import"./useToggleState-DDXT3iQL.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
