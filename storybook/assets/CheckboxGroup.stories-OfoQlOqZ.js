import{j as e}from"./iframe-DB1fQkim.js";import{C as m}from"./CheckboxGroup-BwxOi0Uz.js";import{C as p}from"./Checkbox-BPp5R92P.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B9rnBVQS.js";import"./utils-rcw9EHco.js";import"./clsx-B-dksMZM.js";import"./Text-fvBQwzot.js";import"./useFocusRing-BqzMj4PE.js";import"./index-Bt17hO8v.js";import"./index-AryLyPHF.js";import"./clsx-Ciqy0D92.js";import"./Text-Hm2BWrds.js";import"./Label-aZXoWtjV.js";import"./Button-CfOPYvMd.js";import"./Hidden-DL23eUkw.js";import"./useLabels-eN3v5AUZ.js";import"./useButton-De_mFC-y.js";import"./Dialog-BBC3VHlZ.js";import"./RSPContexts-BJrSYr0Z.js";import"./OverlayArrow-CQ7RtPct.js";import"./useResizeObserver-DaTVkAJj.js";import"./useControlledState-BGJ8Svio.js";import"./Collection-DzJxdVpc.js";import"./index-BKfnPzb7.js";import"./Separator-D79YFtWQ.js";import"./SelectionManager-BLyrVyiQ.js";import"./useEvent-Cy_tRzK_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Btb-iVUx.js";import"./useDescription-Vm0yjvuZ.js";import"./ListKeyboardDelegate-CN8wZZsU.js";import"./PressResponder-B_yr5Zfc.js";import"./useLocalizedStringFormatter-boXa-JbY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DvZ16s0t.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kOOindq1.js";import"./Button-q_lSiE8f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5j4HyRnM.js";import"./createLucideIcon-BkMAC4LJ.js";import"./x-Vxu3CVhu.js";import"./Heading-5m64qMAb.js";import"./info-C6dUYnCV.js";import"./Popover-R_bMtkiW.js";import"./useFormValidation-BzsRUDrO.js";import"./useField-C1-CT7Bj.js";import"./Form-CfjHafmL.js";import"./check-Dk0gUhay.js";import"./useToggleState-ZF-jqHCi.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
