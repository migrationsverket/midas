import{S as s}from"./SearchField-CpHXUTjn.js";import"./iframe-B9EGKC1A.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DY41YncH.js";import"./utils-DzN8UgTA.js";import"./useLocalizedStringFormatter-CMmHX6mL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Xv7KN3AS.js";import"./useFocusRing-CQ5RM59H.js";import"./index--DS5PC0t.js";import"./index-DJ0aAN4x.js";import"./useFormValidation-DfmYSHhC.js";import"./useField-DD9fVkS4.js";import"./Button-DlLSg3Nk.js";import"./Hidden-wAD8NsRv.js";import"./useLabels-Bl3P75C2.js";import"./useButton-emt7P429.js";import"./search-DuRKs3Qq.js";import"./createLucideIcon-DF7Nxj94.js";import"./ClearButton-sIB4P6xc.js";import"./Button-DTp360Zp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CvJyQgQK.js";import"./VisuallyHidden-CFcEMtwF.js";import"./x-DnPGMz9F.js";import"./FieldError-Cbj94XFe.js";import"./Text-BE5AMrY4.js";import"./Text-BfUKDAVE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
