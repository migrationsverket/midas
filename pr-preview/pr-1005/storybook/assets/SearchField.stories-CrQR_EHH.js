import{S as s}from"./SearchField-BkMaUBFT.js";import"./iframe-BFGJdV-R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BkGWyaov.js";import"./utils-kIk1YPQB.js";import"./useLocalizedStringFormatter-CssQMkou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfmVvTo2.js";import"./useFocusRing-DJbT0PkJ.js";import"./index-q0PAT9Q8.js";import"./index-Bgs2Im9U.js";import"./useFormValidation-CfMbP7bF.js";import"./useField-BaW-osIe.js";import"./Button-a7m7Ei1w.js";import"./Hidden-B0o1kVdW.js";import"./useLabels-ENg7mHVd.js";import"./useButton-DDbtau5_.js";import"./search-DTrheVPW.js";import"./createLucideIcon-C3uE9ls3.js";import"./Button-CC7hJvPh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_5YXSYz.js";import"./VisuallyHidden-C8v0qjRB.js";import"./x-B48QovPv.js";import"./FieldError-CQJGsK4z.js";import"./Text-BTml81CB.js";import"./Text-CkbWQQrW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
