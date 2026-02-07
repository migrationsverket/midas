import{S as s}from"./SearchField-C4hHVfx8.js";import"./iframe-CuWNjTRb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-JaG_E2x3.js";import"./utils-bTshPwuy.js";import"./useLocalizedStringFormatter-DE24hlzI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yeu2J9nc.js";import"./useFocusRing-BOU0QdDc.js";import"./index-BVMh-c2E.js";import"./index-BG9E7EvN.js";import"./useFormValidation-D4Myy34u.js";import"./useField-BQlDoErg.js";import"./Button-DcYqIknv.js";import"./Hidden-CC5A1H5b.js";import"./useLabels-Z2fhjGWT.js";import"./useButton-CheLbNvO.js";import"./search-DLWXaQfY.js";import"./createLucideIcon-CyYJB5cI.js";import"./ClearButton-hr-2EXo7.js";import"./Button-xnDb1Lqn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDPSUyK3.js";import"./VisuallyHidden-BJty33Lz.js";import"./x-Br7Dc4zV.js";import"./FieldError-DPMeHFzQ.js";import"./Text-YALf1zl3.js";import"./Text-nCheY5Fg.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
