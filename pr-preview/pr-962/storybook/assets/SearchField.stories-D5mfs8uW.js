import{S as s}from"./SearchField-Dc2_s8E6.js";import"./iframe-wyIkUD1D.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CXqW8AC6.js";import"./utils-CayfEQ5F.js";import"./useLocalizedStringFormatter-Cl-aTEus.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DNcEQ0aI.js";import"./useFocusRing-BjDxUBjo.js";import"./index-C8_xscMq.js";import"./index-BVT2M0jp.js";import"./useFormValidation-Dw4OIyqs.js";import"./useField-BtkUA_cy.js";import"./Button-DEVYr1z-.js";import"./Hidden-CxKc16eE.js";import"./useLabels-B7l2UtXF.js";import"./useButton-DOQkadi1.js";import"./search-Bbe2TC6D.js";import"./createLucideIcon-BGFGME34.js";import"./Button-DPYxe-X7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChSX0_b-.js";import"./VisuallyHidden-PWbTykwh.js";import"./x-B0-nOphV.js";import"./FieldError-CawbUy3c.js";import"./Text-Bd9qAe_e.js";import"./Text-CyLswFoN.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
