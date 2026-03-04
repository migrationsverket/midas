import{S as s}from"./SearchField-BHsYUayS.js";import"./iframe-DBfoD2U7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_hIvr0Rm.js";import"./utils-D_iENdjI.js";import"./useLocalizedStringFormatter-D7V2ZqXE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Czwx7loP.js";import"./useFocusRing-_y_4-82L.js";import"./index-Cn5t1hH6.js";import"./index-Cba1Uww2.js";import"./useFormValidation-D9--7C6U.js";import"./useField-BLOP0__N.js";import"./Button-Bp1ZxcfX.js";import"./Hidden-BUhyB_bX.js";import"./useLabels-BUVsGCLs.js";import"./useButton-Cw8muoeF.js";import"./search-Cz4nPVuR.js";import"./createLucideIcon-Bmf1TE0_.js";import"./ClearButton-CC43lVlo.js";import"./Button-mUhJkAyU.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTqG2xCS.js";import"./VisuallyHidden-DIm4I4zN.js";import"./x-BWVpbBLY.js";import"./FieldError-CyN1tUSk.js";import"./Text-BwIO0Pwg.js";import"./Text-D6_QswxK.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
