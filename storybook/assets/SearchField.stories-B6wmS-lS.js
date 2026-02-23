import{S as s}from"./SearchField-BqkTRbFI.js";import"./iframe-yxLRWdXt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DAjRfDGl.js";import"./utils-RUxwEKRT.js";import"./useLocalizedStringFormatter-BxQYxci3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVpehf1p.js";import"./useFocusRing-CMPG7W5-.js";import"./index-Me9fHHrS.js";import"./index-DoQ_J8kd.js";import"./useFormValidation-DGLvbmhm.js";import"./useField-CVp2Igha.js";import"./Button-DaOEEwin.js";import"./Hidden-CvV1DSEo.js";import"./useLabels-DUi63ROe.js";import"./useButton-wbPnMjSj.js";import"./search-DCzoK2uI.js";import"./createLucideIcon-D4BAvLWW.js";import"./ClearButton-BpmfZhRh.js";import"./Button-CDWvCVpB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CPEv82p3.js";import"./VisuallyHidden-C3h4Jc2h.js";import"./x-GEzuGirk.js";import"./FieldError-BnWIpF2n.js";import"./Text-HPHn4yG2.js";import"./Text-CX657Sqj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
