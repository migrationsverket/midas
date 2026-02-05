import{S as s}from"./SearchField-CuVMkON4.js";import"./iframe-Zc8QEBEs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--JkDKSQL.js";import"./utils-B5Ft6r77.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wdLBLz1l.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./useFormValidation-Bbgo3ES6.js";import"./useField-CvXnBGYy.js";import"./Button-CVF2QLQE.js";import"./Hidden-CwlmQhVF.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./search-BwO10KGe.js";import"./createLucideIcon-BfbY4clK.js";import"./ClearButton-DgiFGve_.js";import"./Button-Dkxo3GyP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./VisuallyHidden-DAd_ytwS.js";import"./x-DLzHvAkE.js";import"./FieldError-RKqcL0cn.js";import"./Text-D3gJufSD.js";import"./Text-DJvoMdLY.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
