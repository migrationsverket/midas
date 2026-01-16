import{j as e}from"./iframe-Be1aZvSB.js";import{C as m}from"./CheckboxGroup-BP7focMA.js";import{C as p}from"./Checkbox-Cc23CSJd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CKZ818d7.js";import"./utils-Dr5lOQEm.js";import"./clsx-B-dksMZM.js";import"./Text-77WNyGJQ.js";import"./useFocusRing-4gVfCrlN.js";import"./index-DiNIKx-9.js";import"./index-3_mfRz-m.js";import"./clsx-Ciqy0D92.js";import"./Text-8SUBmIhI.js";import"./Label-BQ4BUlPv.js";import"./Button-JlG5wiA2.js";import"./Hidden-BG3DEavw.js";import"./useLabels-BWJsgRkM.js";import"./useButton-5FzE-eGH.js";import"./Dialog-C7DsTJEp.js";import"./RSPContexts-BEvd3q6R.js";import"./OverlayArrow-DGvPVYtQ.js";import"./useResizeObserver-COv9as7A.js";import"./useControlledState-CJEhEPO4.js";import"./Collection-CvBji9UX.js";import"./index-BVWxmaTk.js";import"./Separator-DLtRXX2_.js";import"./SelectionManager-CPAVRRU0.js";import"./useEvent-Bgy8ySsQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5SWsty4.js";import"./useDescription-qD4_R6It.js";import"./ListKeyboardDelegate-B-k0R0KY.js";import"./PressResponder-C_Qddwx9.js";import"./useLocalizedStringFormatter-DVu_V5sq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C09V82bP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQWkGC77.js";import"./Button-KQ3agptm.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3flDKgk.js";import"./createLucideIcon-oLtop38V.js";import"./x-CBDdEqTf.js";import"./Heading-CRZEmuj5.js";import"./info-CTOSBXOP.js";import"./Popover-B_cM8naD.js";import"./useFormValidation-upWxOlB9.js";import"./useField-BoBuldh2.js";import"./Form-Ae3SlhGj.js";import"./check-DciG639L.js";import"./useToggleState-BMx-5gNk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
