import{S as s}from"./SearchField-S8nuZZv0.js";import"./iframe-DFa3xMtH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DlMrxxrC.js";import"./utils-BcZWRu-T.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOpYqqyG.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./useFormValidation-CZZHKzo3.js";import"./useField-ClGbo0E5.js";import"./Button-ocYHggw0.js";import"./Hidden-syp9xi-M.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./search-DuPorX3F.js";import"./createLucideIcon-CG_uvONP.js";import"./ClearButton-B_X6EZtl.js";import"./Button-_PEtoZlZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./VisuallyHidden-BeIfbn57.js";import"./x-BuIg2Jvd.js";import"./FieldError-DDcEoLvd.js";import"./Text-BCIdAzOc.js";import"./Text-CLgVcmAF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
