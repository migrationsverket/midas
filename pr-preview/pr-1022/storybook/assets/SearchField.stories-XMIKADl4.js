import{S as s}from"./SearchField-TL5qvVUh.js";import"./iframe-2JtjApPo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bc67AkWO.js";import"./utils-CzNHZNuR.js";import"./useLocalizedStringFormatter-DLo_dynU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4e7wbku.js";import"./useFocusRing-C0YicbWo.js";import"./index-CSBRpQP6.js";import"./index-BGdLG16e.js";import"./useFormValidation-BCYtaxsj.js";import"./useField-DBBpCUIY.js";import"./Button-ByCdtsdN.js";import"./Hidden-C9R9ag8Z.js";import"./useLabels-L4n1lfmV.js";import"./useButton-DQi2T4lG.js";import"./search-BSbcvbz0.js";import"./createLucideIcon-DDjq8OkZ.js";import"./ClearButton-Du8kSZnN.js";import"./Button-Cqjrp1pe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dm9cUQa8.js";import"./VisuallyHidden-BPqsl5RX.js";import"./x-BP08_jMZ.js";import"./FieldError-Dln1Os_1.js";import"./Text-DuXa3TNC.js";import"./Text-BSc0SvwI.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
