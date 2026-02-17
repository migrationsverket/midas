import{S as s}from"./SearchField-C7by3QFs.js";import"./iframe-E1AQR6fx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzUy243X.js";import"./utils-C9k_Z1-L.js";import"./useLocalizedStringFormatter-Cs1nU2fr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CiQLJwP_.js";import"./useFocusRing-ClTdqGvY.js";import"./index-BY2IQZHk.js";import"./index-LL_riRvH.js";import"./useFormValidation-rmf8_tul.js";import"./useField-DWsbBHmV.js";import"./Button-Dcl0k1ed.js";import"./Hidden-9DB17Ws8.js";import"./number-DfkVkf0F.js";import"./useLabels-BBvY9IMA.js";import"./useButton-CI0sJCD2.js";import"./search-1eQhC6ht.js";import"./createLucideIcon-D8ApGr_r.js";import"./ClearButton-DndjT6LD.js";import"./Button-IKHtJ1-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dtq-c4fz.js";import"./VisuallyHidden-Bpe1pimA.js";import"./x-CmXiTMgS.js";import"./FieldError-EwGM1OTM.js";import"./Text-Dbmjj9FJ.js";import"./Text-CEr6kfZB.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
