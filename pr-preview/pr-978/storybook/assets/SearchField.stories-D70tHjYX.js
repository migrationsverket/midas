import{S as s}from"./SearchField-j3odxXcM.js";import"./iframe-e7dVJZ80.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbdyQTTS.js";import"./utils-CEQ_Va0c.js";import"./useLocalizedStringFormatter-Dy8GwP1X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BdD3utws.js";import"./useFocusRing-B9Rn1B2s.js";import"./index-5fHP5ATJ.js";import"./index-CaEVLjia.js";import"./useFormValidation-BY_IYQMh.js";import"./useField-BJBsJOF5.js";import"./Button-HeijaR4V.js";import"./Hidden-DUO5PkD4.js";import"./useLabels-DJlzxkkZ.js";import"./useButton-DzyK9NH4.js";import"./search-STwhSCvF.js";import"./createLucideIcon-tRzhitig.js";import"./Button-B2F6YuiM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Di1nCEID.js";import"./VisuallyHidden-VT-zoUNe.js";import"./x-CxyJyYcT.js";import"./FieldError-9Gg6ZPlh.js";import"./Text-CPsvfpaa.js";import"./Text-CQWMXX5Z.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
