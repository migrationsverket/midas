import{S as s}from"./SearchField-C0XVjh65.js";import"./iframe-DsfFtxS2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnlDaLL1.js";import"./utils-CiHeKsB_.js";import"./useLocalizedStringFormatter-BJ5DWpkF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-31tCsnnV.js";import"./useFocusRing-1z_ufVt_.js";import"./index-DgLlfILw.js";import"./index-DnB7KTmW.js";import"./useFormValidation-B-yMnowL.js";import"./useField-DWMKBFFt.js";import"./Button-BUGcuGOU.js";import"./Hidden-Bs3ILcuK.js";import"./useLabels-MWmyC4Dm.js";import"./useButton-D8CT0FKr.js";import"./search-R-HQhTWu.js";import"./createLucideIcon-B2R5tymB.js";import"./ClearButton-D2RHW8cG.js";import"./Button-4tH0viW2.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DZ4cvEMe.js";import"./VisuallyHidden-DfQN_1Bp.js";import"./x-BIaZFj52.js";import"./FieldError-87EUhy5h.js";import"./Text-DAqpMgoy.js";import"./Text-BpQb7gs6.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
