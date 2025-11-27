import{S as s}from"./SearchField-p0A_QXcZ.js";import"./iframe-C4RBV6GX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnbLjGs7.js";import"./utils-BM88gxdX.js";import"./useLocalizedStringFormatter-CkJZKvBs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrN6gpha.js";import"./useFocusRing-Pgaw3Tz8.js";import"./index-jywy1dsl.js";import"./index-ChQorhKd.js";import"./useFormValidation-B1xC7qTC.js";import"./useField-mBcm3pN2.js";import"./Button-B_dAQwQ7.js";import"./Hidden-J-idEOIL.js";import"./useLabels-DAt0_SEo.js";import"./useButton-CORpOC_p.js";import"./search-U9VoFXX_.js";import"./createLucideIcon-BJxYqGO_.js";import"./Button-5X29Z93h.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C2kDDKER.js";import"./VisuallyHidden-C_g1YpNq.js";import"./x-Ce-e2aw1.js";import"./FieldError-ChRM9hBQ.js";import"./Text-C8QGPdDY.js";import"./Text-CbFJ3jze.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
