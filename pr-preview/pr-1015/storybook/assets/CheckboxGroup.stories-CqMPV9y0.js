import{j as e}from"./iframe-D-2Z30c8.js";import{C as m}from"./CheckboxGroup-R5qQO1ns.js";import{C as p}from"./Checkbox-CjAn5p4a.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CSFHdZGJ.js";import"./utils-DNydHYc7.js";import"./clsx-B-dksMZM.js";import"./Text-CDWb81vy.js";import"./useFocusRing-DHbfBmoZ.js";import"./index-CXlyEFlC.js";import"./index-y-LtlDB7.js";import"./clsx-Ciqy0D92.js";import"./Text-CwJkDPGR.js";import"./Label-Dxb6-MDz.js";import"./Button-B7aUUd8D.js";import"./Hidden-CvH6QNsS.js";import"./useLabels-BRLzE6Cb.js";import"./useButton-E9BEr0uy.js";import"./Dialog-BsWMUXlA.js";import"./RSPContexts-DqxaNqYF.js";import"./OverlayArrow-B9kOCwsL.js";import"./useResizeObserver-DmGq7PFA.js";import"./useControlledState-DQ7Q1QxO.js";import"./Collection-BUKZd-PH.js";import"./index-B-bagfVX.js";import"./Separator-DJ-qjVA6.js";import"./SelectionManager-CCPHjx2I.js";import"./useEvent-D8Y6SyA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D08Kxu1u.js";import"./useDescription-D38Fa9LD.js";import"./ListKeyboardDelegate-enAcSWZ-.js";import"./PressResponder-CT_KiDtX.js";import"./useLocalizedStringFormatter-BGPhrwPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CR4yh9oB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-G01riaNf.js";import"./Button-Do142c3E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgZG97CC.js";import"./createLucideIcon-DQV7tCjS.js";import"./x-DCcFjLN0.js";import"./Heading-a8hrmiZA.js";import"./info-DWsvjYHH.js";import"./Popover-19PiCP30.js";import"./useFormValidation-g9InWXfo.js";import"./useField-Cm8tVB4V.js";import"./Form-GyyhpmPV.js";import"./check-C49go5tp.js";import"./useToggleState-CC8rd5MX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
