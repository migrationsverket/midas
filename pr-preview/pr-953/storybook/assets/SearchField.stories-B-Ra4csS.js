import{S as s}from"./SearchField-B0R6HaAs.js";import"./iframe-krU3lnll.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BaSC3gVY.js";import"./utils-DnS0_qQ0.js";import"./useLocalizedStringFormatter-DZ80bzWS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQh1ecGs.js";import"./useFocusRing-CWzVObSZ.js";import"./index-C3RV6eBu.js";import"./index-VFJCran0.js";import"./useFormValidation-D2kRzjUH.js";import"./useField-D2HtNlVL.js";import"./Button-BU6Lkb_Z.js";import"./Hidden-VnIe4cgE.js";import"./useLabels-CUZsRNLj.js";import"./useButton-D0AxcNmg.js";import"./search-DRVwSm4D.js";import"./createLucideIcon-DPakKbXd.js";import"./Button-C-0GV_cb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B3TpQ19y.js";import"./VisuallyHidden-C3s2Crnt.js";import"./x-C81gg8f4.js";import"./FieldError-BZw0hilX.js";import"./Text-DbFNQrMd.js";import"./Text-CRDp8VCP.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
