import{S as s}from"./SearchField-DHqzYA_S.js";import"./iframe-DjkzDfUJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CN1_NNkw.js";import"./utils-vexqYITr.js";import"./useLocalizedStringFormatter-BW-uk-lr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BQfhqErt.js";import"./useFocusRing-CESrVCRK.js";import"./index-Ga__SQ6G.js";import"./index-6ad1L8SU.js";import"./useFormValidation-Dd4D9ZVC.js";import"./useField-BPDKOCFg.js";import"./Button--BMsMuMT.js";import"./Hidden-XVXMf98p.js";import"./useLabels-B6BslA1N.js";import"./useButton-Db0mva43.js";import"./search-D_ZToU3o.js";import"./createLucideIcon-BK-M30E7.js";import"./Button-BR2m8ec0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc-I9I7t.js";import"./VisuallyHidden-DkXgx9RF.js";import"./x-D6S4l13V.js";import"./FieldError-yYdtsfGD.js";import"./Text-C5izD3Og.js";import"./Text-DYUCIzkR.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
