import{S as s}from"./SearchField-DVdCyER_.js";import"./iframe-BarP2jEI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DPmoT0HX.js";import"./utils-C4VFQC2w.js";import"./useLocalizedStringFormatter-C81jcEn6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OlH7MLtx.js";import"./useFocusRing-DKrTHlrP.js";import"./index-qTJghRDJ.js";import"./index-B3DTuUjM.js";import"./useFormValidation-DoiobDGc.js";import"./useField-_KFG8c9F.js";import"./Button-BFy7bnhd.js";import"./Hidden-BzLfC3ct.js";import"./useLabels-EBmgp5uD.js";import"./useButton-B6nqpc-n.js";import"./search-LqPmHYhh.js";import"./createLucideIcon-MWFfQUSk.js";import"./Button-BcHfCKKh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2KBH29y.js";import"./VisuallyHidden-xLs_ajub.js";import"./x-DIka_85k.js";import"./FieldError-DxRFbn5t.js";import"./Text-Cgl57qJM.js";import"./Text-CFga_qib.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
