import{S as s}from"./SearchField-CHbmFudT.js";import"./iframe-DwI68eck.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4AMrZHZ.js";import"./utils-Dw1S_uWj.js";import"./useLocalizedStringFormatter-C-X_uo4l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BqGWXZj6.js";import"./useFocusRing-DB0Vn7oI.js";import"./index-DyjIQlNW.js";import"./index-DBi3ohRe.js";import"./useFormValidation-C8z9LNZS.js";import"./useField-CmRL5QBJ.js";import"./Button-Dq8sGMaF.js";import"./Hidden-DPNZSM4r.js";import"./useLabels-DRJ0S-DI.js";import"./useButton-C5XtJKU4.js";import"./search-BzNJfOi1.js";import"./createLucideIcon-DGN0UqC4.js";import"./ClearButton-DfAYEK1A.js";import"./Button-CTJhina1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-K9SYCEaj.js";import"./VisuallyHidden-DzFRqZJO.js";import"./x-mpCuSzBg.js";import"./FieldError-CtXLLrVt.js";import"./Text-llkKnBOG.js";import"./Text-CkP7VZx0.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
