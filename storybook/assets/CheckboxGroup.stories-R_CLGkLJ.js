import{j as e}from"./iframe-BMI9LcwD.js";import{C as m}from"./CheckboxGroup-BpEMf45i.js";import{C as p}from"./Checkbox-CBV--SZm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bn65JKdh.js";import"./utils-CUKuiloA.js";import"./clsx-B-dksMZM.js";import"./Text-IBNi6CET.js";import"./useFocusRing-DwyCmeGr.js";import"./index-fsqC8uXs.js";import"./index-CWh_0PxX.js";import"./clsx-Ciqy0D92.js";import"./Text-Cp8-jRoc.js";import"./Label-Ct42ojgi.js";import"./Button-Czr2XHcN.js";import"./Hidden-DWYxNcIi.js";import"./useLabels-ipZVyWiu.js";import"./useButton-BpdaM1mY.js";import"./Dialog-vljkxQ9V.js";import"./RSPContexts-CxOtl2I6.js";import"./OverlayArrow-Dj2AKU3c.js";import"./useResizeObserver-CQSDfOyj.js";import"./useControlledState-DULbg8rB.js";import"./Collection-C9qQT55G.js";import"./index-DQGXGJO2.js";import"./Separator-GbiomVNC.js";import"./SelectionManager-BW1J4nQm.js";import"./useEvent-Cmtr8QN3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vv5l6iKe.js";import"./useDescription-DUAcqLRU.js";import"./ListKeyboardDelegate-5qCRRvR5.js";import"./PressResponder-DZQXcwaC.js";import"./useLocalizedStringFormatter-BGq9CHdg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AzXRvNI3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqjPFeZK.js";import"./Button-k6WQaZpy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzttMcKh.js";import"./createLucideIcon-BUDo9TFX.js";import"./x-HbCAtCPY.js";import"./Heading-BS2BXfs4.js";import"./info-BFI_YHZ6.js";import"./Popover-CjYy3DoX.js";import"./useFormValidation-DnRBQ596.js";import"./useField-DH6BC-q1.js";import"./Form-Bs26BAsB.js";import"./check-CgLsZ_YW.js";import"./useToggleState-DRb0D5C2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
