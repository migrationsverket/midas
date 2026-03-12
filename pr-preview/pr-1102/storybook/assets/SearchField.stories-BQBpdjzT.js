import{S as s}from"./SearchField-DozM3FUg.js";import"./iframe-BKt9EFfY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZs3lQsK.js";import"./utils-UHPC9nWZ.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuVFyPkC.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./useFormValidation-Dsa57_F2.js";import"./useField-DoDrCpUl.js";import"./Button-54WAdtvn.js";import"./Hidden-BIzqGf_Y.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./search-BcIqytgX.js";import"./createLucideIcon-CwzpYKvj.js";import"./ClearButton-n75y9QZM.js";import"./x-DbaGL1T9.js";import"./Button-BP3_jhUy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./VisuallyHidden-oXJqa0w4.js";import"./FieldError-x-AT8pl1.js";import"./Text-Cx5eezfb.js";import"./Text-QG4NB2hl.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
