import{S as s}from"./SearchField-BziiJOug.js";import"./iframe-BemYTmI0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpK-5b_b.js";import"./utils-BFE3Bu5p.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-GApOC2.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./useFormValidation-Hprlhq0d.js";import"./useField-BByJZkIc.js";import"./Button-BIUCE2_i.js";import"./Hidden-BgieuMJL.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./search-BbDitYjw.js";import"./createLucideIcon-CvZzPSN7.js";import"./ClearButton-180veWio.js";import"./Button-BvlrAquf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./VisuallyHidden-BYKpW6eG.js";import"./x-DusiX_N1.js";import"./FieldError-Cmx8qBX6.js";import"./Text-BdKoRU3R.js";import"./Text-C_3jh_f2.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
