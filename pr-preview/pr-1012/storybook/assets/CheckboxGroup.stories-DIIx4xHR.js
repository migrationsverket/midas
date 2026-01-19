import{j as e}from"./iframe-BEJN6Kxj.js";import{C as m}from"./CheckboxGroup-BG6VTkcW.js";import{C as p}from"./Checkbox-qBMYKazd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DgfjuVzW.js";import"./utils-CrGBDRkS.js";import"./clsx-B-dksMZM.js";import"./Text-DxjUFe6b.js";import"./useFocusRing-eqCY1XUY.js";import"./index-D62Nhkqi.js";import"./index-h8IQGtJP.js";import"./clsx-Ciqy0D92.js";import"./Text-Cz34VrmV.js";import"./Label-Erj7xXAT.js";import"./Button-w6H2Sg3d.js";import"./Hidden-fVuPKruJ.js";import"./useLabels-NwX4Qgl6.js";import"./useButton-9wB6vFCI.js";import"./Dialog-D-TlG1Q7.js";import"./RSPContexts-D9Aj9BI_.js";import"./OverlayArrow-B9GvEsfM.js";import"./useResizeObserver-DGp2E8uC.js";import"./useControlledState-CwdPjKis.js";import"./Collection-C0zL_sAG.js";import"./index-RlhfcIpf.js";import"./Separator-CeN3zVTD.js";import"./SelectionManager-cZjLQm_r.js";import"./useEvent-CrvnL7jH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DVtFm3e-.js";import"./useDescription-tLKe2g5W.js";import"./ListKeyboardDelegate-pfwT5Ajx.js";import"./PressResponder-Bj_4ulTg.js";import"./useLocalizedStringFormatter-fztwDLIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUyzyJca.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-du_qoG-V.js";import"./Button-CStAPZI-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DmUmyjCk.js";import"./createLucideIcon-DlFkL0lK.js";import"./x-VDRCJe-m.js";import"./Heading-B4IUzRMR.js";import"./info-CFsdIS2T.js";import"./Popover-CwJFC2rT.js";import"./useFormValidation-CzpRDG9-.js";import"./useField-DuaCTKKw.js";import"./Form-DfyEbNXE.js";import"./check-B8Bqt9So.js";import"./useToggleState-7dfebPpM.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
