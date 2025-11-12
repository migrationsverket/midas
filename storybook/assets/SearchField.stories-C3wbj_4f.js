import{S as s}from"./SearchField-BVyZZCAy.js";import"./iframe-B_wOJzak.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CsUwFHf6.js";import"./utils-CqdFBANG.js";import"./useLocalizedStringFormatter-C7fIyH4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DY-SR3re.js";import"./useFocusRing-DoMqkbPM.js";import"./index-CY391PiH.js";import"./index-CXI-rU25.js";import"./useFormValidation-D6Cow3X7.js";import"./useField-D9FdjpPa.js";import"./Button--YbSiPHP.js";import"./Hidden-DVTPrRLd.js";import"./useLabels-DczO-y-_.js";import"./useButton-BIdPbjci.js";import"./search-CiJkjFuy.js";import"./createLucideIcon-CrRdlSwf.js";import"./Button-T6l_wraQ.js";import"./Button.module-CtQ1deO8.js";import"./x-DhCjNDOQ.js";import"./useLocalizedStringFormatter-DpdUZ6AV.js";import"./FieldError-BQuMjgpB.js";import"./Text-Bdvl2sVE.js";import"./Text-BdfzGXfI.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
