import{j as e}from"./iframe-y_ZEGYiJ.js";import{C as m}from"./CheckboxGroup-DuZG8vSI.js";import{C as p}from"./Checkbox-Dez795cI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DVm8G2oT.js";import"./utils-8dWn79IV.js";import"./clsx-B-dksMZM.js";import"./Text-D9z2hAIA.js";import"./useFocusRing-CZ7WfYYW.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./clsx-Ciqy0D92.js";import"./Text-B7AL5jZC.js";import"./Label-DJW1w4yM.js";import"./Button-Ch-G3kN7.js";import"./Hidden-Cu8enaQS.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./Dialog-DfaH0eb0.js";import"./RSPContexts-DqgeagmW.js";import"./OverlayArrow-C1Lkycnn.js";import"./useResizeObserver-hDrQIYv6.js";import"./useControlledState-DHT9vmuC.js";import"./Collection-CENpgFH3.js";import"./index-5hSl8Kfz.js";import"./Separator-D2MQAmoC.js";import"./SelectionManager-CF_UqROg.js";import"./useEvent-Cdh_4pNz.js";import"./scrollIntoView-Dr9gm-NQ.js";import"./SelectionIndicator-PYyRf_UG.js";import"./useDescription-ZoeRT3XG.js";import"./ListKeyboardDelegate-ClH-0lmn.js";import"./PressResponder-UtVSXywR.js";import"./useLocalizedStringFormatter-lMWk04dJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1--TJfl.js";import"./getScrollParent-vEn_skDo.js";import"./VisuallyHidden-CIMmvdq0.js";import"./ModalOverlay-k11Y76w7.js";import"./x-DyC_Bfvk.js";import"./createLucideIcon-BSy6nR5q.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./Heading-Dkuwhauc.js";import"./Button-DfIwZ4Yr.js";import"./Button.module-BB7N-cLd.js";import"./info-ClUzQw9G.js";import"./Popover-BETNwm5N.js";import"./Form-jkhfJmW6.js";import"./useField-hpR3LKjK.js";import"./check-Bn2Dvw2K.js";import"./useToggleState-CbdS7hfR.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
