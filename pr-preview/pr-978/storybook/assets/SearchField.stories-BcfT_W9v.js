import{S as s}from"./SearchField-B3RGtWxm.js";import"./iframe-BQVZAmhX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BzTnjfw8.js";import"./utils-DBGKxhvy.js";import"./useLocalizedStringFormatter-D1gRfOcs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bwcqt1wj.js";import"./useFocusRing-CZ1ppHUm.js";import"./index-DhVWvG0v.js";import"./index-jPah0Wh4.js";import"./useFormValidation-DdOFiruI.js";import"./useField-CXEJuOSd.js";import"./Button-DaQviGRz.js";import"./Hidden-uNYSXgwc.js";import"./useLabels-C7gSAdoi.js";import"./useButton-BLpyZZ6H.js";import"./search-C4b8pqBI.js";import"./createLucideIcon-BEZFPsZb.js";import"./Button-CFZ90YqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sLwEt4tr.js";import"./VisuallyHidden-CKyjCtbn.js";import"./x-B89X9bd_.js";import"./FieldError-Dvo9z3NV.js";import"./Text-Cl7VN2WD.js";import"./Text-BDOgt3-X.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
