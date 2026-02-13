import{S as s}from"./SearchField-DmQLXLjr.js";import"./iframe-BAZk80fE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cu0nMJYp.js";import"./utils-BhwQ1U93.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B7oXgd8v.js";import"./useFocusRing-KQoMJM9B.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./useFormValidation-3uDySqxb.js";import"./useField-CzfiE8Id.js";import"./Button-eLqhqo_k.js";import"./Hidden-CYtm9s7u.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./search-CmZBp0Pk.js";import"./createLucideIcon-DfErYrVe.js";import"./ClearButton-CXD78f5p.js";import"./Button-BOvHyuxs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";import"./VisuallyHidden-Coy_xA-f.js";import"./x-BN85pv_s.js";import"./FieldError-DkhBXd6b.js";import"./Text-Y_F9Qc3q.js";import"./Text-Bot8P-aJ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
