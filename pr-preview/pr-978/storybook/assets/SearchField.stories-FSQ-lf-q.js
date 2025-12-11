import{S as s}from"./SearchField-DPxxsbWk.js";import"./iframe-mw-3Wqs6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--wR3WwaU.js";import"./utils-CYxbFJyZ.js";import"./useLocalizedStringFormatter-BCBlkbeT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CWmSUzgl.js";import"./useFocusRing-89DUUa4N.js";import"./index-zd9D6jNJ.js";import"./index-DA11V2mi.js";import"./useFormValidation-yYLpoRhw.js";import"./useField-DomG1e7H.js";import"./Button-Db-TTM-V.js";import"./Hidden-DYrMFcxf.js";import"./useLabels-DdJABAh2.js";import"./useButton-XGSOFvEQ.js";import"./search-BZjtw7p_.js";import"./createLucideIcon-DugDWxFe.js";import"./Button-Ca1dkGu6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNqwZTZL.js";import"./VisuallyHidden-D6wLmm0f.js";import"./x-LtoPVlfO.js";import"./FieldError-9R24nCVk.js";import"./Text-D7lmaY_E.js";import"./Text-DGTCcOxe.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
