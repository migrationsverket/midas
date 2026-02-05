import{S as s}from"./SearchField-Bu1Z9PZc.js";import"./iframe-DgMSVBJj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKuwHYa2.js";import"./utils-BUVZQFkZ.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JEfR7FTO.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./useFormValidation-k09FZdMi.js";import"./useField-B4BmtOyh.js";import"./Button-D-J1jvHp.js";import"./Hidden-B0_wOBGj.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./search-wXjRf_75.js";import"./createLucideIcon-xbipfE59.js";import"./ClearButton-BTxVQeHB.js";import"./Button-Cx_rtnFw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./VisuallyHidden-MCla8tVA.js";import"./x-PtDtzKM-.js";import"./FieldError-DhkdCeIN.js";import"./Text-C3v5M0X6.js";import"./Text-D4BWFKQS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
