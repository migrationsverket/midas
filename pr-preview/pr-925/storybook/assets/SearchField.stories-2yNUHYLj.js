import{S as s}from"./SearchField-CfeEiWNe.js";import"./iframe-jgKyCgCs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BchtzvOb.js";import"./utils-Di2SFccO.js";import"./useLocalizedStringFormatter-CytWURy7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bkc3J0x_.js";import"./useFocusRing-iYG5kAH5.js";import"./index-DG2WG7qx.js";import"./index-BFSl9xNw.js";import"./useFormValidation-BSTLnn3c.js";import"./useField-CLEe5K9S.js";import"./Button-qMrleB50.js";import"./Hidden-DKkXPRAB.js";import"./useLabels-mdXMBDxR.js";import"./useButton-DdA7_Pcq.js";import"./search-CrmnAhn1.js";import"./createLucideIcon-CWyh0Gfz.js";import"./Button-DWs9gr3F.js";import"./Button.module-CtQ1deO8.js";import"./x-DRfTRCVq.js";import"./useLocalizedStringFormatter-CqtWfHXd.js";import"./FieldError-B54BjIf5.js";import"./FieldError-CoMeK_07.js";import"./Text-CyTszoD0.js";import"./Text-B1Y_W_Ha.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
