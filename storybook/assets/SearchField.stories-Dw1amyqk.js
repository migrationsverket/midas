import{S as s}from"./SearchField-FctDnsEw.js";import"./iframe-kcBhHuaH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DFRisE43.js";import"./utils-DOkcVAYP.js";import"./useLocalizedStringFormatter-CVmu0uNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4_L922K.js";import"./useFocusRing-LSHA0Ws_.js";import"./index-CI0fxBEF.js";import"./index-c5G31wg9.js";import"./useFormValidation-8n81Ub6p.js";import"./useField-BsKXPwbo.js";import"./Button-C0s49uwD.js";import"./Hidden-DMcBSm7p.js";import"./useLabels-DaJadwr0.js";import"./useButton-D1IFZ1te.js";import"./search-g83kRo9I.js";import"./createLucideIcon-DghdNl6J.js";import"./Button-BSuH-ecX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMjkdAmu.js";import"./VisuallyHidden-BNmglq9E.js";import"./x-CPLY_iaX.js";import"./FieldError-DK3Y_c0y.js";import"./Text-DV1iqpLS.js";import"./Text-B-hyuWsp.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
