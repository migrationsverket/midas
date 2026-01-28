import{S as s}from"./SearchField-BwtFxwkx.js";import"./iframe-B78wn1WG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hc0v7KHB.js";import"./utils-RTE5txou.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-66VUwVkb.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./useFormValidation-DjwK84Yp.js";import"./useField-BZ6Bn88N.js";import"./Button-Dj90Y4Eb.js";import"./Hidden-Dmy_tbtO.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./search-Cuh35NGf.js";import"./createLucideIcon-De6jokFF.js";import"./ClearButton-CNZd8HPL.js";import"./Button-C_05nidj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./VisuallyHidden-nx3fwYPE.js";import"./x-E1o5LEs9.js";import"./FieldError-BWFa-LBr.js";import"./Text-DhYauZPs.js";import"./Text-CI45cqHe.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
