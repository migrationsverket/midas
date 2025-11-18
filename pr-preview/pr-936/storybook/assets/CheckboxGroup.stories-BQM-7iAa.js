import{j as e}from"./iframe-DgxKfNbk.js";import{C as m}from"./CheckboxGroup-CFtxLZde.js";import{C as p}from"./Checkbox-2NhLU9Lv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D6hRhKtv.js";import"./utils-BGROS65s.js";import"./clsx-B-dksMZM.js";import"./Text-DSs1Iflc.js";import"./useFocusRing-DnzQSyQo.js";import"./index-DUg-lwjY.js";import"./index-CQL2Unmc.js";import"./clsx-Ciqy0D92.js";import"./Text-snGWGL4K.js";import"./Label-Cv-uyzw-.js";import"./Button-sp0K8pyj.js";import"./Hidden-CS-gbQoN.js";import"./useLabels-DJqk111_.js";import"./useButton-CRwqM10K.js";import"./Dialog-DMCpr_WS.js";import"./RSPContexts-q1M_Avd7.js";import"./OverlayArrow-clitr-Po.js";import"./useResizeObserver-BgxHe9uX.js";import"./useControlledState-BTur9OCD.js";import"./Collection-DPWyI2DS.js";import"./index-kUcNiD44.js";import"./Separator-C77sazgq.js";import"./SelectionManager-qp4ytPh3.js";import"./useEvent-BwDP64Ht.js";import"./scrollIntoView-Bwrqcvii.js";import"./SelectionIndicator-DfItiZPp.js";import"./useDescription-mFuPStZN.js";import"./ListKeyboardDelegate-BCngH911.js";import"./PressResponder-BQtFeaSp.js";import"./useLocalizedStringFormatter-nOCS1ZGV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--B9d3E0m.js";import"./VisuallyHidden-BCoLhgxB.js";import"./useLocalizedStringFormatter-C-Y2NsOw.js";import"./Button-aJbpSB1Q.js";import"./Button.module-CtQ1deO8.js";import"./x-D1MtzSMC.js";import"./createLucideIcon-gMUN6yHh.js";import"./Heading-BI04CBQB.js";import"./info-K4fnEqpv.js";import"./Popover-Bhrr8aa4.js";import"./useFormValidation-JYNwapHx.js";import"./useField-BhszGCTZ.js";import"./Form-0um3YYwp.js";import"./check-Cs9aklgT.js";import"./useToggleState-CLytKHCA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
