import{S as s}from"./SearchField-C3SyUrC9.js";import"./iframe-COQoy-tb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BLJZbN0w.js";import"./utils-dUj1FPII.js";import"./useLocalizedStringFormatter-CW4fmwCZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ikblrldl.js";import"./useFocusRing-KEMdm9OC.js";import"./index-D-LNSu5d.js";import"./index-Cy0cFfBq.js";import"./useFormValidation-Dac5P0TX.js";import"./useField-CuZTH_zG.js";import"./Button-6ISKDJI6.js";import"./Hidden-CNwHy1Fg.js";import"./useLabels-Dul859Iz.js";import"./useButton-C5PyE_o4.js";import"./search-C_ayFnZY.js";import"./createLucideIcon-uFOmHGhK.js";import"./Button-COWVz2rh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-ESf0SP.js";import"./VisuallyHidden-Cxp4MCQV.js";import"./x-BN0kx0eU.js";import"./FieldError-lHGiCpDB.js";import"./Text-B03ZqDJP.js";import"./Text-C_IsDOQl.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
