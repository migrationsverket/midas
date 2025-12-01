import{S as s}from"./SearchField-C_U3Wjy5.js";import"./iframe-CjAeaDoj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CAI5Jvzm.js";import"./utils-jc2ODT2b.js";import"./useLocalizedStringFormatter-NLU3I9ax.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DRp08IkZ.js";import"./useFocusRing-DcmUcrOG.js";import"./index--UrAPuIg.js";import"./index-DGfG4UBj.js";import"./useFormValidation-BTbVcgsZ.js";import"./useField-B0n2WZ8X.js";import"./Button-wONZVWX8.js";import"./Hidden-D9d7GvOT.js";import"./useLabels-DDebeywZ.js";import"./useButton-Du61CN-D.js";import"./search-DWMVG_Gt.js";import"./createLucideIcon-DHEkehRI.js";import"./Button-ghJL-v_J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dnn0n8g2.js";import"./VisuallyHidden-BjFsTXF_.js";import"./x-DmFfo8FI.js";import"./FieldError-DlpJtGZw.js";import"./Text-ak_HQ3cz.js";import"./Text-DvSGG28f.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
