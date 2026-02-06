import{S as s}from"./SearchField-M5mRh1sY.js";import"./iframe-BMyiRd9K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CG4KMb6R.js";import"./utils-C26E_E_V.js";import"./useLocalizedStringFormatter-q3GhEdbW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaYoFozS.js";import"./useFocusRing-KDIp_VHj.js";import"./index-DzAiOFl3.js";import"./index-BSTk-fI9.js";import"./useFormValidation-BDXHTcoF.js";import"./useField-ChfD_3VJ.js";import"./Button-CcqdNx43.js";import"./Hidden-CbMhbGj6.js";import"./useLabels-BskVawR9.js";import"./useButton-C7s-887l.js";import"./search-Bd5K44JW.js";import"./createLucideIcon-7JtAUgGZ.js";import"./ClearButton-DXxguFuX.js";import"./Button-EwGc72xf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3VS7mKox.js";import"./VisuallyHidden-d5nRRxHR.js";import"./x-D1zGWb4X.js";import"./FieldError-DXRdy55K.js";import"./Text-BTUDznp2.js";import"./Text-DkNX6WfN.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
