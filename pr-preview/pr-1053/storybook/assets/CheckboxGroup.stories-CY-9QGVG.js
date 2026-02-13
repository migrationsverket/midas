import{j as e}from"./iframe-CY7earj9.js";import{C as m}from"./CheckboxGroup-jTFwzkbM.js";import{C as p}from"./Checkbox-BqbQc3ee.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-X9ojGEW-.js";import"./utils-BHj0WwlJ.js";import"./clsx-B-dksMZM.js";import"./Text-DDkXBPqL.js";import"./useFocusRing-D0zrayrq.js";import"./index-BMlkIDuL.js";import"./index-DvjoN402.js";import"./clsx-Ciqy0D92.js";import"./Text-DEbe6_kr.js";import"./Label-3eLgMKE9.js";import"./Button-Cn9gwPsg.js";import"./Hidden-BWeB5vvs.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./Dialog-xHuaqAHU.js";import"./RSPContexts-BRbL19jn.js";import"./OverlayArrow-CUI5wUXW.js";import"./useResizeObserver-uEAd6X7g.js";import"./useControlledState-CGlYRVEE.js";import"./Collection-CNEjLfJN.js";import"./index-Bz5K3veL.js";import"./Separator-Da-_h7DR.js";import"./SelectionManager-HfXsibpp.js";import"./useEvent-BmzvquLD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-HcaYXDj8.js";import"./useDescription-B3ZL4MTY.js";import"./ListKeyboardDelegate-Bo1XGjsK.js";import"./PressResponder-CCUsU2dP.js";import"./useLocalizedStringFormatter-CXnWH6sO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vw1cebNO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYqRYUAd.js";import"./Button-DqjjUYYg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./createLucideIcon-_3e5Batb.js";import"./x-CXFUVrZJ.js";import"./Heading-DTdA7tNF.js";import"./info-Cy3fZjjt.js";import"./Popover-BeD7AD1F.js";import"./useFormValidation-jQfUv7M_.js";import"./useField-B15zj1Pl.js";import"./Form-BY9kSmc9.js";import"./check-CPvnX8tP.js";import"./useToggleState-BwuluaqD.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
