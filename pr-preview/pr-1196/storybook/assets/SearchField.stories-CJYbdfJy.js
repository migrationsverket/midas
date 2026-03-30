import{S as i}from"./SearchField-sp20Fkru.js";import"./iframe-BaglzexA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRuvLXhr.js";import"./clsx-B-dksMZM.js";import"./Form-CwjgsrTS.js";import"./useFocusRing-o2chUIJx.js";import"./index-BDFHFH_G.js";import"./index-B5KTxMw4.js";import"./Input-LqZkovno.js";import"./Hidden-DtQ8Bocl.js";import"./Button-4C6qbeHh.js";import"./useLabel-DPVf23Bi.js";import"./useLabels-BQSacZGu.js";import"./useButton-CAOCdVrC.js";import"./FieldError-Cz0FB3Ou.js";import"./Text-BjRotHGw.js";import"./clsx-Ciqy0D92.js";import"./Text-BUo0m_vR.js";import"./RSPContexts-DSk9wo8I.js";import"./Group-Btv4E8l0.js";import"./useControlledState-j7ZeGh6U.js";import"./useLocalizedStringFormatter-CA4tuOSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CFey5b7_.js";import"./useField-DapuPCPx.js";import"./TextField.module-DdivwlC8.js";import"./search-BhiTQH1K.js";import"./createLucideIcon-B0HwbXf8.js";import"./x-B7iLIw8y.js";import"./useLocalizedStringFormatter-DzzpmN-7.js";import"./Button-DEzldRuR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden--A_wY8k-.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
