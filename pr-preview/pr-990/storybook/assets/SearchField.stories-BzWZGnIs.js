import{S as s}from"./SearchField-DjynBjnI.js";import"./iframe-BGGCyDgM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B0GTzqoE.js";import"./utils-DO-F69_Y.js";import"./useLocalizedStringFormatter-DTenb4Ru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-J3PSPvGh.js";import"./useFocusRing-CgXHCqVS.js";import"./index-D897gEwO.js";import"./index-B5Wjey1h.js";import"./useFormValidation-FPzZWdfk.js";import"./useField-7woY0xAJ.js";import"./Button-Cx7yfezp.js";import"./Hidden-C8IUZiWg.js";import"./useLabels-BYquqqxS.js";import"./useButton-BLQQLHjW.js";import"./search-Na0gHus9.js";import"./createLucideIcon-DYtt1YAX.js";import"./Button-CbQXvBqq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEbUSZ1g.js";import"./VisuallyHidden-i3QblTNI.js";import"./x-DG2uGBCX.js";import"./FieldError-Dl2BDJut.js";import"./Text-eYsAB99o.js";import"./Text-f8Fpe_5q.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
