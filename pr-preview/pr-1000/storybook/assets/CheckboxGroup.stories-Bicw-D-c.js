import{j as e}from"./iframe-BQrtIPmh.js";import{C as m}from"./CheckboxGroup-6P8x8Zw1.js";import{C as p}from"./Checkbox-2Y6DEBaR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DxXo_lqN.js";import"./utils-BS6sXZRH.js";import"./clsx-B-dksMZM.js";import"./Text-COf1Fc6Q.js";import"./useFocusRing-y2IKkZpt.js";import"./index-YT1oLI7a.js";import"./index-4QHcSQc6.js";import"./clsx-Ciqy0D92.js";import"./Text-Ar7CbXL2.js";import"./Label-DA8sjx-i.js";import"./Button-CwSqfpei.js";import"./Hidden-ChFGCUwp.js";import"./useLabels-B8OZel6J.js";import"./useButton-Bq3twKx0.js";import"./Dialog-xkXnelAM.js";import"./RSPContexts-B7BZpIEv.js";import"./OverlayArrow-D5stloCs.js";import"./useResizeObserver-B_W-iIzv.js";import"./useControlledState-BehPunq_.js";import"./Collection-Bg3XAI3U.js";import"./index-dVdMFjEa.js";import"./Separator-B8eK9tne.js";import"./SelectionManager-SJNHkq4Q.js";import"./useEvent-DsjSvcKm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DafI-lUN.js";import"./useDescription-CFR_hxpk.js";import"./ListKeyboardDelegate-E7osep5R.js";import"./PressResponder-mC_0UUq5.js";import"./useLocalizedStringFormatter-aBffhIh6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7vkcFU_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-KB2QFTLi.js";import"./Button-of3UeUzt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DkVOPURc.js";import"./createLucideIcon-j47tDFs8.js";import"./x-CzVH8xnQ.js";import"./Heading-Dx2eNYM8.js";import"./info-DKCA_yjb.js";import"./Popover-CYiOQIy6.js";import"./useFormValidation-VEshaC1X.js";import"./useField-DnmfTmmv.js";import"./Form-D3dBAIeA.js";import"./check-DRrBT3Es.js";import"./useToggleState-BmHsWPUZ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
