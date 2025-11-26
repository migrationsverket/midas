import{S as s}from"./SearchField-DCCejSeH.js";import"./iframe-Drq588aW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-COayyxOg.js";import"./utils-aeymvuYI.js";import"./useLocalizedStringFormatter-CfbPsYEt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJ8B9H1E.js";import"./useFocusRing-mHQN6z3x.js";import"./index-hBCxN88b.js";import"./index-NNPaNoGh.js";import"./useFormValidation-Xn3ZHDpP.js";import"./useField-BVVZciIw.js";import"./Button-C7gy-2EJ.js";import"./Hidden-Dnbbd5N5.js";import"./useLabels-JiIilPDr.js";import"./useButton-C7taEski.js";import"./search-D89COx-f.js";import"./createLucideIcon-BnM-Ijqi.js";import"./Button-Bby9lJBH.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B0Gzr_5r.js";import"./VisuallyHidden-BkTTj5Jf.js";import"./x-C_YK2Sn_.js";import"./FieldError-BSCwEXCJ.js";import"./Text-CKbWo8TX.js";import"./Text-C6r5Lex8.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
