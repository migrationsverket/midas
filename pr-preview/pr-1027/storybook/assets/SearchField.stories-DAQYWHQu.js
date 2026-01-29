import{S as s}from"./SearchField-BI76ETZD.js";import"./iframe-CPtuJ8HO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLvfzbin.js";import"./utils-Wu2XGcEF.js";import"./useLocalizedStringFormatter-MASyzKxf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRBfHMXE.js";import"./useFocusRing-B2VzlZnk.js";import"./index-BRWS9LDr.js";import"./index-BOHm-TSr.js";import"./useFormValidation-Bpm9_0qx.js";import"./useField-Ds3Z5M45.js";import"./Button-ZJtGU8il.js";import"./Hidden-CqVIwIVB.js";import"./useLabels-BdTBLhcX.js";import"./useButton-Cj3FTjdJ.js";import"./search-DJvnKEXt.js";import"./createLucideIcon-CZ8AHqP_.js";import"./ClearButton-C8w37WXy.js";import"./Button-D3yQOAis.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BO2qvTML.js";import"./VisuallyHidden-BXwhVzS2.js";import"./x-59_pYRVt.js";import"./FieldError-DMwa18ms.js";import"./Text-Xck8zNqM.js";import"./Text-BHQtEdFP.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
