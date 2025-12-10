import{S as s}from"./SearchField-BF_Y3F9m.js";import"./iframe--li1tHgy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6TeioUq.js";import"./utils-d7pE4sht.js";import"./useLocalizedStringFormatter-B9gNfdrG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DAEabwzg.js";import"./useFocusRing-Baa8Ke6W.js";import"./index-BMTXQDlD.js";import"./index-na2T25w4.js";import"./useFormValidation-Dg7o7GpV.js";import"./useField-SbE2AaK3.js";import"./Button-DhqFImjK.js";import"./Hidden-DN3rilfW.js";import"./useLabels-CQth3QJU.js";import"./useButton-DI4U2DL6.js";import"./search-DzKSztoy.js";import"./createLucideIcon-DFHtXhgj.js";import"./Button-nsixNk6A.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjA8Yn1n.js";import"./VisuallyHidden-BrGVJhu4.js";import"./x-CZtxyvPc.js";import"./FieldError-BS8UBwNs.js";import"./Text-C6CT3M7i.js";import"./Text-CGSXZbqm.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
