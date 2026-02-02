import{S as s}from"./SearchField-BVrDqrY5.js";import"./iframe-Da36InMg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CA4_YWUf.js";import"./utils-CHXZEpsb.js";import"./useLocalizedStringFormatter-wrWdFXU1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C41GIDAY.js";import"./useFocusRing-PWqs4TW9.js";import"./index-CaZlPwUz.js";import"./index-Di1QGlpo.js";import"./useFormValidation-DJDlUrPu.js";import"./useField-USVqeQGP.js";import"./Button-C9KA9u1r.js";import"./Hidden-CWBgmXhh.js";import"./useLabels-Bp-J3Y5-.js";import"./useButton-C2CUOyHb.js";import"./search-Doawm36P.js";import"./createLucideIcon-CXcjDiHx.js";import"./ClearButton-dOrUnszM.js";import"./Button-CXuDImk2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLWMEVc4.js";import"./VisuallyHidden-a6Yj5g4U.js";import"./x-CjhM0Bjo.js";import"./FieldError-DdDYB_s_.js";import"./Text-BrXpqahc.js";import"./Text-UbtOGoYO.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
