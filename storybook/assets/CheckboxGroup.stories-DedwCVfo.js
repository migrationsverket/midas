import{j as e}from"./iframe-DZlNJ8S4.js";import{C as m}from"./CheckboxGroup-CFUtuzdr.js";import{C as p}from"./Checkbox-Bkj1_FuY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Slpr0HzK.js";import"./utils-B9k6LEuL.js";import"./clsx-B-dksMZM.js";import"./Text-D4o9xbR1.js";import"./useFocusRing-Be4o6Un8.js";import"./index-DC3wIA-C.js";import"./index-DR5hiXYB.js";import"./clsx-Ciqy0D92.js";import"./Text-CdVje7KY.js";import"./Label-B5X5fIw4.js";import"./Button-DZzK2L52.js";import"./Hidden-C6Hj6bpW.js";import"./useLabels-f8gjmpAz.js";import"./useButton-Zpg8HNK7.js";import"./Dialog-CuElgxjX.js";import"./RSPContexts-Ct6xn_7s.js";import"./OverlayArrow-ymAXnaqq.js";import"./useResizeObserver-Lx-RW7M4.js";import"./useControlledState-CQnmbS5S.js";import"./Collection-CmQUFjR9.js";import"./index-BmZvxrs_.js";import"./Separator-_p1JhXcX.js";import"./SelectionManager-CYH7FyPU.js";import"./useEvent-DdCye5gc.js";import"./scrollIntoView-qmizfuqo.js";import"./SelectionIndicator-aDV9sGHg.js";import"./useDescription-cDUSzPki.js";import"./ListKeyboardDelegate-DEaZYZM5.js";import"./PressResponder-C78eOqbT.js";import"./useLocalizedStringFormatter-DCAuiTpO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bdfnz0Kn.js";import"./VisuallyHidden-6-uiIxz8.js";import"./useLocalizedStringFormatter-WQhR5XKG.js";import"./Button-CXMyUl9m.js";import"./Button.module-CtQ1deO8.js";import"./x-Cu3No43V.js";import"./createLucideIcon-CyJv2oB_.js";import"./Heading-Bey1w6G0.js";import"./info-DKVT7bMN.js";import"./Popover-Cp8im4X8.js";import"./useFormValidation-DA7hKUI3.js";import"./useField-BUkOR3W7.js";import"./Form-QFInxnNp.js";import"./check-BKeXx6C2.js";import"./useToggleState-CKIWyCc_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
