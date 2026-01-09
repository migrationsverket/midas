import{S as s}from"./SearchField-eHlSD2aL.js";import"./iframe-zfNSE992.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CIBWwPsl.js";import"./utils-B2SfFvVK.js";import"./useLocalizedStringFormatter-CJ_FBxg6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CtJ9LcA7.js";import"./useFocusRing-CI59KcKl.js";import"./index-CnTZzMrs.js";import"./index-D3448pLr.js";import"./useFormValidation-K1-ScRZ6.js";import"./useField-CONU5j_T.js";import"./Button-DC5DfWyL.js";import"./Hidden-DgIIwhxN.js";import"./useLabels-CjQ9ItwL.js";import"./useButton-DIQ3lO2m.js";import"./search-Ca--OFMA.js";import"./createLucideIcon-BiSgLEsQ.js";import"./Button-DBGCil-H.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BJ90h7Po.js";import"./VisuallyHidden-wYdlkGlt.js";import"./x-ahQW_gYz.js";import"./FieldError-tjW0lz2J.js";import"./Text-Bl3fcot9.js";import"./Text-CHvMVhnB.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
