import{S as s}from"./SearchField-B6Y4fC2Z.js";import"./iframe-8IAuJWNM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B1Gkxy2y.js";import"./utils-DyygkSlh.js";import"./useLocalizedStringFormatter-BLtacC3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BcsYtwGj.js";import"./useFocusRing-B47DL3hX.js";import"./index-CB6TLzp4.js";import"./index-BmMgCWbD.js";import"./useFormValidation-BTqQXxAG.js";import"./useField-KDqZZJ02.js";import"./Button-BA4G7Dp7.js";import"./Hidden-BPY21Mhp.js";import"./useLabels-Cjx1sCZW.js";import"./useButton-DKZseVPF.js";import"./search-BgKCwlL2.js";import"./createLucideIcon-B5ClGLmI.js";import"./Button-DaIiUukL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVRAeowb.js";import"./VisuallyHidden-BFkso3TE.js";import"./x-ChuqJttK.js";import"./FieldError-CadBMv3M.js";import"./Text-BjJSlFEE.js";import"./Text-BPO4namz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
