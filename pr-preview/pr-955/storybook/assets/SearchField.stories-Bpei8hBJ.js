import{S as s}from"./SearchField-xIfIo4pv.js";import"./iframe-oXsIpbMB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKAJ8-LK.js";import"./utils-B-O4b79N.js";import"./useLocalizedStringFormatter-BAW-PBtE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwLFPuR7.js";import"./useFocusRing-BW9P1ZR5.js";import"./index-BxWuJyFF.js";import"./index-CmStSKjz.js";import"./useFormValidation-CniWOrWp.js";import"./useField-j07Ff-ne.js";import"./Button-8cpKG8rd.js";import"./Hidden-WXuZRkqT.js";import"./useLabels-CoOIyE91.js";import"./useButton-Dsjjlw5w.js";import"./search-BAi4Kl-t.js";import"./createLucideIcon-CifL85wv.js";import"./Button-BuFobGoF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-IfFIdOWG.js";import"./VisuallyHidden-D-5RikPd.js";import"./x-B0uyzYCV.js";import"./FieldError-BTJfSvTO.js";import"./Text-D73taSIa.js";import"./Text-BH5S53Oz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
