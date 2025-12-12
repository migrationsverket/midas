import{S as s}from"./SearchField-BSC7F0Gr.js";import"./iframe-Cy9xQwF6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLnNsNKS.js";import"./utils-CX91mN24.js";import"./useLocalizedStringFormatter-6fLhkzE_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DwoC-Wuc.js";import"./useFocusRing-eGyNtlnv.js";import"./index-wz2WhQ9W.js";import"./index-CLKliA_Q.js";import"./useFormValidation-DDWgL35p.js";import"./useField-BSOim3Yx.js";import"./Button-D4DaLWR4.js";import"./Hidden-DMiuVEcg.js";import"./useLabels-Bn5QEtDZ.js";import"./useButton-LhbsvKtL.js";import"./search-D8iwUmjm.js";import"./createLucideIcon-DOfRWyVf.js";import"./Button-BTN2abfL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BbLBIRys.js";import"./VisuallyHidden-DExMWTTn.js";import"./x-8M2IUNr7.js";import"./FieldError-DlJvAPsp.js";import"./Text-EiK0GjXA.js";import"./Text-in_uCIcq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
