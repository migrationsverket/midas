import{S as s}from"./SearchField-Bm8yi-Kd.js";import"./iframe-BYSujb5O.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjUFwNu-.js";import"./utils-BpYtCIZa.js";import"./useLocalizedStringFormatter-Dpys6Wq_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMdPcIyp.js";import"./useFocusRing-Cq6ZZkO6.js";import"./index-BTamtBiG.js";import"./index-BUtMmMz-.js";import"./useFormValidation-9p9mjJmO.js";import"./useField-BAkXw4Su.js";import"./Button-CyeAVMHd.js";import"./Hidden-BljVQJbf.js";import"./useLabels-DVc_tfUB.js";import"./useButton-Bf-GHWc-.js";import"./search-DwxJySu1.js";import"./createLucideIcon-CFUgjHlc.js";import"./Button-B5_32c3T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-VLqr3pjp.js";import"./VisuallyHidden-BK_XVg_7.js";import"./x-BTh76Rd3.js";import"./FieldError-BlAjSjix.js";import"./Text-DVuQNkTp.js";import"./Text-BXmZ9P-w.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
