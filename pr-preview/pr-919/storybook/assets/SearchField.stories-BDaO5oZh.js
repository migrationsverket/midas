import{S as s}from"./SearchField-BAG1o-7R.js";import"./iframe-CQoEt6MY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CwbmZD-T.js";import"./utils-BZjNqm_v.js";import"./useLocalizedStringFormatter-CXbNOCH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CVPRI7xP.js";import"./useFocusRing-Ce_-RKSK.js";import"./index-JqVMY84I.js";import"./index-sURv3l0A.js";import"./useFormValidation-CBhhwGfy.js";import"./useField-CzzztK0W.js";import"./Button-DZ49MCyb.js";import"./Hidden-CSuNuGGR.js";import"./useLabels-CdhJZ8bI.js";import"./useButton-BFtrRDJL.js";import"./search-8Wx7vLo4.js";import"./createLucideIcon-C6kI0Pt5.js";import"./Button-CzvKWfD1.js";import"./Button.module-CtQ1deO8.js";import"./x-DEghRdqs.js";import"./useLocalizedStringFormatter-DWHjwkEi.js";import"./FieldError-CzIfU6LM.js";import"./Text-C06qrCLM.js";import"./Text-BNSF2d27.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
