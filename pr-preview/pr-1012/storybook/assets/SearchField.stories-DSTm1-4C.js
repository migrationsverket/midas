import{S as s}from"./SearchField-hnPXpYqp.js";import"./iframe-Cni-JKW8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bv7XzANZ.js";import"./utils-BBgPw1Ze.js";import"./useLocalizedStringFormatter-CLIXHxcQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Btzc2t-U.js";import"./useFocusRing-ecgGW1pG.js";import"./index-CCUYZc-T.js";import"./index-BOJ7Xdv4.js";import"./useFormValidation-CuaWKPta.js";import"./useField-BrqrTpzE.js";import"./Button-XWhDywVU.js";import"./Hidden-BMEQANNf.js";import"./useLabels-CIS6hw6Q.js";import"./useButton-nRwKGbmO.js";import"./search-CDS_od0b.js";import"./createLucideIcon-Bi-qWE7K.js";import"./ClearButton-CmkUq0i_.js";import"./Button-CLd0MwQu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGbBMSU.js";import"./VisuallyHidden-D3ce5_bP.js";import"./x-Bt2kzMmd.js";import"./FieldError-C2WkJOys.js";import"./Text-BaLCHv3_.js";import"./Text-DfMa_H_z.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
