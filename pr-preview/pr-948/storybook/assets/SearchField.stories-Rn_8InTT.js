import{S as s}from"./SearchField-BhTZX5mv.js";import"./iframe-CNs3Hc78.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-TNI0bjBI.js";import"./utils-BCAzWPEC.js";import"./useLocalizedStringFormatter-BN9wWTBZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRpkXfPO.js";import"./useFocusRing-zj2lvc57.js";import"./index-B3WrROuP.js";import"./index-D4SN8WxL.js";import"./useFormValidation-D30uUmE0.js";import"./useField-Cw6RQ1mB.js";import"./Button-tVHEZQYV.js";import"./Hidden-DgJuJ0IA.js";import"./useLabels-CT5lp67H.js";import"./useButton-BXGXxck1.js";import"./search-CxOgnFBE.js";import"./createLucideIcon-gnxpVPhb.js";import"./Button-Co8s4gf_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CV3R0Jov.js";import"./VisuallyHidden-DpNrlenL.js";import"./x-r97zZEq7.js";import"./FieldError-zFhVoF9-.js";import"./Text-wtOrpJHq.js";import"./Text-BgKg61nJ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
