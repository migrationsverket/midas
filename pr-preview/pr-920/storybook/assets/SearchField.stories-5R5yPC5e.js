import{S as s}from"./SearchField-Bpk5puyX.js";import"./iframe-Da_9xyu_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-sFCHxnJW.js";import"./utils-ClY4JNQR.js";import"./useLocalizedStringFormatter-BgiQH0tm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFCxOGcv.js";import"./useFocusRing-rtksAyVi.js";import"./index-MfarlIzn.js";import"./index-DCiPdHXY.js";import"./useFormValidation-CGVkY3Su.js";import"./useField-BVslVsTX.js";import"./Button-Dv74RsAx.js";import"./Hidden-DT7cFiAL.js";import"./useLabels-D-XK_IKO.js";import"./useButton-DKgQBPu0.js";import"./search-C2fTbbJG.js";import"./createLucideIcon-CErKZ7dc.js";import"./Button-BEWcUzao.js";import"./Button.module-CtQ1deO8.js";import"./x-C9jcFJpy.js";import"./useLocalizedStringFormatter-BjaGVHL_.js";import"./FieldError-DZB4_8Mx.js";import"./Text-Etr2qgQp.js";import"./Text-Bpadz2Uk.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
