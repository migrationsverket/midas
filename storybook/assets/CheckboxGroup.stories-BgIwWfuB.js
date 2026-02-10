import{j as e}from"./iframe-D6ADc9_c.js";import{C as m}from"./CheckboxGroup-BavmvZtH.js";import{C as p}from"./Checkbox-DHxiHUzN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DfqU_xU4.js";import"./utils-Co-WyaVB.js";import"./clsx-B-dksMZM.js";import"./Text-Uw6K1FwN.js";import"./useFocusRing-QJf4MrA-.js";import"./index-D1aif8GU.js";import"./index-Ctq9vtSb.js";import"./clsx-Ciqy0D92.js";import"./Text-Cpi5Nlnk.js";import"./Label-DdKVhDr8.js";import"./Button-BD1tt09E.js";import"./Hidden-BAUwWGh2.js";import"./useLabels-BSs_hlue.js";import"./useButton-RmGmQnEE.js";import"./Dialog-DrsU59Bj.js";import"./RSPContexts-CeqDtQgt.js";import"./OverlayArrow-BVnYCVZu.js";import"./useResizeObserver-RQnHnL5i.js";import"./useControlledState-CEf-u91N.js";import"./Collection-DYRtxejX.js";import"./index-Dt_fZTmi.js";import"./Separator-63iumiBg.js";import"./SelectionManager-BRVSpNSw.js";import"./useEvent-CyxeHTbo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zfcXVD4I.js";import"./useDescription-3hQMCdT7.js";import"./ListKeyboardDelegate-CB_Qp04D.js";import"./PressResponder-DKjG_hpq.js";import"./useLocalizedStringFormatter-BzbrAoH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmNGN7CG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CBsbYA_W.js";import"./Button-CIEzI-V7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTSyD4LW.js";import"./createLucideIcon-D0OOsTjF.js";import"./x-5V4xGIcw.js";import"./Heading-aqQpVgYi.js";import"./info-D2ATOYqN.js";import"./Popover-DXBqsnMf.js";import"./useFormValidation-BRorHZ80.js";import"./useField-DhT5MPzX.js";import"./Form-DN_MDLWN.js";import"./check-P6HwLFPb.js";import"./useToggleState-Cg58Vg1m.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
