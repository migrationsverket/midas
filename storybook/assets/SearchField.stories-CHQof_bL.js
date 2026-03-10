import{S as s}from"./SearchField-Ca0sLBhY.js";import"./iframe-D-p6dryC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBjtOFIE.js";import"./utils-B-poXB9P.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJXVy5JL.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./useFormValidation-DdWh0zdu.js";import"./useField-CgSVtjeX.js";import"./Button-BU7RNZRB.js";import"./Hidden-BoY54D8z.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./search-CepONtjG.js";import"./createLucideIcon-DPKqS8th.js";import"./ClearButton-D8IHvh37.js";import"./Button-W-Uz8qez.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./VisuallyHidden-jfhHFvLB.js";import"./x-DTawh0wA.js";import"./FieldError-CmYJRG-e.js";import"./Text-D7fRftcI.js";import"./Text-CMUqHi1g.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
