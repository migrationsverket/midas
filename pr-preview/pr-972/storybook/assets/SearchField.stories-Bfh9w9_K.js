import{S as s}from"./SearchField-C2E0vX_Q.js";import"./iframe-Ix5wRpaN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8ejMBKU.js";import"./utils-IjPZU40W.js";import"./useLocalizedStringFormatter-D-Y0AvCi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZAQ4bdCS.js";import"./useFocusRing-DQ3B9kj8.js";import"./index-BxboPkxI.js";import"./index-DhXNeZr5.js";import"./useFormValidation-BLyauN7P.js";import"./useField-B4LhRUUT.js";import"./Button-BM7g1M5L.js";import"./Hidden-CNH6e1Wd.js";import"./useLabels-Duwc-TYD.js";import"./useButton-Bj416gmr.js";import"./search-Co_MkTlV.js";import"./createLucideIcon-YU44cn6f.js";import"./Button-DyCCzjyo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DOQfTjJs.js";import"./VisuallyHidden-CXRQ0hU3.js";import"./x-yWcNl91_.js";import"./FieldError-BZLcbguk.js";import"./Text-C--26gLT.js";import"./Text-B11VOrpZ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
