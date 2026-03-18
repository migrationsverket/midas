import{S as s}from"./SearchField-AVH-9omg.js";import"./iframe-Cr04uqFn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjFFz4B7.js";import"./utils-CsC3xkQx.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbiX9dI7.js";import"./useFocusRing-iGoUiyfg.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./useFormValidation-BQv-xQD8.js";import"./useField-DlJ3vYWQ.js";import"./Button-BDZhuw74.js";import"./Hidden-BqmZgZ8y.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./search-BBS6o70o.js";import"./createLucideIcon-DucUkfKy.js";import"./ClearButton-DDGK1Yd1.js";import"./x-BMsMY2q6.js";import"./Button-Bskr_9E8.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-afGT4_9p.js";import"./VisuallyHidden-Bkfpb86W.js";import"./FieldError-CM9YGji9.js";import"./Text-SaXXHVxE.js";import"./Text-CMC0Dinw.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
