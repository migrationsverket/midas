import{j as e}from"./iframe-kbhJnT9w.js";import{C as m}from"./CheckboxGroup-r6RCIsjZ.js";import{C as p}from"./Checkbox-CtUYA1Ig.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BjDoFXdk.js";import"./utils-BIWQukqa.js";import"./clsx-B-dksMZM.js";import"./Text-Bx3yC9L1.js";import"./useFocusRing-D8-czbxO.js";import"./index-zuYBL4Lo.js";import"./index-7Y8nIPcc.js";import"./clsx-Ciqy0D92.js";import"./Text-DNo-c8E4.js";import"./Label-yLv35Oa7.js";import"./Button-CJhwVjkq.js";import"./Hidden-DLSrH6le.js";import"./useLabels-C4BeTwXz.js";import"./useButton-DnRhcX8P.js";import"./Dialog-DCPwMQF2.js";import"./RSPContexts-CpYiUO21.js";import"./OverlayArrow-DWlWKxC4.js";import"./useResizeObserver-Dti6xn4y.js";import"./useControlledState-BmDsoGZM.js";import"./Collection-CMsKZrzA.js";import"./index-DnSiiI5S.js";import"./Separator-DTiKf-In.js";import"./SelectionManager-BZPl8iel.js";import"./useEvent-B_EArHEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BO1jws8h.js";import"./useDescription-DS99e2CE.js";import"./ListKeyboardDelegate-CYV2I6jz.js";import"./PressResponder-D7_J9MXE.js";import"./useLocalizedStringFormatter-DnDmMNZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSHBvtn7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BElvd5Sz.js";import"./Button-2yQDInF3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DENJ27Hf.js";import"./createLucideIcon-MdX6GIq3.js";import"./x-Db3eMiaL.js";import"./Heading-oKhQjAka.js";import"./info-ImPqQnBe.js";import"./Popover-_o8rL1se.js";import"./useFormValidation-B19BTBT3.js";import"./useField-DWW2mLhZ.js";import"./Form-Sz63W5mX.js";import"./check-DHJXkBAK.js";import"./useToggleState-dPELXYDN.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
