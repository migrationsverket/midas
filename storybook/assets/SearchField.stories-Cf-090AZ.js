import{S as s}from"./SearchField-CKkeI-fy.js";import"./iframe-BbpEZ5aM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9qEZDAW.js";import"./utils-BdrbvCyg.js";import"./useLocalizedStringFormatter-blmY65Ok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DwZyKfQ7.js";import"./useFocusRing-Cb5PiwmC.js";import"./index-B8aZdXXD.js";import"./index-BjFCBoac.js";import"./useFormValidation-zdZQWnsj.js";import"./useField-CD0PHX4d.js";import"./Button-CtkizHV8.js";import"./Hidden-BuJG9RrC.js";import"./useLabels-BZZ1Timc.js";import"./useButton-ldcm24KF.js";import"./search-D0eVHy0i.js";import"./createLucideIcon-CPTKChIs.js";import"./Button-yWoA7-6W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChzbMIxf.js";import"./VisuallyHidden-kdaoL2HV.js";import"./x-Cn4QaZ5X.js";import"./FieldError-BW704g2y.js";import"./Text-8_j-63AW.js";import"./Text-j1d70Osr.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
