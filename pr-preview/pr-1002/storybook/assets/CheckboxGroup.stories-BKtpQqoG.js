import{j as e}from"./iframe-Fz1EdHuH.js";import{C as m}from"./CheckboxGroup-CNWnGfl1.js";import{C as p}from"./Checkbox-BQVB23AH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CiywgrQY.js";import"./utils-CIhB6G_D.js";import"./clsx-B-dksMZM.js";import"./Text-DNv-3svf.js";import"./useFocusRing-qf5ZtGZP.js";import"./index-CW1yTPdq.js";import"./index-BLs35tAN.js";import"./clsx-Ciqy0D92.js";import"./Text-DoqQ8nHE.js";import"./Label-BLPApvMM.js";import"./Button-CBPVsTrf.js";import"./Hidden-BTN0SI0L.js";import"./useLabels-BFFI0pNC.js";import"./useButton-DwegKwQx.js";import"./Dialog-Bniec-JW.js";import"./RSPContexts-CKI4o4tn.js";import"./OverlayArrow-Cd49lTDT.js";import"./useResizeObserver-tZr12xgv.js";import"./useControlledState-B4oYVFVf.js";import"./Collection-DtJ07xnh.js";import"./index-Ci-3Zxjc.js";import"./Separator-CKb9OlXL.js";import"./SelectionManager-BxFEfcB2.js";import"./useEvent-Bi8gGKcE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C9vJGSx6.js";import"./useDescription-BZIgoWp4.js";import"./ListKeyboardDelegate-ohLvDDFs.js";import"./PressResponder-DwgcgRG9.js";import"./useLocalizedStringFormatter-D7aFKFSJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cxt8Tbzx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DdITmKv1.js";import"./Button-DNGuSXTP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Biv9Lv2v.js";import"./createLucideIcon-B2CroOQB.js";import"./x-IpFqXPiI.js";import"./Heading-Qs14-auE.js";import"./info-CvxmEuPG.js";import"./Popover-Cblh_Hp5.js";import"./useFormValidation-DqKDU8Wz.js";import"./useField-Ox07Q8eM.js";import"./Form-DCeu2YwW.js";import"./check-n_dnlUzH.js";import"./useToggleState-D33KvwAx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
