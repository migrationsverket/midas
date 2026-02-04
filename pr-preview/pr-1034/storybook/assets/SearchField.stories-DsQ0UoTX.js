import{S as s}from"./SearchField-r6M2Twwd.js";import"./iframe-upcgl7eM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DxbIPEYQ.js";import"./utils-DIx1IamT.js";import"./useLocalizedStringFormatter-B_89sXt0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0go8Gbu.js";import"./useFocusRing-BqsA1vx-.js";import"./index-BuYUjQXP.js";import"./index-SbvGQsJp.js";import"./useFormValidation-Cwb3rUYJ.js";import"./useField-Vj9LyZT-.js";import"./Button-Bm_96dJ2.js";import"./Hidden-BVPjc43X.js";import"./useLabels-CZlpXa7M.js";import"./useButton-DXi2-Ij4.js";import"./search-BHk4Onkd.js";import"./createLucideIcon-NdGz0Ptw.js";import"./ClearButton-BcXrdV1n.js";import"./Button-D6mILSsj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XLs9F4JA.js";import"./VisuallyHidden-CruDu4Gn.js";import"./x-CWmj5Rac.js";import"./FieldError-_edkh_FM.js";import"./Text-4DZ9uLvx.js";import"./Text-vUmVOUpM.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
