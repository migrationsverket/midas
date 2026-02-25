import{S as s}from"./SearchField-DdlyOjfl.js";import"./iframe-BIYycVtF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C6aaDo-s.js";import"./useObjectRef-Dnttuos9.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D41AFEDa.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./useFormValidation-CJX6c1NG.js";import"./useField-BJy-oEwD.js";import"./Button-xCxR0kSd.js";import"./utils-CQyQJNz7.js";import"./Hidden-AGqSstUV.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./search-DWwaHMq3.js";import"./createLucideIcon-S6aGlHi1.js";import"./ClearButton-DoqMW884.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./VisuallyHidden-CK9a4W9O.js";import"./x-CohE59zs.js";import"./FieldError-BsWqYage.js";import"./Text-A1nWhzuO.js";import"./Text-B1YyVTq1.js";const A={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,B as __namedExportsOrder,A as default};
