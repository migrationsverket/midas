import{S as s}from"./SearchField-B3Q5jvav.js";import"./iframe-BGyjMY2A.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-tPA4VUhi.js";import"./utils-CTEL-aPn.js";import"./useLocalizedStringFormatter-CHCXaTKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CS7pAb_c.js";import"./useFocusRing-Qz5ydHqq.js";import"./index-BSnPUmLp.js";import"./index-CExSyphq.js";import"./useFormValidation-CatHWqP6.js";import"./useField-BU525k87.js";import"./Button-DI8VxDKE.js";import"./Hidden-7YyYTdjK.js";import"./useLabels-BKJWTw5n.js";import"./useButton-Cgw_GPMG.js";import"./search-D26VKBWx.js";import"./createLucideIcon-Dt69t0iG.js";import"./Button-DoINo-pg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_mvD30RP.js";import"./VisuallyHidden-CeB8DNep.js";import"./x-o3LNZlJS.js";import"./FieldError-B1WUXMvL.js";import"./Text-yiC38_9n.js";import"./Text-ZEUEevv6.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
