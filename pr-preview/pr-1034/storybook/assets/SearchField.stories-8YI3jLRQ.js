import{S as s}from"./SearchField-Dm9LEjFu.js";import"./iframe-JaJw4f7V.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C32RUdaE.js";import"./utils-CiBzJ336.js";import"./useLocalizedStringFormatter-Brc7ObIZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FQoj7CiH.js";import"./useFocusRing-UFPGKc_I.js";import"./index-Cz39_mtL.js";import"./index-B3G3P3vm.js";import"./useFormValidation-BUCZo95t.js";import"./useField-CxzyvlHo.js";import"./Button-BNgll4Za.js";import"./Hidden-D0Dtcxd_.js";import"./useLabels-K8RTE3y-.js";import"./useButton-C_Iz2y8G.js";import"./search-B8msUKMd.js";import"./createLucideIcon-Ct39Qqpq.js";import"./ClearButton-BhKBWnQ7.js";import"./Button-CEh1IEm-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGp_mLDv.js";import"./VisuallyHidden-C0JdxdWR.js";import"./x-CYOQLw97.js";import"./FieldError-LdU8dMtl.js";import"./Text-BS3Ivz4K.js";import"./Text-DKa2NLkX.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
