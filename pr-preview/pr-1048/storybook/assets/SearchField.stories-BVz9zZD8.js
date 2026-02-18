import{S as s}from"./SearchField-D5V2Za7Z.js";import"./iframe-DGcUF2qp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BY4jsp46.js";import"./utils-C-g9IEHW.js";import"./useLocalizedStringFormatter-M0xxk-YJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYywxUeg.js";import"./useFocusRing-C3JE--XH.js";import"./index-Bg1abCEO.js";import"./index-6FNMycov.js";import"./useFormValidation-BkBYuxfH.js";import"./useField-C6LcJdMu.js";import"./Button-9W9ESKk6.js";import"./Hidden-DOf4aCVT.js";import"./number-DfkVkf0F.js";import"./useLabels-BWET_vJS.js";import"./useButton-CxyzWvKY.js";import"./search-DTFFD0kf.js";import"./createLucideIcon-vaKNso9Q.js";import"./ClearButton-CuTB_EQZ.js";import"./Button-BDoKvS7o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-E6uNiOFA.js";import"./VisuallyHidden-CFai959P.js";import"./x-CQouQTE6.js";import"./FieldError-BuaTWgbZ.js";import"./Text-DL34Z6xI.js";import"./Text-DxpETNh1.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
