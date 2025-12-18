import{S as s}from"./SearchField-YyA-LhgX.js";import"./iframe-DpkXPy0n.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-02wgDfoK.js";import"./utils-L94HqgzK.js";import"./useLocalizedStringFormatter-MolCtrmQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7wM31gS.js";import"./useFocusRing-BK2U18QP.js";import"./index-Dz73hEDG.js";import"./index-Jpoz6mxO.js";import"./useFormValidation-CK2dLZcq.js";import"./useField-BAwJb_95.js";import"./Button-CHXzaCY5.js";import"./Hidden-BTD0UQQQ.js";import"./useLabels-BJw1CHux.js";import"./useButton-DOEAHNgg.js";import"./search-Bd9TUL_3.js";import"./createLucideIcon-CfN2dpy0.js";import"./Button-C4Ej8dq3.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-B0-0j7mp.js";import"./VisuallyHidden-Dc6Lrvt7.js";import"./x-Dh9LhewW.js";import"./FieldError-EOCKYRyZ.js";import"./Text-GJ7yr5Nr.js";import"./Text-7Zq3gPgG.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
