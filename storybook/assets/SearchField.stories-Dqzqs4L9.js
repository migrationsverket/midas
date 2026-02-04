import{S as s}from"./SearchField-DkRgC-LI.js";import"./iframe-DQ8MWDzl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DLe-crj8.js";import"./utils-MUondYLm.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B054hSp-.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./useFormValidation-DoUO8THk.js";import"./useField--phBsH06.js";import"./Button-C6oyl_qC.js";import"./Hidden-BFm8JVh5.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./search-DvFRBW_y.js";import"./createLucideIcon-BgRpLVeX.js";import"./ClearButton-h1qHyDPN.js";import"./Button-lMIcCMmO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./VisuallyHidden-CYOdgqsq.js";import"./x-B_gkLLTD.js";import"./FieldError-BbsiMUDV.js";import"./Text-B7FL6X4L.js";import"./Text-DZRYbZpm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
