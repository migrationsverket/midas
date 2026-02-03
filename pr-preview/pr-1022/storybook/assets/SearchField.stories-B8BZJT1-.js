import{S as s}from"./SearchField-BhHwisRb.js";import"./iframe-Yd_3Uapz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcJGCIAf.js";import"./utils-6lRm6Tee.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0KmbMod.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./useFormValidation-BuYW0ODW.js";import"./useField-Cd_M8AeU.js";import"./Button-CtSuRHbF.js";import"./Hidden-DV_FdnSF.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./search-BIeh7H92.js";import"./createLucideIcon-BG79myAo.js";import"./ClearButton-CvEsHz55.js";import"./Button-r50ETdbi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./VisuallyHidden-DlJI08Uo.js";import"./x-CszsXm-U.js";import"./FieldError-nG5jWdlR.js";import"./Text-Ppy1xlW_.js";import"./Text-B4Lb8X2G.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
