import{S as s}from"./SearchField-DW7T5bvO.js";import"./iframe-BOu6r4-L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--hsMgjoo.js";import"./utils-Of-4zx3T.js";import"./useLocalizedStringFormatter-BW64KWwC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHG6MITi.js";import"./useFocusRing-CFbRrjJi.js";import"./index-DqaHjeC4.js";import"./index-CMXhJPlL.js";import"./useFormValidation-BvCWzLf5.js";import"./useField-WPA3bolz.js";import"./Button-B0Z6PH11.js";import"./Hidden-2Cq_win6.js";import"./useLabels-BrgyP2gh.js";import"./useButton-BT4cJEqS.js";import"./search-C4fVKg46.js";import"./createLucideIcon-D3MExOcj.js";import"./Button-ndCSfgaE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTxkkben.js";import"./VisuallyHidden-Dj8ZJDI7.js";import"./x-DLkIoQKB.js";import"./FieldError-D7y_D_tp.js";import"./Text-zopR0-zB.js";import"./Text-BqeEVLWH.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
