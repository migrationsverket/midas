import{S as s}from"./SearchField-B-5O0G4p.js";import"./iframe-DzWavng1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lHw30NeI.js";import"./utils-DZ771gTW.js";import"./useLocalizedStringFormatter-DkL1-w21.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrWim-03.js";import"./useFocusRing-BOScdwIf.js";import"./index-BqUojVv0.js";import"./index-3sde6yQY.js";import"./useFormValidation-Bm0uK9_x.js";import"./useField-DgP7ROp1.js";import"./Button-BvaWFHt-.js";import"./Hidden-ZA6QDtq5.js";import"./useLabels-roEh_XUF.js";import"./useButton-CgRo_gBu.js";import"./search-BkiXrV1c.js";import"./createLucideIcon-CC0DruiB.js";import"./Button-C9cedukw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-enb0CHJT.js";import"./VisuallyHidden-u0dD8pVG.js";import"./x-CWmC_5LK.js";import"./FieldError-B0hGaN2H.js";import"./Text-ePkty29E.js";import"./Text-DA35gZzh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
