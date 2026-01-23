import{S as s}from"./SearchField-Bwk_lhLt.js";import"./iframe-BDAeyV_L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4b2AaJr.js";import"./utils-QbpHp2iH.js";import"./useLocalizedStringFormatter-BWgc5TPM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRJvIvPa.js";import"./useFocusRing-DZ9oxgDy.js";import"./index-bebXLijF.js";import"./index-BxXpe6Uv.js";import"./useFormValidation-DaMPzBFa.js";import"./useField-C7GoH2ks.js";import"./Button-hcT7fu5t.js";import"./Hidden-CWKhTNWg.js";import"./useLabels-CJ7PqtrQ.js";import"./useButton-yTtoFlYV.js";import"./search-CmItFoGK.js";import"./createLucideIcon-DrPkV-uJ.js";import"./ClearButton--Ltdsmg6.js";import"./Button-CzvpZwUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJ4AsDN.js";import"./VisuallyHidden-C7amzv03.js";import"./x-Bo3luZEL.js";import"./FieldError-nYxCLXng.js";import"./Text-CuLPV3Pn.js";import"./Text-CgZVKuAu.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
