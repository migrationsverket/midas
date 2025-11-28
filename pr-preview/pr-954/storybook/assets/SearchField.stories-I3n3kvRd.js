import{S as s}from"./SearchField-CtavBZK8.js";import"./iframe-Bb5Ll2Q_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQTokbDY.js";import"./utils-DUu2sqhX.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Crat3jGl.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./useFormValidation-CmG_kr67.js";import"./useField-SUENPtea.js";import"./Button-CLgs0RHO.js";import"./Hidden-CIkUgucj.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./search-BmiOskzx.js";import"./createLucideIcon-BTIRr7kd.js";import"./Button-DcMiNBaO.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";import"./VisuallyHidden-BT0heQ-H.js";import"./x-na7-pW2Y.js";import"./FieldError-DHSOLBGK.js";import"./Text-ATBrkPw2.js";import"./Text-DGL_pGNa.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
