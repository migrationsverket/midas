import{j as e}from"./iframe-CtlzUTic.js";import{C as m}from"./CheckboxGroup-CBngfS0i.js";import{C as p}from"./Checkbox-BadmrqDz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B85O3F2_.js";import"./utils-Be0LSfA6.js";import"./clsx-B-dksMZM.js";import"./Text-BW699DP7.js";import"./useFocusRing-DJMLYrjC.js";import"./index-E52zMlCa.js";import"./index-5SHCtBg6.js";import"./clsx-Ciqy0D92.js";import"./Text-DzgVGaDU.js";import"./Label-DU16NEdC.js";import"./Button-DH5UoxLr.js";import"./Hidden-DGVzl5uY.js";import"./useLabels-BgCIJPu_.js";import"./useButton-DSvEAlkb.js";import"./Dialog-najdgrHS.js";import"./RSPContexts-CQZGhvKo.js";import"./OverlayArrow-BoJEOXyb.js";import"./useResizeObserver-Dk7hpC7i.js";import"./useControlledState-CfbZjGvX.js";import"./Collection-ZWhUlmEB.js";import"./index-BxlIXLxQ.js";import"./Separator-BJjEPYu_.js";import"./SelectionManager-CbX-eWig.js";import"./useEvent-7Vlz65b-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BxaIduyJ.js";import"./useDescription-DnlIBvPV.js";import"./ListKeyboardDelegate-lZINxfqG.js";import"./PressResponder-i5r1OmEb.js";import"./useLocalizedStringFormatter-C0z3Bv7k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCFHBOij.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CQrctRJU.js";import"./Button-Ki9bkVZp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-eyJdwfwF.js";import"./createLucideIcon-DLRJv2UH.js";import"./x-DPwbIeop.js";import"./Heading-wObVOJxK.js";import"./info-B4bUa8f0.js";import"./Popover-BPMUKrH2.js";import"./useFormValidation-CxR3xnZI.js";import"./useField-jOtxtfA7.js";import"./Form-UrwxiUY0.js";import"./check-CZnb4MBd.js";import"./useToggleState-Cm7ngC4r.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
