import{S as s}from"./SearchField-C-GfeNrp.js";import"./iframe-CnjefUD1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uJdyG-cB.js";import"./utils-D37LYN_z.js";import"./useLocalizedStringFormatter-CcNy5K9j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DaAs0YZa.js";import"./useFocusRing-OpxO3A8k.js";import"./index-CEoM9FY4.js";import"./index-C0k8iZuD.js";import"./useFormValidation-InwWLwT5.js";import"./useField-CgKeeixV.js";import"./Button-BHfV4bzr.js";import"./Hidden-C9ODNoG7.js";import"./useLabels-D_5lY230.js";import"./useButton-D49m94PX.js";import"./search-fw9K1S37.js";import"./createLucideIcon-CeKlyRFp.js";import"./Button-CAOAFMpi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BV3whyUg.js";import"./VisuallyHidden-C-qiHPSr.js";import"./x-CaOMZwEa.js";import"./FieldError-DESxxTZt.js";import"./Text-D8shfVXj.js";import"./Text-DzNIEZYv.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
