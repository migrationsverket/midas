import{j as e}from"./iframe-CCQoa_za.js";import{C as c}from"./CheckboxGroup-Bzqod1OQ.js";import{C as p}from"./Checkbox-3GIr4X6A.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CpKUhFOP.js";import"./utils-BdXRUyql.js";import"./clsx-B-dksMZM.js";import"./Text-YX2OQKIh.js";import"./useFocusRing-BCtmiU0K.js";import"./index-B-zUS5Y_.js";import"./index-v9D4YVUO.js";import"./clsx-Ciqy0D92.js";import"./Text-CqLZ0QeB.js";import"./Label-oSwHdS4B.js";import"./Button-BrsQgG2O.js";import"./Hidden-DcjYmRqi.js";import"./useLabels-B6SFlZG6.js";import"./useButton-CrmhM509.js";import"./Dialog-CPfRBNp_.js";import"./RSPContexts-7vhnChNh.js";import"./Button-C_b8qgGp.js";import"./Button.module-CPCFE9o0.js";import"./useControlledState-CDPjHx4z.js";import"./useLocalizedStringFormatter-C-e4eVhQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-Q-uPorfw.js";import"./VisuallyHidden-B--Ked72.js";import"./Collection-QWDkhOmC.js";import"./index-CO5TAJRV.js";import"./Separator-Q7_RWth6.js";import"./SelectionManager-VGqUM2UO.js";import"./useEvent-CScpbFfp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DxjscOJj.js";import"./useDescription-DTFIEJBZ.js";import"./ListKeyboardDelegate-wa-GcMJZ.js";import"./PressResponder-CcoQZDOV.js";import"./useLocalizedStringFormatter-DGLdWeqa.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CDIA4O5d.js";import"./Heading-e8mJhic5.js";import"./info-CahQ617a.js";import"./Popover-CbyNasAR.js";import"./useFormValidation-Cbtdnqjx.js";import"./useField-DmXFFhmO.js";import"./Form-CtASfJWn.js";import"./check-DZuVoXix.js";import"./useToggleState-BKXVYURV.js";const tr={title:"Components/Checkbox/CheckboxGroup",component:c,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(c,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},n={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},i={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...i.parameters?.docs?.source}}};const sr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,i as Invalid,o as Primary,n as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,sr as __namedExportsOrder,tr as default};
