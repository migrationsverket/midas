import{j as e}from"./iframe-BLeM1TYl.js";import{C as m}from"./CheckboxGroup-1uIWeKi0.js";import{C as p}from"./Checkbox-DVUqUQVk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DlB1o_kR.js";import"./utils-D0fgVb1b.js";import"./clsx-B-dksMZM.js";import"./Text-B1gNnLul.js";import"./useFocusRing-4Dtk05IT.js";import"./index-BTEhrLut.js";import"./index-C_6FlPHF.js";import"./clsx-Ciqy0D92.js";import"./Text-1bQSpdKb.js";import"./Label-BDUB9aP2.js";import"./Button-CYodFdJJ.js";import"./Hidden--RnSCsvw.js";import"./useLabels-C72m2YsE.js";import"./useButton-Byh70Qyk.js";import"./Dialog-CsJbLhRC.js";import"./RSPContexts-B2_ECXZ0.js";import"./OverlayArrow-CxUVIxo5.js";import"./useResizeObserver-ByfwIZYt.js";import"./useControlledState-BU1bA4yz.js";import"./Collection-KmHW79mB.js";import"./index-DgumobkK.js";import"./Separator-C-ipMX97.js";import"./SelectionManager-DwZQilnE.js";import"./useEvent-MaLdhesQ.js";import"./scrollIntoView-l5DGKArg.js";import"./SelectionIndicator-Z6j-XujM.js";import"./useDescription-Crxne3OE.js";import"./ListKeyboardDelegate-C442bTnp.js";import"./PressResponder-ed23W6CK.js";import"./useLocalizedStringFormatter-DnHnQahm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-sfU_okZo.js";import"./VisuallyHidden-B6vc2diR.js";import"./useLocalizedStringFormatter-D5OW06nN.js";import"./Button-Cpp3gRTf.js";import"./Button.module-CtQ1deO8.js";import"./x-Df5oesPo.js";import"./createLucideIcon-CcGBU6Ho.js";import"./Heading-B-qyvk2C.js";import"./info-C2Cg8Glk.js";import"./Popover-Cf4EhHnc.js";import"./useFormValidation-yTCjfPRY.js";import"./useField-BkEz_tre.js";import"./Form-CA6PbtqL.js";import"./check-CpvLHgc3.js";import"./useToggleState-DHpL5WFF.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
