import{S as s}from"./SearchField-XQaY7o_g.js";import"./iframe-pduEcsSH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BOnL6wJ7.js";import"./utils-BDr4Ozea.js";import"./useLocalizedStringFormatter-DvjpYU0E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5nqPH39.js";import"./useFocusRing-DIwubJgO.js";import"./index-CLoMZda8.js";import"./index-BcjOI7az.js";import"./useFormValidation-DEYOuSXO.js";import"./useField-C535uo8a.js";import"./Button-C9Zkv-mX.js";import"./Hidden-CcVqblB0.js";import"./useLabels-vBTL4yFU.js";import"./useButton-CrWzEdIJ.js";import"./search-DLHGNm-g.js";import"./createLucideIcon-CqNy4haF.js";import"./ClearButton-Bd1aZDbT.js";import"./Button-ZdIQo3Zg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CWZjMemu.js";import"./VisuallyHidden-g_-Wgf1Q.js";import"./x-BXHSIKq2.js";import"./FieldError-NJ_dGOmM.js";import"./Text-rxoULlv-.js";import"./Text-CSwEFBIi.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
