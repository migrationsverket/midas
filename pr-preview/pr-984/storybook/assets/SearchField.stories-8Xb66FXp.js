import{S as s}from"./SearchField-Vu9LnxlI.js";import"./iframe-D0_uqlPy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFe0ETRm.js";import"./utils-DZkN7PAb.js";import"./useLocalizedStringFormatter-D3uc4cjF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bbr-1mQq.js";import"./useFocusRing-Dfa_i0W6.js";import"./index-pB_UCRcv.js";import"./index-Ci7Mui0x.js";import"./useFormValidation-CyADXFmk.js";import"./useField-B5VgGyIk.js";import"./Button-eXHb7oON.js";import"./Hidden-BjgfQNZ3.js";import"./useLabels-BQfi_YAD.js";import"./useButton-BfeAEr6h.js";import"./search-CEST_VRI.js";import"./createLucideIcon-Ciz_2pai.js";import"./Button-DymjvzeZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgmTFAS9.js";import"./VisuallyHidden-D7lPxREE.js";import"./x-COQunIjs.js";import"./FieldError-DP3Y5PAe.js";import"./Text-DFiA7Wnk.js";import"./Text-B1302s0A.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
