import{S as s}from"./SearchField-BhFjEGMj.js";import"./iframe-CupcEORL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAOEk3qi.js";import"./utils-CzdJImXC.js";import"./useLocalizedStringFormatter-BFlI89gI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BorxuHV3.js";import"./useFocusRing-B933qwOx.js";import"./index-BNnNq99L.js";import"./index-CDGQedl9.js";import"./useFormValidation-JfHmnvgD.js";import"./useField-CMyz0xuE.js";import"./Button-BjFe8Qxa.js";import"./Hidden-f6WbCn28.js";import"./useLabels-DCXSlQiV.js";import"./useButton-BK9ob62y.js";import"./search-CUMIZEak.js";import"./createLucideIcon-CXb3IT7f.js";import"./Button-B1rt2puZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKuOwoBy.js";import"./VisuallyHidden-DPMP7RQx.js";import"./x-BVCaSCFv.js";import"./FieldError-CNSUQM04.js";import"./Text-BzTzEwa_.js";import"./Text-FnTIT6A7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
