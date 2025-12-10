import{S as s}from"./SearchField-DwHtREz7.js";import"./iframe-vt6_0wvc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoGrqUr-.js";import"./utils-C50KWGJn.js";import"./useLocalizedStringFormatter-B9noaZZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Df4lvF89.js";import"./useFocusRing-u1CE1zmZ.js";import"./index-DrKf0VEH.js";import"./index-BowZacW-.js";import"./useFormValidation-tBiv9jXM.js";import"./useField-BxJjlG8P.js";import"./Button-BHz5qLC4.js";import"./Hidden-DeIa8qWF.js";import"./useLabels-CrmuBcKe.js";import"./useButton-BIS2iV2Y.js";import"./search-J1OOmOAX.js";import"./createLucideIcon-CYjeYtY6.js";import"./Button-BYpM6_0E.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BykdjwWy.js";import"./VisuallyHidden-BJCH1Yk0.js";import"./x-2Ugz14oC.js";import"./FieldError-rI95JyM5.js";import"./Text-vUv8LtJg.js";import"./Text-0bO177qh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
