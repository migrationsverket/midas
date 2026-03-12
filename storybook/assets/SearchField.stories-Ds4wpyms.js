import{S as s}from"./SearchField-Eu131Buj.js";import"./iframe-8kNNjGPs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cu0NDb2D.js";import"./utils-BUzQLJoB.js";import"./useLocalizedStringFormatter-gfDb4gw1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCbURsre.js";import"./useFocusRing-DOlZhwGN.js";import"./index-vpPlhTCt.js";import"./index-CY9KIRXZ.js";import"./useFormValidation-C8-qwhmM.js";import"./useField-B_eNRLp8.js";import"./Button-BMyY3aLP.js";import"./Hidden-jzFhZXSA.js";import"./useLabels-C_3EwP0f.js";import"./useButton-D_bc-eEZ.js";import"./search-Bh4kdCY5.js";import"./createLucideIcon-D0Msiesm.js";import"./ClearButton-B6y7C2n9.js";import"./x-DUSFswnG.js";import"./Button-BdMqRHYH.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-c_MYqT_W.js";import"./VisuallyHidden-BY2ZOU88.js";import"./FieldError-DFfowcOQ.js";import"./Text-DzkFi4rT.js";import"./Text-CS5lJlaQ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
