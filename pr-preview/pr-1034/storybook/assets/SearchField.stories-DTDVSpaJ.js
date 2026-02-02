import{S as s}from"./SearchField-CtSberpt.js";import"./iframe-CROn2D2x.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bvh10bMV.js";import"./utils-BmCdB7DC.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSeCUWcb.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./useFormValidation-CuSVA-Sh.js";import"./useField-BAp4yqKh.js";import"./Button-rTy-r-bM.js";import"./Hidden-B4kaJ98v.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./search-CP3XmSgF.js";import"./createLucideIcon-BBVnxcWo.js";import"./ClearButton-CTQ5X7NW.js";import"./Button-tcUqF5wD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./VisuallyHidden-BHGp5XeR.js";import"./x-BxhX1Y1g.js";import"./FieldError-DOqGfxSh.js";import"./Text-m0OBBvo5.js";import"./Text-p_fXYEUj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
