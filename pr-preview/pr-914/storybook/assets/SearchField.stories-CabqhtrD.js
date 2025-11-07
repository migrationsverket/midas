import{S as s}from"./SearchField-05megX24.js";import"./iframe-CxZjhegp.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1MfuKuam.js";import"./utils-t_UvxsPo.js";import"./useLocalizedStringFormatter-CFCh-lbJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_ethhwO.js";import"./useFocusRing-CuAhJjMk.js";import"./index-Df8cI5Fd.js";import"./index-BpV2s7Sq.js";import"./useFormValidation-DTcyk69g.js";import"./useField-B0rwbLOa.js";import"./Button-DTaXrG8H.js";import"./Hidden-CwZ-5pz7.js";import"./useLabels-DYf1S3Mk.js";import"./useButton-D6P1u6Z6.js";import"./search-BfdweApC.js";import"./createLucideIcon-Wfv3XnU7.js";import"./Button-DmCxpU9a.js";import"./Button.module-CtQ1deO8.js";import"./x-DyUBUrN6.js";import"./useLocalizedStringFormatter-Bd44m9N7.js";import"./FieldError-BnSMhr-e.js";import"./Text-BxKbXzcf.js";import"./Text-BO0XgLDT.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
