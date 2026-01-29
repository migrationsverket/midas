import{S as s}from"./SearchField-hq-xGYud.js";import"./iframe-BCXCe90E.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BL0GCU23.js";import"./utils-B2hL7Xtf.js";import"./useLocalizedStringFormatter-CfJXxR3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BlPhWzmL.js";import"./useFocusRing-Co2TT7uq.js";import"./index-76xwZrhG.js";import"./index-B-ZR8m7d.js";import"./useFormValidation-CAH07Xla.js";import"./useField-CLuxjErM.js";import"./Button-z4xgqBUc.js";import"./Hidden-D9V9PO0C.js";import"./useLabels-DbiDlhVN.js";import"./useButton-B4EsMdme.js";import"./search-kHMG3P3p.js";import"./createLucideIcon-D-C2mOoH.js";import"./ClearButton-CeCYEmTa.js";import"./Button-BS-I6Qwk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DS_myY-E.js";import"./VisuallyHidden-DNi7GGMW.js";import"./x-7u9so2rQ.js";import"./FieldError-DNJHuSL6.js";import"./Text-CYwVMw3N.js";import"./Text-fzRhbvnE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
