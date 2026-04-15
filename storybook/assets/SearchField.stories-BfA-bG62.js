import{S as i}from"./SearchField-DRVe70zN.js";import"./iframe-th_azU5_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4VuU2um.js";import"./clsx-B-dksMZM.js";import"./Form-1MLn5vCf.js";import"./useFocusRing-BDcpBQzO.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./Input-CFo7PPij.js";import"./Hidden-BFds7gf1.js";import"./Button-wk7uPRGE.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./FieldError-AfpWYpbz.js";import"./Text-hdNvr6U4.js";import"./clsx-Ciqy0D92.js";import"./Text-DELoTx3Q.js";import"./RSPContexts-DcQ_ZJZT.js";import"./Group-D0UGm2Gt.js";import"./useControlledState-kFNWgpP8.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPUSE9Dm.js";import"./useField-Bo84Watr.js";import"./TextField.module-DdivwlC8.js";import"./search-CbGOtHVK.js";import"./createLucideIcon-Bv08NMl0.js";import"./x-D7gAiSiz.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Button-CauCyY5i.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkdA4sJp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
