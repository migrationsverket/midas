import{S as s}from"./SearchField-uZBkTh8v.js";import"./iframe-DSZ2fKvK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-KoCGTRr1.js";import"./utils-Cfkrut6D.js";import"./useLocalizedStringFormatter-BJCLTOit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JkOTThfh.js";import"./useFocusRing-DXadVZPZ.js";import"./index-DoXffT-S.js";import"./index-DWmwxavY.js";import"./useFormValidation-CqeQwe6N.js";import"./useField-CClsPm5e.js";import"./Button-DA0aKT5l.js";import"./Hidden-ChZPyTdJ.js";import"./useLabels-CBr_pV_K.js";import"./useButton-BoGmqoO9.js";import"./search-C867yeS8.js";import"./createLucideIcon-BZEE360n.js";import"./Button-wYRzLtLo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fLqKeFmr.js";import"./VisuallyHidden-9r-CcUTk.js";import"./x-DPL0DItu.js";import"./FieldError-BMni7XFl.js";import"./Text-CgCYlfoO.js";import"./Text-w9kcErxq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
