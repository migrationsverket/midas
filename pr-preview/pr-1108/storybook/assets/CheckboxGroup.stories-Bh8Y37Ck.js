import{j as e}from"./iframe-DJvMsPK5.js";import{C as m}from"./CheckboxGroup-Co9nN4Fy.js";import{C as p}from"./Checkbox-C-rbPrjR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQm3X7MS.js";import"./utils-esTkTgMr.js";import"./clsx-B-dksMZM.js";import"./Text-DIS3P1po.js";import"./useFocusRing-D6tEw859.js";import"./index-Ipi0mz-M.js";import"./index-B3xZpXqe.js";import"./clsx-Ciqy0D92.js";import"./Text-CLEP5l2l.js";import"./Label-BD-fBwof.js";import"./Button-DaEctwPE.js";import"./Hidden-C5_NTDOk.js";import"./useLabels-C9xCPnuW.js";import"./useButton-D9q_HuIm.js";import"./Dialog-DxSS5m2M.js";import"./RSPContexts-Cx8DPVhb.js";import"./OverlayArrow-CRD8-tKP.js";import"./useResizeObserver-zJJ9H9KV.js";import"./useControlledState-C3uqw8vh.js";import"./Collection-C7443sXL.js";import"./index-B9Ss_QBk.js";import"./Separator-DIcFI67X.js";import"./SelectionManager-CR42a_fl.js";import"./useEvent-DACQ8JSc.js";import"./scrollIntoView-DGipwkZA.js";import"./SelectionIndicator-Ng8BHK2r.js";import"./useDescription-D8zJCmPO.js";import"./ListKeyboardDelegate-3IneNIxm.js";import"./PressResponder-4MI6JLf3.js";import"./useLocalizedStringFormatter-yOW7xoG5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_E8EkEc.js";import"./getScrollParent-CijgiSwc.js";import"./VisuallyHidden-DGcwd28E.js";import"./x-DBtm1AH7.js";import"./createLucideIcon-Cs-gIZHj.js";import"./useLocalizedStringFormatter-C4ywwRp4.js";import"./Heading-B3ayFQkC.js";import"./Button-BLuDdZMx.js";import"./Button.module-BB7N-cLd.js";import"./info-BD5VtfrO.js";import"./Popover-C1d3yOn1.js";import"./useFormValidation-C29k_zHA.js";import"./useField-Dg6SxeU5.js";import"./Form-DGMHN9mU.js";import"./check-CrnZq4Xj.js";import"./useToggleState-CUSYtc9i.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
