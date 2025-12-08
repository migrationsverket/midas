import{j as e}from"./iframe-D0MbCfGX.js";import{C as m}from"./CheckboxGroup-WUe_Ioho.js";import{C as p}from"./Checkbox-CtfTa3AH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CJdCsbD5.js";import"./utils-HqVyPsx5.js";import"./clsx-B-dksMZM.js";import"./Text-C56uKtog.js";import"./useFocusRing-Bu7gL19x.js";import"./index-hynslO7V.js";import"./index-fjtbWm9v.js";import"./clsx-Ciqy0D92.js";import"./Text-lYk5NG0J.js";import"./Label-CuHw4TV7.js";import"./Button-CwpQ0ZRN.js";import"./Hidden-nmq2QyfL.js";import"./useLabels-bAB6zu2C.js";import"./useButton-B-HcF5FI.js";import"./Dialog-CYAJYeJS.js";import"./RSPContexts-BOmcJgyX.js";import"./OverlayArrow-DMXfG1zs.js";import"./useResizeObserver-BOnYzN1g.js";import"./useControlledState-C8xGgj4C.js";import"./Collection-B2JFKRf7.js";import"./index-COoRz86T.js";import"./Separator-DeWXwwSp.js";import"./SelectionManager-CG-4iIi6.js";import"./useEvent-CYGAUgVS.js";import"./scrollIntoView-DUUJwUq8.js";import"./SelectionIndicator-jYD4F_ud.js";import"./useDescription--JIgYdID.js";import"./ListKeyboardDelegate-DAlCqSfA.js";import"./PressResponder-Ct7dIoGM.js";import"./useLocalizedStringFormatter-2hEikx4k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DtAfmDwe.js";import"./VisuallyHidden-CztvSzbh.js";import"./Button-ZcS88E_Q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cp1Qq6jQ.js";import"./createLucideIcon-BVgI_rj9.js";import"./x-R-Hlv3Cg.js";import"./Heading-mbCsYgT7.js";import"./info-Bh6F8wDP.js";import"./Popover-CBKbjwWD.js";import"./useFormValidation-B97Efddu.js";import"./useField-BMJKgdNF.js";import"./Form-C0FtyfmA.js";import"./check-puodcnHv.js";import"./useToggleState-CwLsH3mO.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
