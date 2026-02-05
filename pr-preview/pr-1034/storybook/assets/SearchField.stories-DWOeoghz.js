import{S as s}from"./SearchField-CAzV_XqV.js";import"./iframe-DWeimgIa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-HboVp0gd.js";import"./utils-DxMtLVOR.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNcscrW3.js";import"./useFocusRing-DKnPpF37.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./useFormValidation-BVTCQTHB.js";import"./useField-BTFmLCge.js";import"./Button-BvEh5rbk.js";import"./Hidden-DKOEiJ1S.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./search-xajySS6f.js";import"./createLucideIcon-BHfYKO9v.js";import"./ClearButton-BrFnQoZZ.js";import"./Button-77YGZ7IT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTWeQANG.js";import"./VisuallyHidden-DRBz7uUV.js";import"./x-DycnocmR.js";import"./FieldError-D4QojQoq.js";import"./Text-DbBhNbbj.js";import"./Text-CfprFU7e.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
