import{j as e}from"./iframe-DkfvDrVS.js";import{C as m}from"./CheckboxGroup-C6mnKjx0.js";import{C as p}from"./Checkbox-DUPzz5xk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BIMD40Se.js";import"./utils-DzbRiR6M.js";import"./clsx-B-dksMZM.js";import"./Text-CsHYCFhe.js";import"./useFocusRing-BM6vq-KP.js";import"./index-DRhH9nnC.js";import"./index-BZFBT-3J.js";import"./clsx-Ciqy0D92.js";import"./Text-DCB-quyL.js";import"./Label-BlNJSWzx.js";import"./Button-BEd_-gNz.js";import"./Hidden-BZCdAkKc.js";import"./useLabels-DflfoN4r.js";import"./useButton-DkycpXBB.js";import"./Dialog-CuGwoNNM.js";import"./RSPContexts-UtRAkjgF.js";import"./OverlayArrow-BL7ZAVq8.js";import"./useResizeObserver-Cd03Fj5v.js";import"./useControlledState-BCW3Vp6F.js";import"./Collection-D__y08wk.js";import"./index-BwhA17A0.js";import"./Separator-DOw5hx_I.js";import"./SelectionManager-INI6Juvw.js";import"./useEvent-Crzj0sZq.js";import"./scrollIntoView-DkrJ5nKE.js";import"./SelectionIndicator-BT83fwQ4.js";import"./useDescription-tC6WY3QA.js";import"./ListKeyboardDelegate-BSUHa7V5.js";import"./PressResponder-CMHjltVA.js";import"./useLocalizedStringFormatter-CJdbxQ-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CrQPhNEJ.js";import"./VisuallyHidden-M3WPnoP3.js";import"./useLocalizedStringFormatter-CzTybd1w.js";import"./Button-B_yGy9B1.js";import"./Button.module-CtQ1deO8.js";import"./x-DUTAFXft.js";import"./createLucideIcon-caan2w-a.js";import"./Heading-DSaLSNhs.js";import"./info-BcjPOAIS.js";import"./Popover-SWEnd30T.js";import"./useFormValidation-DK-IWL2L.js";import"./useField-MaUdsQMW.js";import"./Form-CdjrCtpL.js";import"./check-CN-mb85v.js";import"./useToggleState-mviiBPVb.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
