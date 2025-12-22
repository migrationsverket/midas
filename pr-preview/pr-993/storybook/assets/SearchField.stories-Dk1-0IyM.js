import{S as s}from"./SearchField-B3XzVPsZ.js";import"./iframe-D3VtUWSl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D3RFosaK.js";import"./utils-CJW5kjsb.js";import"./useLocalizedStringFormatter-DFLRg_X9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dq-qzSWo.js";import"./useFocusRing-BNShuMky.js";import"./index-C6GLa6dJ.js";import"./index-Do45vOIK.js";import"./useFormValidation-QpiZFn6j.js";import"./useField-nJGSZbaY.js";import"./Button-DGLiOuZ9.js";import"./Hidden-Dl7lCnqG.js";import"./useLabels-G0Yi_Cff.js";import"./useButton-BTM0ezGo.js";import"./search-CEx9R-t2.js";import"./createLucideIcon-7E-0s_aZ.js";import"./Button-B6kHoh3j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwDdLei2.js";import"./VisuallyHidden-CH7WgZ8s.js";import"./x-Dn9KaCdF.js";import"./FieldError-Bm_vztuN.js";import"./Text-MlqW2q7o.js";import"./Text-NG_CJW3Y.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
