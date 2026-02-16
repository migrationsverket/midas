import{S as s}from"./SearchField-Ca8hm6xN.js";import"./iframe-DzQsNUlN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDeuRVdh.js";import"./utils-BK4Wbdgl.js";import"./useLocalizedStringFormatter-BKtb_iAs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B_FDF847.js";import"./useFocusRing-DIV-BtF4.js";import"./index-71dlSlec.js";import"./index-BenUNj7q.js";import"./useFormValidation-D42naTnG.js";import"./useField-B2ZM_ZrS.js";import"./Button-B-ooyoCL.js";import"./Hidden-BJckUxlD.js";import"./number-DfkVkf0F.js";import"./useLabels-Cj-mzHSD.js";import"./useButton-CefvlXlx.js";import"./search-Dvk9t6xx.js";import"./createLucideIcon-BcyF_Y89.js";import"./ClearButton-Zj0UVoyx.js";import"./Button-D9Fs-ZCK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNjAMkiD.js";import"./VisuallyHidden-ukn47BBG.js";import"./x-euwJmRQG.js";import"./FieldError-DdUwEQrU.js";import"./Text-B9j4IbHz.js";import"./Text-DQ3iFp2f.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
