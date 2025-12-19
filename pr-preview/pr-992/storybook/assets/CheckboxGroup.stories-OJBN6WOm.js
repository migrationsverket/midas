import{j as e}from"./iframe-G3ZMXUbN.js";import{C as m}from"./CheckboxGroup-CJIwsxoo.js";import{C as p}from"./Checkbox-Ce2qDOKO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-K0XJdCDc.js";import"./utils-DFB_SXUX.js";import"./clsx-B-dksMZM.js";import"./Text-Bvk57S6I.js";import"./useFocusRing-BUAgLOHD.js";import"./index-kfXkLWYF.js";import"./index-DrPSsjqf.js";import"./clsx-Ciqy0D92.js";import"./Text-qybX5iVt.js";import"./Label-CSVndYoI.js";import"./Button-Ct_0JeFf.js";import"./Hidden-D7jA6uYz.js";import"./useLabels-hHOhF52P.js";import"./useButton-AYkaTZcr.js";import"./Dialog-CvI9S6Vz.js";import"./RSPContexts-CbhQAsPk.js";import"./OverlayArrow-BiaUYBlO.js";import"./useResizeObserver-DexOpa7g.js";import"./useControlledState-B9ob4JlY.js";import"./Collection-D_BhA8gv.js";import"./index-Bwpu-aH5.js";import"./Separator-B-Cqjto3.js";import"./SelectionManager-DDm1Wu4J.js";import"./useEvent-Bln1mdOX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CdmqZttz.js";import"./useDescription-BffvZdmv.js";import"./ListKeyboardDelegate-DvqXyFP-.js";import"./PressResponder-VGi0cy_X.js";import"./useLocalizedStringFormatter-B6J4wIaa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nkWZhE58.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWt0hBMZ.js";import"./Button-COqnMPPE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bbymx7uq.js";import"./createLucideIcon-CsEYjiU2.js";import"./x-fjpAhXI4.js";import"./Heading-CFceKUuG.js";import"./info-DqSz0vTc.js";import"./Popover-CcEIWFVY.js";import"./useFormValidation-C6tr5084.js";import"./useField-CetEkJiZ.js";import"./Form-Cu9oL8f1.js";import"./check-ChwTWudO.js";import"./useToggleState-DeYUJ6BZ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
