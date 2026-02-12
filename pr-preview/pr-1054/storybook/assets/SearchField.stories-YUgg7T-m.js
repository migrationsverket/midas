import{S as s}from"./SearchField-S2shzsFA.js";import"./iframe-CYE28S4B.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-AzqIiJWa.js";import"./utils-DXU04MTS.js";import"./useLocalizedStringFormatter-xFOfyFr2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Z072AKh4.js";import"./useFocusRing-DDD8-X_C.js";import"./index-SDL6z_K4.js";import"./index-CewZdSQ7.js";import"./useFormValidation-CBM5gBIr.js";import"./useField-fOhcEUsN.js";import"./Button-C-ijGV-E.js";import"./Hidden-u2Ek9cYJ.js";import"./useLabels-WDeNF-KU.js";import"./useButton-DlXq6u0P.js";import"./search-CXOwHYTP.js";import"./createLucideIcon-DTiky_Fg.js";import"./ClearButton-Dd6kSdNG.js";import"./Button-bGch504k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8xa7oGT.js";import"./VisuallyHidden-DKT9_oz-.js";import"./x-DUTBlblH.js";import"./FieldError-C_HeO-Fn.js";import"./Text-CRNMg4rg.js";import"./Text-BJwWTomA.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
