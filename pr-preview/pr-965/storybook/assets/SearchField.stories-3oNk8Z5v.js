import{S as s}from"./SearchField-kAHMo7HJ.js";import"./iframe-DR3QLKnQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bn_L3lPd.js";import"./utils-sts9k_ln.js";import"./useLocalizedStringFormatter-DkcHtNGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C2_qZBKb.js";import"./useFocusRing-D6abqPY3.js";import"./index-CC-McC1K.js";import"./index-BqyGOOW5.js";import"./useFormValidation-B3Umt8OY.js";import"./useField-an-6XtBS.js";import"./Button-BtuQvaqs.js";import"./Hidden-BHCXc2iL.js";import"./useLabels-D53eucx8.js";import"./useButton-W28Zleer.js";import"./search-BBDD7XIY.js";import"./createLucideIcon-CCTXZPbI.js";import"./Button-EZlh3IZI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CpsUAzKI.js";import"./VisuallyHidden-DAu2tE45.js";import"./x-DCThHRPI.js";import"./FieldError-BU84FHsn.js";import"./Text-qezIaGP8.js";import"./Text-BHdhtKkP.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
