import{S as s}from"./SearchField-BWWuZkjJ.js";import"./iframe-6vocyBZR.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DmeySdaI.js";import"./utils-BBfZu9kz.js";import"./useLocalizedStringFormatter-Df5C4zQW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CKFOKb-e.js";import"./useFocusRing-B50ygi4K.js";import"./index-B3IiVLzz.js";import"./index-BLXYeBoF.js";import"./useFormValidation-DdpbHF2n.js";import"./useField-DE_0prIV.js";import"./Button-BhGf2H3u.js";import"./Hidden-BuJvOqEn.js";import"./useLabels-7KDepcIy.js";import"./useButton-CJoNFuGt.js";import"./search-CJyYG_Ap.js";import"./createLucideIcon-C6fwsjaL.js";import"./Button-CpfHjZxO.js";import"./Button.module-CtQ1deO8.js";import"./x-TU0qh2BB.js";import"./useLocalizedStringFormatter-D-5i6O8E.js";import"./FieldError-B_UMAHWG.js";import"./Text-D-Z22iAA.js";import"./Text-fxXJjlwh.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
