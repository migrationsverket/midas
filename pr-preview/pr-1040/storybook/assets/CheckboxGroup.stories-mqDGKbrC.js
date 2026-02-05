import{j as e}from"./iframe-CKGACLCX.js";import{C as m}from"./CheckboxGroup-CKq1erq1.js";import{C as p}from"./Checkbox-BJrzOodh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DI7Xo_Io.js";import"./utils-C1cYwrRL.js";import"./clsx-B-dksMZM.js";import"./Text-BArB5QvF.js";import"./useFocusRing-BuOXP8Hw.js";import"./index-DoQf3qpc.js";import"./index-oFvCdSIv.js";import"./clsx-Ciqy0D92.js";import"./Text-BXvNDZo-.js";import"./Label-D2RWakUL.js";import"./Button-54xKiT29.js";import"./Hidden-DNSOrP-i.js";import"./useLabels-DIZFogYA.js";import"./useButton-BILFtFpB.js";import"./Dialog-CHx5kMQk.js";import"./RSPContexts-B9y_dSfG.js";import"./OverlayArrow-DyMZopGC.js";import"./useResizeObserver-8gm3Wp7p.js";import"./useControlledState-DDl3VCJO.js";import"./Collection-CjyQI97O.js";import"./index-D50zBG9z.js";import"./Separator-Dt6kxqOC.js";import"./SelectionManager-Gtya-evv.js";import"./useEvent-dreapgiA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmLJO3Jl.js";import"./useDescription-DWckP2Ca.js";import"./ListKeyboardDelegate-DovjS_lQ.js";import"./PressResponder-xTREjKZW.js";import"./useLocalizedStringFormatter-BI6jibPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CpYyHkem.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHIvprIA.js";import"./Button-8AXkha9Y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQvS5eyN.js";import"./createLucideIcon-RPOR-KCQ.js";import"./x-DWT6hPY4.js";import"./Heading-BGD7UjEp.js";import"./info-BNJVi2Gx.js";import"./Popover-DeK1Vp5W.js";import"./useFormValidation-C0Fr8G0C.js";import"./useField-KuI-cIKx.js";import"./Form-zEYGtEnB.js";import"./check-BF2CYzdN.js";import"./useToggleState-1TmRPaJX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
