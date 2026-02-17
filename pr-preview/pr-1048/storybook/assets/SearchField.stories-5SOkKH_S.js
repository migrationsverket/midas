import{S as s}from"./SearchField-CXncDms5.js";import"./iframe-CGGmCHdK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-x5f61b7i.js";import"./utils-D-bfWJQo.js";import"./useLocalizedStringFormatter-BPgmIhkN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BrjILwP2.js";import"./useFocusRing-BpvWxL7t.js";import"./index-DCMIOYtC.js";import"./index-xSCn676G.js";import"./useFormValidation-DwbgJzYa.js";import"./useField-Czho_fib.js";import"./Button-CSNXBxJJ.js";import"./Hidden-yGKkmiYH.js";import"./number-DfkVkf0F.js";import"./useLabels-DYBD-9_u.js";import"./useButton-BhWcO4Um.js";import"./search-Cfnnr7dj.js";import"./createLucideIcon-D7mqoZIq.js";import"./ClearButton-BFKypSzR.js";import"./Button-q0sQUu-L.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-w_7AiL4k.js";import"./VisuallyHidden-3IaiNxxm.js";import"./x-CGpjQ8Iu.js";import"./FieldError-DeWUCxqP.js";import"./Text-DLgi0cnJ.js";import"./Text-C7tJFFeN.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
