import{S as s}from"./SearchField-QJwYmR3h.js";import"./iframe-DvQx2gHF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DOrx9kOQ.js";import"./utils-kfQmERKd.js";import"./useLocalizedStringFormatter--PBbunYI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZzukU8p.js";import"./useFocusRing-DA1DKtBL.js";import"./index-B92ZKY4H.js";import"./index-DZ0gSeKU.js";import"./useFormValidation-Dif47p0R.js";import"./useField-BhZGmss7.js";import"./Button-7kzFrNDU.js";import"./Hidden-CjIUyCHW.js";import"./useLabels-CZfFJAUf.js";import"./useButton-Bt6boJfA.js";import"./search-TL6ZLGuj.js";import"./createLucideIcon-B90TrqxK.js";import"./Button-LMMkuH17.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DlX39nGo.js";import"./VisuallyHidden-25PLEdNG.js";import"./x-C-u_grC0.js";import"./FieldError-DS02Wc0O.js";import"./Text-DEDKiYgd.js";import"./Text-CeKhBkxD.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
