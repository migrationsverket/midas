import{S as s}from"./SearchField-DiirFWSy.js";import"./iframe-Cqv18ImU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DY68Wkyd.js";import"./utils-DzbyOGZ_.js";import"./useLocalizedStringFormatter-7YQVF9yJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oNIf8dly.js";import"./useFocusRing-V1CF2lyh.js";import"./index-BZmzkW00.js";import"./index-Nt-ezTyj.js";import"./useFormValidation-DZCoeM0o.js";import"./useField-DcjSv-D1.js";import"./Button-CHZfUzDl.js";import"./Hidden-D8Gg8WaH.js";import"./useLabels-CNsjRHPU.js";import"./useButton-DDIuuTKh.js";import"./search-hAdkNee7.js";import"./createLucideIcon-Dvn_rsFU.js";import"./Button-DCnMOEqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAA2MslF.js";import"./VisuallyHidden-BRuyO-og.js";import"./x-DoaJGzfS.js";import"./FieldError-Cwk39N_k.js";import"./Text-B830MCwt.js";import"./Text-DteYonWN.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
