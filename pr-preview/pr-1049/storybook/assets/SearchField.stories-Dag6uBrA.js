import{S as s}from"./SearchField-Yxio_oLI.js";import"./iframe-8LQjSoV-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRRCr0-V.js";import"./utils-D4ezzWJc.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DLgBnWvT.js";import"./useFocusRing-eCeeo32D.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./useFormValidation-CZUIQIsK.js";import"./useField-Bj5nGtmw.js";import"./Button-B1ovmxx6.js";import"./Hidden-DMawGuP2.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./search-CfLYKy8z.js";import"./createLucideIcon-DK8ikGDs.js";import"./ClearButton--BIu3mS-.js";import"./Button-BHfZAxDJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./x-Cllv4JrD.js";import"./FieldError-ZO43sKQE.js";import"./Text-Ba5DRcdW.js";import"./Text-B7DoZjLQ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
