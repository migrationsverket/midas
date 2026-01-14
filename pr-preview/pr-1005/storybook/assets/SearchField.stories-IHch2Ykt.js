import{S as s}from"./SearchField-DIhtjtri.js";import"./iframe-BKHIzrax.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-jVzV3VRN.js";import"./utils-eagGX55s.js";import"./useLocalizedStringFormatter-B5xALe7F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEC9_X6m.js";import"./useFocusRing-BQi4GTJZ.js";import"./index-DeiSO1eR.js";import"./index-BURsRzrN.js";import"./useFormValidation-CNp4vzeH.js";import"./useField-D9QQBjQ_.js";import"./Button-tJyCLzUT.js";import"./Hidden-Uuem72q2.js";import"./useLabels-BY9SCAZ0.js";import"./useButton-BjW1xepF.js";import"./search-DlAq4urG.js";import"./createLucideIcon-DDmRbHsv.js";import"./Button-D46_7az7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUZW3yS9.js";import"./VisuallyHidden-C3Qtj23X.js";import"./x-CCKzm0I8.js";import"./FieldError-B8rlzmnF.js";import"./Text-BZIVr77b.js";import"./Text-B6QRIKA2.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
