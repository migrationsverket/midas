import{S as s}from"./SearchField-5S0OR6Jh.js";import"./iframe-D6sKX6II.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lIXa58Dk.js";import"./utils-C4RQL2_3.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiqMn53V.js";import"./useFocusRing-CSkB88rB.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./useFormValidation-Bj3o2lyS.js";import"./useField-2xmZNmwq.js";import"./Button-BaCPfcFA.js";import"./Hidden-DGXb4i6s.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./search-B-iCbuml.js";import"./createLucideIcon-sDHC6FPE.js";import"./ClearButton-DMpEQ6R3.js";import"./Button-DCKGBAMV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CajHjEjY.js";import"./VisuallyHidden-D9YxITQY.js";import"./x-2XwCJpa2.js";import"./FieldError-Bvl7FuR6.js";import"./Text-BrckZ8Xv.js";import"./Text-jsf--eUF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
