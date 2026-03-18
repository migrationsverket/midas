import{S as s}from"./SearchField-roSRzp_C.js";import"./iframe-Bj8DUbD9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-o6yOdn5X.js";import"./utils-ZO4yOhXK.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-e-4r-eRY.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./useFormValidation-D4KwHiGL.js";import"./useField-ag9vEqi7.js";import"./Button-BF7jf_Ur.js";import"./Hidden-D5KISXrR.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./search-DKI5pVXN.js";import"./createLucideIcon-D8pz04BM.js";import"./ClearButton-DXg7NNDY.js";import"./x-Dg59dYX4.js";import"./Button-Cmlv3L41.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./VisuallyHidden-CHpwvWxj.js";import"./FieldError-D0YXHKSR.js";import"./Text-sbFHWdQM.js";import"./Text-BT7-HsIw.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
