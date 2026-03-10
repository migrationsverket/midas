import{S as s}from"./SearchField-Dzl3bmMY.js";import"./iframe-ghVbh2m4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cm-qnzwi.js";import"./utils-Ct4jCNtU.js";import"./useLocalizedStringFormatter-DfDL6ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DV0xQLx0.js";import"./useFocusRing-tQFcCqqc.js";import"./index-ewvUbER1.js";import"./index-Bm6sjKM_.js";import"./useFormValidation-Bz2uPf8x.js";import"./useField-BbZI2M8z.js";import"./Button-Dx2HIyuj.js";import"./Hidden-CsZ06DKs.js";import"./useLabels-Da1vllL2.js";import"./useButton-BCYBif3G.js";import"./search-D_MOYELT.js";import"./createLucideIcon-iA7xlyS0.js";import"./ClearButton-DY9yWFgu.js";import"./Button--cicrOD0.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BAvHj6kP.js";import"./VisuallyHidden-BqLrRw5b.js";import"./x-CjlhRBsD.js";import"./FieldError-DYXnaMAk.js";import"./Text-CATOuxZy.js";import"./Text-agLWRutI.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
