import{j as e}from"./iframe-CTgOJ9Ps.js";import{C as m}from"./CheckboxGroup-B7hjtcdS.js";import{C as p}from"./Checkbox-FHLk-K4f.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-bycMJmoo.js";import"./utils-DVlNRVKr.js";import"./clsx-B-dksMZM.js";import"./Text-DcY7rHII.js";import"./useFocusRing-X2jAZYAF.js";import"./index-CCWPqzcV.js";import"./index-BoZlgUKT.js";import"./clsx-Ciqy0D92.js";import"./Text-KKNDIRRs.js";import"./Label-SFdtHiVk.js";import"./Button-C-UPDMJV.js";import"./Hidden-BgNUkzG2.js";import"./useLabels-A9HpFVJQ.js";import"./useButton-BHqm994R.js";import"./Dialog-CnYvrznf.js";import"./RSPContexts-CtkEES1X.js";import"./OverlayArrow-XRtviRHN.js";import"./useResizeObserver-CKWpUOey.js";import"./useControlledState-CFnILQr1.js";import"./Collection-A3cpZHrD.js";import"./index-DBJN-XyW.js";import"./Separator-BzZFj4xO.js";import"./SelectionManager-B9-wcfHY.js";import"./useEvent-DdPK42_P.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-cPAL-U0V.js";import"./useDescription-BAzN6H68.js";import"./ListKeyboardDelegate-CsMq0NaM.js";import"./PressResponder-CrP1xJZp.js";import"./useLocalizedStringFormatter-DYKfyeFk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3D8S1FJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMWuysUy.js";import"./Button-BrzX4JOs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-uMvmKC8y.js";import"./createLucideIcon-8WvXNeel.js";import"./x-B0Sr41AG.js";import"./Heading-ClW6Bag1.js";import"./info-CXxa3eYD.js";import"./Popover-BRuKbxpJ.js";import"./useFormValidation-BvD8rtkG.js";import"./useField-Dnh_8hCp.js";import"./Form-CpKuv4-A.js";import"./check-W4BsXkTO.js";import"./useToggleState-Cwl5JS5_.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
