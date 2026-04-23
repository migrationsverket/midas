import{S as i}from"./SearchField-ddIbNjnG.js";import"./iframe-BNflmq3A.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7V63oD4.js";import"./clsx-B-dksMZM.js";import"./Form-ClPIoKYv.js";import"./useFocusRing-C6RlaKsx.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./Input-P4PAFc0_.js";import"./Hidden-fjlvP_hk.js";import"./Button-DJfxBrz6.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./FieldError-CpZNXgM0.js";import"./Text-Bnz2t9Ql.js";import"./clsx-Ciqy0D92.js";import"./Text-BlWLVQLi.js";import"./RSPContexts-CIYDedK3.js";import"./Group-DjoYRNGK.js";import"./useControlledState-DuXs14gL.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSiaFglU.js";import"./useField-D3c7IL7J.js";import"./TextField.module-DdivwlC8.js";import"./search-B4ss-Rdf.js";import"./createLucideIcon-BQvoQkeP.js";import"./x-DbG6WDA3.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Button-Cyp4EM5w.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ITIWhviF.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
