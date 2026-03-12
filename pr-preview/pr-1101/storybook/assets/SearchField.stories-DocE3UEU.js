import{S as s}from"./SearchField-pVsr5oTn.js";import"./iframe-CSEJNTkK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4wBbeGG.js";import"./utils-DeJFKvWK.js";import"./useLocalizedStringFormatter-BfRcdDUG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0CKpIct.js";import"./useFocusRing-DrHJkNXb.js";import"./index-D143hsf1.js";import"./index-BMO83btm.js";import"./useFormValidation-87lR2aCk.js";import"./useField-CAM1ffXR.js";import"./Button-C9VKeO5Q.js";import"./Hidden-UvxDhw7H.js";import"./useLabels-BgO5uamo.js";import"./useButton-BhgtOeCo.js";import"./search-YILe9fL3.js";import"./createLucideIcon-ttv-_pDn.js";import"./ClearButton-BO1NvBS-.js";import"./x-DUi-rfHM.js";import"./Button-BNNwT8-I.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQyjPzmq.js";import"./VisuallyHidden-D49iMATH.js";import"./FieldError-H0rNPMcB.js";import"./Text-D9jZWUtn.js";import"./Text-BZVryx1n.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
