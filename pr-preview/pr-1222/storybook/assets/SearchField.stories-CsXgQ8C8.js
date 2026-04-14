import{S as i}from"./SearchField-4KlN0NWX.js";import"./iframe-DgC-Ldrx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUpv-0tc.js";import"./clsx-B-dksMZM.js";import"./Form-ynRyQGu4.js";import"./useFocusRing-dqGFuQw5.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./Input-DJXDnrG2.js";import"./Hidden-B6xJ_9IQ.js";import"./Button-eOYMOt-9.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./FieldError-DZZcZZwp.js";import"./Text-DBf5U8p7.js";import"./clsx-Ciqy0D92.js";import"./Text-FIGzZLpV.js";import"./RSPContexts-CrNZT_wF.js";import"./Group-8NEZM85t.js";import"./useControlledState-9EeHrS1X.js";import"./useLocalizedStringFormatter-Cy9GHfDn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CdmC9FlC.js";import"./useField-DStHgBoo.js";import"./TextField.module-DdivwlC8.js";import"./search-BEqpWOue.js";import"./createLucideIcon-Dct_wYt8.js";import"./x-6ABgZAjN.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./Button-C6c-eprm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CY4Z8bfN.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
