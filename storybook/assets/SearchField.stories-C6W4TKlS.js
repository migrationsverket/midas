import{S as s}from"./SearchField-C0Ve5xLt.js";import"./iframe-BmoSYdAA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dzoa7zU0.js";import"./utils-C-CBKXNz.js";import"./useLocalizedStringFormatter-DBGXY-0J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwbTKMX2.js";import"./useFocusRing-DvskDHXD.js";import"./index-BdUd5uZZ.js";import"./index-0cr7ctwJ.js";import"./useFormValidation-UTtv_AD5.js";import"./useField-BpAP4iAL.js";import"./Button-BKQTUCQ9.js";import"./Hidden-2CP7YcQc.js";import"./useLabels-CxCxcB2N.js";import"./useButton-Z7anNymb.js";import"./search-C538CfM8.js";import"./createLucideIcon-B0lPyAXK.js";import"./Button-Br3AxFcp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bc48yrq4.js";import"./VisuallyHidden-sKibH-Cd.js";import"./x-B-e_Lia6.js";import"./FieldError-BD5okbww.js";import"./Text-DaUdSSAr.js";import"./Text-tl12LCyE.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
