import{S as s}from"./SearchField-DKVc-RSl.js";import"./iframe-DF-gckEl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BozieDQw.js";import"./utils-xE_2EOTS.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SU1WDSst.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./useFormValidation-kF6lMwdG.js";import"./useField-BJ4J1Su9.js";import"./Button-DfFeWMER.js";import"./Hidden-CnADKIpW.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./search-Bu9pXn74.js";import"./createLucideIcon-DlP1PWjK.js";import"./ClearButton-CnaDqahQ.js";import"./Button-xgruqnpI.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./VisuallyHidden-WVzpTwv1.js";import"./x-D5acHrs_.js";import"./FieldError-nZ-6NevE.js";import"./Text-CD93M0aA.js";import"./Text-mrdWRvrC.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
