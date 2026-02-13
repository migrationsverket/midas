import{j as e}from"./iframe-Dw-35drA.js";import{C as m}from"./CheckboxGroup-C994O0IH.js";import{C as p}from"./Checkbox-BM3oXEFK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DkHYXYvi.js";import"./utils-CUGO82B6.js";import"./clsx-B-dksMZM.js";import"./Text-CJvMRgPB.js";import"./useFocusRing-BNamEjDv.js";import"./index-CtEHNpSJ.js";import"./index-DiZcibWP.js";import"./clsx-Ciqy0D92.js";import"./Text-Cldt2zLV.js";import"./Label-yqUUkFB6.js";import"./Button-CIiKNDDC.js";import"./Hidden-4ZD6Ocwe.js";import"./useLabels-_6TVeuod.js";import"./useButton-CerW7b9z.js";import"./Dialog-UuequgOn.js";import"./RSPContexts-Bt0JulsM.js";import"./OverlayArrow-9nPpxtaF.js";import"./useResizeObserver-VFQYnkDS.js";import"./useControlledState-BE-LxPbE.js";import"./Collection-BMzSXIp9.js";import"./index-BURIGhpV.js";import"./Separator-CnB95t1p.js";import"./SelectionManager-BivSsAi-.js";import"./useEvent-HEqeVpuS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpxEp-F4.js";import"./useDescription-Dg7Q-zU8.js";import"./ListKeyboardDelegate-CKyiT9tV.js";import"./PressResponder-CwoDYZ3J.js";import"./useLocalizedStringFormatter-xmiH9SGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-918zi_0w.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-iwvGgNVy.js";import"./Button-LqRiQ1bb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BExB6Uos.js";import"./createLucideIcon-Ct15IBRs.js";import"./x-ftsEK93m.js";import"./Heading-CRVf-zUZ.js";import"./info-CQH-7uwL.js";import"./Popover-UhxhkL_l.js";import"./useFormValidation-CaQiCpig.js";import"./useField-Dlz_1dv-.js";import"./Form-B5EuP3qf.js";import"./check-CAE0foHk.js";import"./useToggleState-DLiBXZt9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
