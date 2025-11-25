import{j as e}from"./iframe-DJf9qtT-.js";import{C as m}from"./CheckboxGroup-PLF6gjQa.js";import{C as p}from"./Checkbox-BWW9gNm7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-i8n9jDus.js";import"./utils-DujThyaS.js";import"./clsx-B-dksMZM.js";import"./Text-7XMqKPUk.js";import"./useFocusRing-cUFpuTzX.js";import"./index-CdmLneX8.js";import"./index-CzbSK9MD.js";import"./clsx-Ciqy0D92.js";import"./Text-Dg4iii4L.js";import"./Label-BcOaLSW7.js";import"./Button-G1a6TVgJ.js";import"./Hidden-B_CnBhbh.js";import"./useLabels-Dx1HV4TR.js";import"./useButton-BqsG7Jfp.js";import"./Dialog-L1E3LbDx.js";import"./RSPContexts-B9pDNvDd.js";import"./OverlayArrow-CTfRHOoq.js";import"./useResizeObserver-B20cOGqQ.js";import"./useControlledState-B-NTHKxE.js";import"./Collection-Do-oljpW.js";import"./index-oI6_T9eU.js";import"./Separator-BOGx3q-7.js";import"./SelectionManager-DkHQjBru.js";import"./useEvent-ICf_3wb7.js";import"./scrollIntoView-BG9C9OhB.js";import"./SelectionIndicator-Bgw3dbZo.js";import"./useDescription-DdM7u0og.js";import"./ListKeyboardDelegate-Dn4wo-QZ.js";import"./PressResponder-DVk-cOlO.js";import"./useLocalizedStringFormatter-BJ_uyhGA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B6VaaqX8.js";import"./VisuallyHidden-D1WFPk8a.js";import"./Button-CSrKSu2N.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CYTevErc.js";import"./createLucideIcon-Cd2h-j1E.js";import"./x-KEcraww_.js";import"./Heading-DRe6gMjs.js";import"./info-Dh3Xpjpv.js";import"./Popover-ejKtx1kH.js";import"./useFormValidation-Be4z3D39.js";import"./useField-DKo_MAwi.js";import"./Form-DYgj15IJ.js";import"./check-wfRFQC_B.js";import"./useToggleState-CbPhVy7m.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
