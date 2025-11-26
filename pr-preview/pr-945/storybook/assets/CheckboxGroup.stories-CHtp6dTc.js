import{j as e}from"./iframe-IjzrHHNv.js";import{C as m}from"./CheckboxGroup-CeU3OZP1.js";import{C as p}from"./Checkbox-BihlFGSe.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-cOUBxcF_.js";import"./utils-CODsTHLU.js";import"./clsx-B-dksMZM.js";import"./Text-Du-4Iq6e.js";import"./useFocusRing-BZeMGEJ-.js";import"./index-D4Wmkx7i.js";import"./index-Bx7zkVbj.js";import"./clsx-Ciqy0D92.js";import"./Text-CYvKHqQ5.js";import"./Label-6OAJxp8z.js";import"./Button-C3uIaOSh.js";import"./Hidden-3HVx6IyU.js";import"./useLabels-BF_CgXn-.js";import"./useButton-BpNajOCa.js";import"./Dialog-BQDQIEAJ.js";import"./RSPContexts-Cog8PMMM.js";import"./OverlayArrow-BXELcGm0.js";import"./useResizeObserver-D9h0KmrS.js";import"./useControlledState-CNtbpmwP.js";import"./Collection-CNd-wEyr.js";import"./index-9SXr6gbX.js";import"./Separator-Czubewxg.js";import"./SelectionManager-D96o_RyB.js";import"./useEvent-Bi0O_rqd.js";import"./scrollIntoView-CpCWy20X.js";import"./SelectionIndicator-BLsNQ6Cy.js";import"./useDescription-C4YZ4ECy.js";import"./ListKeyboardDelegate-CPYpxplA.js";import"./PressResponder-4CKAgpgq.js";import"./useLocalizedStringFormatter-CXKVQPJR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BV9iHv67.js";import"./VisuallyHidden-QGHASBvs.js";import"./Button-sMqW8jOV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Zy7JvKDD.js";import"./createLucideIcon-ILFWgvoA.js";import"./x-eAOmc7wb.js";import"./Heading-D-GWoLjA.js";import"./info-DQ4Y6xi8.js";import"./Popover-B9QS2LME.js";import"./useFormValidation-Dcu2uaUl.js";import"./useField-Dlw4FN-O.js";import"./Form-BKcNnSFI.js";import"./check-CjmoquIn.js";import"./useToggleState-BF9NPzYX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
