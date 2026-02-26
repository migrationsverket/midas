import{j as e}from"./iframe-ClhcDk6-.js";import{C as m}from"./CheckboxGroup-C3UW55gr.js";import{C as n}from"./Checkbox-Bc9zWhjE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-tXlATWOG.js";import"./utils-DkVwfCPY.js";import"./useObjectRef-LpWD1ACK.js";import"./clsx-B-dksMZM.js";import"./Text-CCnFhlAG.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./clsx-Ciqy0D92.js";import"./Text-EzA_ilFd.js";import"./Label-LYBhceLb.js";import"./Button-BSlJ97mj.js";import"./Hidden-B4bEnCsb.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./Dialog-CdWec6Ze.js";import"./RSPContexts-BA8Udrsv.js";import"./OverlayArrow-DSLc6eNv.js";import"./useResizeObserver-CICXzZtJ.js";import"./useControlledState-DRXmCCw_.js";import"./Collection--ZMTHkZa.js";import"./CollectionBuilder-CAo2ledx.js";import"./index-6lcNpfds.js";import"./Separator-CHFBhSKr.js";import"./SelectionManager-C04g7PAk.js";import"./useEvent-C5dcsaza.js";import"./scrollIntoView-D07VY2Nc.js";import"./SelectionIndicator-1HtvkFRD.js";import"./useDescription-By0r32b_.js";import"./ListKeyboardDelegate-Cc2KEOw7.js";import"./PressResponder-Btj3QZmG.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjYQIpYR.js";import"./getScrollParent-FapgZLQg.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./createLucideIcon-DOkxF0Fr.js";import"./x-B2X0pLHA.js";import"./Heading-DUgnXrAX.js";import"./info-DOAR22B2.js";import"./Popover-8e-hmpHh.js";import"./useFormValidation-B19vM6x-.js";import"./useField-CkQZEAr3.js";import"./Form-BINvuMk6.js";import"./check-CQg29no-.js";import"./useToggleState-DC61IpXt.js";const cr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(n,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},p={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...p.parameters?.docs?.source}}};const lr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,p as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,lr as __namedExportsOrder,cr as default};
