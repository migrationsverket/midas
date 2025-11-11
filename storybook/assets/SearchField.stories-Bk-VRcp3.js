import{S as s}from"./SearchField-Dc653rbx.js";import"./iframe-B_1n2Nxm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-M8jeR7p8.js";import"./utils-BGVl99QC.js";import"./useLocalizedStringFormatter-MjSuGgLd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPh2gOo9.js";import"./useFocusRing-ly4EYUSp.js";import"./index-AffYZTwq.js";import"./index-CGcbwgsB.js";import"./useFormValidation-pGa6PMZf.js";import"./useField-BC3VvOM1.js";import"./Button-D_D3PUIa.js";import"./Hidden-C4OnXBk2.js";import"./useLabels-BunAkoIy.js";import"./useButton-7lsv9hhb.js";import"./search-D-6aUlSb.js";import"./createLucideIcon-Dd24Cy3Z.js";import"./Button-Ckj24ESM.js";import"./Button.module-CtQ1deO8.js";import"./x-q4jLG_xE.js";import"./useLocalizedStringFormatter-Dr5HAVwW.js";import"./FieldError-CoAd2X9d.js";import"./Text-CP5SbyTl.js";import"./Text-BUabn6XH.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
