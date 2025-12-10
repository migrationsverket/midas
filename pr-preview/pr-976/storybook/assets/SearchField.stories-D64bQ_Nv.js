import{S as s}from"./SearchField-D6Oyh1Q1.js";import"./iframe-Dynq-WfW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4c64_YE.js";import"./utils-C5f3leNv.js";import"./useLocalizedStringFormatter-iG9Zi8vK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIo972XK.js";import"./useFocusRing-BAuEJFrN.js";import"./index-YRe8YCfP.js";import"./index-S1WfcoeI.js";import"./useFormValidation-C2_jfezl.js";import"./useField-CFMQ-uSy.js";import"./Button-CHr1GBYB.js";import"./Hidden-B_nMsfp6.js";import"./useLabels-C0xISSqM.js";import"./useButton-CO5VodBT.js";import"./search-DwTikioS.js";import"./createLucideIcon-DfdNSkLt.js";import"./Button-CGVjpGMW.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-JxJiRHf8.js";import"./VisuallyHidden-DTGQFyag.js";import"./x-C7yqcza2.js";import"./FieldError-DMaQ57CQ.js";import"./Text-Cnz-vVuh.js";import"./Text-CyHTqQNs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
