import{S as s}from"./SearchField-JWHfvstg.js";import"./iframe-Cm-nFXgj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAnQ-hqM.js";import"./utils-DzXT04ji.js";import"./useLocalizedStringFormatter-Q8gIMwH7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfNi0PMi.js";import"./useFocusRing-B1ph6_YX.js";import"./index-COonVY99.js";import"./index-Cgz1zuFt.js";import"./useFormValidation-CHfpCGS0.js";import"./useField-DJZk_iyu.js";import"./Button-BqjtFLeK.js";import"./Hidden-C2cWBi-M.js";import"./useLabels-k6HUJMVn.js";import"./useButton-WCkm0bok.js";import"./search-Bg-Hiy8h.js";import"./createLucideIcon-Cv6XV0Hb.js";import"./Button-DoGJ8kEh.js";import"./Button.module-CtQ1deO8.js";import"./x-Dl4JhGUD.js";import"./useLocalizedStringFormatter-5utfLQwv.js";import"./FieldError-D74Ix_ol.js";import"./Text-COY0mYa2.js";import"./Text-BPyIK2Xp.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
