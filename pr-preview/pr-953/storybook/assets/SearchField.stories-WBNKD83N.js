import{S as s}from"./SearchField-Cv9RnggC.js";import"./iframe-BJQsUCMR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DJCuFP0v.js";import"./utils-Cr7K8WJR.js";import"./useLocalizedStringFormatter-CePtc58O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-pZ61dwV1.js";import"./useFocusRing-DlRtsXUX.js";import"./index-B-fdDFbP.js";import"./index-BHjUdtJS.js";import"./useFormValidation-BiEbn1a3.js";import"./useField-CaQW11iG.js";import"./Button-BQ9IF-8b.js";import"./Hidden-o6EY_DbG.js";import"./useLabels-BH12XE_O.js";import"./useButton-CrSiIYdq.js";import"./search-Bnsa6m5X.js";import"./createLucideIcon-DwyOL3g6.js";import"./Button-Cuv97NKO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMFy_0c_.js";import"./VisuallyHidden-CIBvHJ7K.js";import"./x-DY2fwmz2.js";import"./FieldError-zgxijUai.js";import"./Text-Cc4_9gUZ.js";import"./Text-BimK0k6U.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
