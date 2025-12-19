import{S as s}from"./SearchField-Dtpr_iMx.js";import"./iframe-CAhUTzpa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BCuX3ll3.js";import"./utils-BBEb1i5a.js";import"./useLocalizedStringFormatter-Dooq5aoS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DdEC4wKZ.js";import"./useFocusRing-DXkBxwcs.js";import"./index-laAtK-vd.js";import"./index-C0V27OqG.js";import"./useFormValidation-BaOTM6Qe.js";import"./useField-CcZ_CJQd.js";import"./Button-Bw4aoosc.js";import"./Hidden-BSm-jApx.js";import"./useLabels-LVaI7Ckp.js";import"./useButton-30T4O4rB.js";import"./search-CvkEGn2W.js";import"./createLucideIcon-d4-YdXSh.js";import"./Button-CEwmyXrj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cg4zfByW.js";import"./VisuallyHidden-DXeRsBp-.js";import"./x-BoMw_Obi.js";import"./FieldError-BNkxmj-u.js";import"./Text-DytUCpzS.js";import"./Text-Dc50-ZiZ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
