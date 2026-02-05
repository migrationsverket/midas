import{S as s}from"./SearchField-Czat4DZn.js";import"./iframe-jXOFY8ly.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B_hf4unm.js";import"./utils-DMRbnQmp.js";import"./useLocalizedStringFormatter-CKvY-tar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-uxEsjRQI.js";import"./useFocusRing-D6lwjUZF.js";import"./index-DDRSGRcW.js";import"./index-BFn5LmJz.js";import"./useFormValidation-Q4VomWZv.js";import"./useField-d3f_aUfY.js";import"./Button-_V1yAu90.js";import"./Hidden-C1RMCDHa.js";import"./useLabels-BUsfJ8Q5.js";import"./useButton-Br-Tw6Wj.js";import"./search-WPd2KUj9.js";import"./createLucideIcon-CZVrkezG.js";import"./ClearButton-Chm9Dqje.js";import"./Button-BJ-Glf4b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dr7Dpfz9.js";import"./VisuallyHidden-B9izHnXN.js";import"./x-CoKzMXDs.js";import"./FieldError-DpwWyisz.js";import"./Text-NASTJ5SQ.js";import"./Text-DBF8n_Yj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
