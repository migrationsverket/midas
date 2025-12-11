import{S as s}from"./SearchField-Ckn1daea.js";import"./iframe-CmunamRf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CMrkhqrU.js";import"./utils-Do45Qf3w.js";import"./useLocalizedStringFormatter-BdmLjVnV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaFTgdMk.js";import"./useFocusRing-DFmjP9RI.js";import"./index-BzS_2Nae.js";import"./index-CuMnXGnl.js";import"./useFormValidation-e1uzRsDW.js";import"./useField-BNCtOcHp.js";import"./Button-I_qPWlHX.js";import"./Hidden-UzlcYpta.js";import"./useLabels-TxZzTxtJ.js";import"./useButton-DK3uhVHY.js";import"./search-Bmft6bqv.js";import"./createLucideIcon--1kAEzMd.js";import"./Button-BDNFHLWn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B-CkpdIL.js";import"./VisuallyHidden-Cp_LZnsq.js";import"./x-BRYbY-gr.js";import"./FieldError-DG3EzHGA.js";import"./Text-7Mv1aRO9.js";import"./Text-DoOol8PB.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
