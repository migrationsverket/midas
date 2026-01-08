import{j as e}from"./iframe-Cqv18ImU.js";import{C as m}from"./CheckboxGroup-BGz986mH.js";import{C as p}from"./Checkbox-C3AAX_dW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cwk39N_k.js";import"./utils-DzbyOGZ_.js";import"./clsx-B-dksMZM.js";import"./Text-B830MCwt.js";import"./useFocusRing-V1CF2lyh.js";import"./index-BZmzkW00.js";import"./index-Nt-ezTyj.js";import"./clsx-Ciqy0D92.js";import"./Text-DteYonWN.js";import"./Label-CLvgkq8P.js";import"./Button-CHZfUzDl.js";import"./Hidden-D8Gg8WaH.js";import"./useLabels-CNsjRHPU.js";import"./useButton-DDIuuTKh.js";import"./Dialog-K8ntk6sz.js";import"./RSPContexts-DOgGE-X8.js";import"./OverlayArrow-PEhFhM_P.js";import"./useResizeObserver-BIpoNcBC.js";import"./useControlledState-DY68Wkyd.js";import"./Collection-BmY9KKYW.js";import"./index-BZiaFPS2.js";import"./Separator-BOvZJ_dj.js";import"./SelectionManager-BeEB6CA7.js";import"./useEvent-DxBQLibX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFon-F_M.js";import"./useDescription-BGQ7yS04.js";import"./ListKeyboardDelegate-C8of9doW.js";import"./PressResponder-BFkxg2fB.js";import"./useLocalizedStringFormatter-7YQVF9yJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C3hBAu6W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRuyO-og.js";import"./Button-DCnMOEqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAA2MslF.js";import"./createLucideIcon-Dvn_rsFU.js";import"./x-DoaJGzfS.js";import"./Heading-B-3IvVIv.js";import"./info-0yIu5wJK.js";import"./Popover-C8uroeFt.js";import"./useFormValidation-DZCoeM0o.js";import"./useField-DcjSv-D1.js";import"./Form-D8a6I2TO.js";import"./check-D3PrX-he.js";import"./useToggleState-k7QcTJn8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
