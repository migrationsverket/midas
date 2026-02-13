import{j as e}from"./iframe-BVjJh1qr.js";import{C as m}from"./CheckboxGroup-Df-JSlhy.js";import{C as p}from"./Checkbox-CnJzUPvu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C9WHVD5C.js";import"./utils-bNy6ojY5.js";import"./clsx-B-dksMZM.js";import"./Text-CsfvyS0Z.js";import"./useFocusRing-TW7q1EUd.js";import"./index-DIEHB-cs.js";import"./index-CNkeeaIr.js";import"./clsx-Ciqy0D92.js";import"./Text-BB8xB_KG.js";import"./Label-DsHjDKtP.js";import"./Button-BMjFxLp_.js";import"./Hidden-Cb128-qJ.js";import"./useLabels-Dp0cw4u-.js";import"./useButton-r4UQO9dh.js";import"./Dialog-jgVbqZar.js";import"./RSPContexts-4cSt6u6S.js";import"./OverlayArrow-DDPjK939.js";import"./useResizeObserver-DJVRBe_U.js";import"./useControlledState-C9LVXWZ-.js";import"./Collection-JqSksE_3.js";import"./index-CVyQMNda.js";import"./Separator-BL73eY4j.js";import"./SelectionManager-BZ3YveyL.js";import"./useEvent-CcPYrnrS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLchoed_.js";import"./useDescription-MeYAog7E.js";import"./ListKeyboardDelegate-cQjqjVFs.js";import"./PressResponder-DVLw-9bA.js";import"./useLocalizedStringFormatter-D4nGqZ_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7YH2_nR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-q2CDSj.js";import"./Button-Dg78q2ju.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9aLA_6i.js";import"./createLucideIcon-DI0VgPwY.js";import"./x-CeH2XBCE.js";import"./Heading-6W50OjJi.js";import"./info-CFGW5YBP.js";import"./Popover-BAo9ORLy.js";import"./useFormValidation-SFdJ2boW.js";import"./useField-DNr4bZjA.js";import"./Form-BTuogIHL.js";import"./check-CGQNQWQS.js";import"./useToggleState-Cq6kFsTE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
