import{S as s}from"./SearchField-USory7Od.js";import"./iframe-DuE5icfx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C06eYFfj.js";import"./utils-ClhP-E5R.js";import"./useLocalizedStringFormatter-mdX2hkSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CwOwuKg2.js";import"./useFocusRing-C6UsRVMD.js";import"./index-BKNEv364.js";import"./index-jcTA0EzM.js";import"./useFormValidation-Bbe7QGfP.js";import"./useField-DnEzaulG.js";import"./Button-CHVND5il.js";import"./Hidden-CGryAwqK.js";import"./useLabels-NFESUEmH.js";import"./useButton-Dpm-9eMP.js";import"./search-gI5m81qy.js";import"./createLucideIcon-Cky2pY6t.js";import"./ClearButton-qvhhVKAP.js";import"./Button-Bv12ZKrk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdcJq8tj.js";import"./VisuallyHidden-WoYUvN7P.js";import"./x-BFEUyRfl.js";import"./FieldError-BFyaRGX_.js";import"./Text-BXig9__r.js";import"./Text-CskgBW_y.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
