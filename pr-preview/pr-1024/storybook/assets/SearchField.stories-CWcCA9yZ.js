import{S as s}from"./SearchField-3RoDqXzl.js";import"./iframe-CxaG9I7P.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BJUuheTr.js";import"./utils-Czlm0UBK.js";import"./useLocalizedStringFormatter-BKXqtz3g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-TBgMuNXT.js";import"./useFocusRing-B_8tQUZZ.js";import"./index-t5CRhWba.js";import"./index-C83Nl3_M.js";import"./useFormValidation-1UvULbqT.js";import"./useField-eXjHNk9f.js";import"./Button-CmgJ4xb0.js";import"./Hidden-C8k63pZ_.js";import"./useLabels-Q9h_GLhy.js";import"./useButton-BF83G0Tr.js";import"./search-BPx7zwyH.js";import"./createLucideIcon-Bvlak_27.js";import"./ClearButton-Clo2sCtA.js";import"./Button-CzqSm8W5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcPkzblS.js";import"./VisuallyHidden-C45-MbEO.js";import"./x-CeZp12Sq.js";import"./FieldError-C4Y2gpA2.js";import"./Text-B1ar5pgm.js";import"./Text-Bsr9FprL.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
