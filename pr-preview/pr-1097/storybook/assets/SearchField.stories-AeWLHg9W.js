import{S as s}from"./SearchField-DqoPfJnI.js";import"./iframe-apXpK-Ym.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Be_pRaEQ.js";import"./utils-D_IsDdxh.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DvTY5e1I.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./useFormValidation-CKfmowTq.js";import"./useField-iX3RzpJx.js";import"./Button-B7ztBAPt.js";import"./Hidden-Bx4MJY4P.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./search-BmjRK_VN.js";import"./createLucideIcon-BVTX869z.js";import"./ClearButton-Bac7l5jn.js";import"./Button-B3oZe3e3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./VisuallyHidden-DkYm7gZi.js";import"./x-CdTIprco.js";import"./FieldError-D5-eAkFz.js";import"./Text-C8sRdSzE.js";import"./Text-i6zD5ogA.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
