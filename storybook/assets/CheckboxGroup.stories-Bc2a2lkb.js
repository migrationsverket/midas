import{j as e}from"./iframe-CqGw52kl.js";import{C as m}from"./CheckboxGroup-BGuxpIhj.js";import{C as p}from"./Checkbox-BrrTN9w1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CjHIzoMC.js";import"./utils-DNYE9rrP.js";import"./clsx-B-dksMZM.js";import"./Text-CHXVqnQT.js";import"./useFocusRing-GvsYGsAP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./clsx-Ciqy0D92.js";import"./Text-D3EOjJ0B.js";import"./Label-cFzpbQL9.js";import"./Button-BG-x6i-t.js";import"./Hidden-duzZCIPn.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./Dialog-3-VZN3M4.js";import"./RSPContexts-CivMWx79.js";import"./OverlayArrow-CisMBNJ_.js";import"./useResizeObserver-D828MuGa.js";import"./useControlledState-CGYQyUPv.js";import"./Collection-D3dy6mEh.js";import"./index-DTn8N8sc.js";import"./Separator-CnTEdMMk.js";import"./SelectionManager-Cw5-ky3E.js";import"./useEvent-7xwxZlQ2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3fnkg3j.js";import"./useDescription-B6vY1f8v.js";import"./ListKeyboardDelegate-y9oHfD-i.js";import"./PressResponder-BXUkqiri.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCLu3UE2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BSHZJK5y.js";import"./Button-ABAzSfOF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";import"./createLucideIcon-CoMafoM3.js";import"./x-DtV2puKB.js";import"./Heading-C42QIcPI.js";import"./info-D-FaGrFm.js";import"./Popover-DpNHjmRR.js";import"./useFormValidation-UdokVwww.js";import"./useField-DmoBeN0F.js";import"./Form-pNh1499V.js";import"./check-Bsa2uA7D.js";import"./useToggleState-DoxRLc9r.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
