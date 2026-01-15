import{j as e}from"./iframe-DCfJfaw9.js";import{C as m}from"./CheckboxGroup-Dcyqanrs.js";import{C as p}from"./Checkbox-BIOMpsz7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nGE6oTAK.js";import"./utils-CqvO6KXE.js";import"./clsx-B-dksMZM.js";import"./Text-VXJMN6tP.js";import"./useFocusRing-7l2a3qeL.js";import"./index-DpFfOAB-.js";import"./index-CXk62c72.js";import"./clsx-Ciqy0D92.js";import"./Text-Bpd7w9CS.js";import"./Label-DpWFLNNu.js";import"./Button-Dkr17r5b.js";import"./Hidden-BCNvKZUC.js";import"./useLabels-DoN94B0X.js";import"./useButton-CwqsyX1R.js";import"./Dialog-C3UZe5Hi.js";import"./RSPContexts-CJm8Gl1M.js";import"./OverlayArrow-nZsAlrCE.js";import"./useResizeObserver-CuIqHVZp.js";import"./useControlledState-CUvbN5NM.js";import"./Collection-BBAyIAje.js";import"./index-DCcrf7Bi.js";import"./Separator-Dkjm1-Me.js";import"./SelectionManager-BDoopCov.js";import"./useEvent-DAfX2Xqj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXCFDIjJ.js";import"./useDescription-DOUWC27Q.js";import"./ListKeyboardDelegate-CkR7oaGc.js";import"./PressResponder-BHP22pdz.js";import"./useLocalizedStringFormatter-D4155cJ9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CooP9AAC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bc10YnsJ.js";import"./Button-V9Ueln0f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9mdIa23.js";import"./createLucideIcon-Bs2c2aOV.js";import"./x-BohAPrtb.js";import"./Heading-BIRhNi1H.js";import"./info-COeBVPIr.js";import"./Popover-BRS5FIeW.js";import"./useFormValidation-BaNJ2jR_.js";import"./useField-CiSkahL8.js";import"./Form-Bf8QUsQ0.js";import"./check-DLJpDCO-.js";import"./useToggleState-CoWbA7hm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
