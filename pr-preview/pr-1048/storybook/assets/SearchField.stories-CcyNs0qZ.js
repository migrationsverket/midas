import{S as s}from"./SearchField-rHueiefx.js";import"./iframe-C1J9c0Wx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CSlbmBUy.js";import"./useObjectRef-DApwTN-e.js";import"./useLocalizedStringFormatter-DwMRkuit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DCNReJvn.js";import"./useFocusRing-DnL4kdEi.js";import"./useFocusable-DpJQLcZ9.js";import"./index-DyM7miu3.js";import"./index-D1okWCVE.js";import"./useFormValidation-82wx0tZJ.js";import"./useField-BlvEMn1u.js";import"./Button-sRVT8Zzh.js";import"./utils-D-Kximqc.js";import"./Hidden-D_HMLWkk.js";import"./useLabels-BM_CzPRL.js";import"./useButton-D6tu_qKw.js";import"./search-fahzqp37.js";import"./createLucideIcon-CAqL_OOk.js";import"./ClearButton-Cm0sJJkV.js";import"./Button-oYildcGz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-xPxlWEwQ.js";import"./VisuallyHidden-DFJgjeMD.js";import"./x-CwCncDXT.js";import"./FieldError-C498Gxi4.js";import"./Text-CWSZibPG.js";import"./Text-LXNgL2Cy.js";const A={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,B as __namedExportsOrder,A as default};
