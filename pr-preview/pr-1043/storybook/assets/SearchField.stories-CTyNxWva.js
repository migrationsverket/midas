import{S as s}from"./SearchField-CxqV28a4.js";import"./iframe-D9Rzgh85.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJh_WJgv.js";import"./utils-CcE3691I.js";import"./useLocalizedStringFormatter-Dq7J19BW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D11QcTuD.js";import"./useFocusRing-qy6wHmp4.js";import"./index-DmQawtna.js";import"./index-BrMoY6nn.js";import"./useFormValidation-COs17kb9.js";import"./useField-ERXTV_bg.js";import"./Button-D5VXQBoK.js";import"./Hidden-CRl_n9Jn.js";import"./useLabels-nvjoqgK_.js";import"./useButton-C4LQsEB7.js";import"./search-geywf33l.js";import"./createLucideIcon-Cr-DKDH9.js";import"./ClearButton-VYgfedPz.js";import"./Button-GEwt1th_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjQyT7Ji.js";import"./VisuallyHidden-DYBD2kzd.js";import"./x-DysO00qF.js";import"./FieldError-CIzKS9xI.js";import"./Text-3qget8RN.js";import"./Text-Dd2X_hQM.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
