import{S as s}from"./SearchField-DVsGchOb.js";import"./iframe-D-ypYuwn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C653rY7f.js";import"./utils-DQGhytbb.js";import"./useLocalizedStringFormatter-qVUCbyvG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bD-VrVS6.js";import"./useFocusRing-ClaQwJdN.js";import"./index-DHSfPRsN.js";import"./index-DBHvdizX.js";import"./useFormValidation-D6-jghXl.js";import"./useField-lmNM_fT4.js";import"./Button-89RGHRHn.js";import"./Hidden-Dz6be0Sh.js";import"./useLabels-kssSLeVE.js";import"./useButton-DhjrBguy.js";import"./search-BCNLHeLn.js";import"./createLucideIcon-C4YzC_QF.js";import"./Button-U4O3N2IF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-rNpKh-Hw.js";import"./VisuallyHidden-D4W03Dkt.js";import"./x-8_fCH_nT.js";import"./FieldError-C0J98PPl.js";import"./Text-BuEv763R.js";import"./Text-DJIv6PG1.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
