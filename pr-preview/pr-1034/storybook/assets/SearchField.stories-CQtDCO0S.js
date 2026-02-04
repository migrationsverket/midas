import{S as s}from"./SearchField-9eum4qWw.js";import"./iframe-CRW892uF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1CLjRGB.js";import"./utils-Cy5rPxYn.js";import"./useLocalizedStringFormatter-yyiVnhi3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BQlcLRsS.js";import"./useFocusRing-DYPhP7ff.js";import"./index-CuPhnfQx.js";import"./index-C-PwSL9X.js";import"./useFormValidation-CkXNtAlg.js";import"./useField-Dsdw6Dxh.js";import"./Button-73ueEsI0.js";import"./Hidden-DVd7J3jb.js";import"./useLabels-ChrJAk9N.js";import"./useButton-DDquVdTc.js";import"./search-C4fD8ngJ.js";import"./createLucideIcon-B-cKx2d-.js";import"./ClearButton-csMzHmcc.js";import"./Button-zEqn1U6h.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zR_q9Jv_.js";import"./VisuallyHidden-DX9a97Gh.js";import"./x-3lOLVs8k.js";import"./FieldError-BQcQWUaq.js";import"./Text-BMcxzv8r.js";import"./Text-Bllz5--I.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
