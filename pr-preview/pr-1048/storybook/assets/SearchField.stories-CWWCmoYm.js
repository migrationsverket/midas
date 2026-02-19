import{S as s}from"./SearchField-UiVDjTLV.js";import"./iframe-DxANLnMg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzADzBNp.js";import"./utils-BQIgjTYG.js";import"./useLocalizedStringFormatter-BvGnbVVF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnIuUu55.js";import"./useFocusRing-Bfpm0Sir.js";import"./index-BPgjZc5C.js";import"./index-kmI4I0vE.js";import"./useFormValidation-yspdNVqG.js";import"./useField-DO8lpFvf.js";import"./Button-BgFZ3kti.js";import"./Hidden-OELWSN_z.js";import"./number-DfkVkf0F.js";import"./useLabels-B_4RNjuB.js";import"./useButton-CeQGViBo.js";import"./search-BrSA3CV5.js";import"./createLucideIcon-euW2jQkG.js";import"./ClearButton-C7uecFo6.js";import"./Button-ClCUxMP6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nw5RAls2.js";import"./VisuallyHidden-Cp8jWSEw.js";import"./x-W8kckzsu.js";import"./FieldError-BHkzElcM.js";import"./Text-CUhbmYK5.js";import"./Text-DSJVLgNs.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
