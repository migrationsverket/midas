import{S as s}from"./SearchField-DgKTFGD7.js";import"./iframe-DfM6kEgP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-kzArnBYE.js";import"./utils-D8PGfxYb.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BAx9P39W.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./useFormValidation-BQsgNnye.js";import"./useField-DDZqH5hv.js";import"./Button-Czn9lX0K.js";import"./Hidden-B-o_Z7ot.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./search-DyJ2snKl.js";import"./createLucideIcon-DO7HuIXt.js";import"./ClearButton-BbQzb-A8.js";import"./x-YUyJRI2G.js";import"./Button-6n3SyLgE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./VisuallyHidden-B1MOHF_-.js";import"./FieldError-D7g57v3N.js";import"./Text-BibBkfuq.js";import"./Text-19RelmEi.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
