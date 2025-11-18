import{S as s}from"./SearchField-Cs4J1KDy.js";import"./iframe-BJVWIAI0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-elJiOlaP.js";import"./utils-BgvIVkCn.js";import"./useLocalizedStringFormatter-CLFDyX6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJlk4ELf.js";import"./useFocusRing-qe9665FA.js";import"./index-YXp4qXd9.js";import"./index-Dkok9qcg.js";import"./useFormValidation-BI-HDx1u.js";import"./useField-BLXTxzPM.js";import"./Button-Iro3jgs4.js";import"./Hidden-BopJK65L.js";import"./useLabels-DPwT7URN.js";import"./useButton-ByxRcK80.js";import"./search-z_ocYAER.js";import"./createLucideIcon-DVKYReIg.js";import"./Button-BsXqtviW.js";import"./Button.module-CtQ1deO8.js";import"./x-DROWsTsK.js";import"./useLocalizedStringFormatter-BJeLafFZ.js";import"./FieldError-DfZxug9i.js";import"./Text-DsWM3atI.js";import"./Text-BPEOSvMa.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
