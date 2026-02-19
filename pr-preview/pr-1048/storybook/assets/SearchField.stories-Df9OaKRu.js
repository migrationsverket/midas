import{S as s}from"./SearchField-Crt9b7cP.js";import"./iframe-CyQ_Q7rG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-fHHUIill.js";import"./utils-BoW3E2H5.js";import"./useLocalizedStringFormatter-D7j2-V_a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4-g9e6y.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./useFormValidation-B0oDx7tm.js";import"./useField-BkpnFURk.js";import"./Button-CntAlnRy.js";import"./Hidden-CRjkj892.js";import"./number-DfkVkf0F.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./search-8ZBSHBsE.js";import"./createLucideIcon-DGHBNn-o.js";import"./ClearButton-B2IfHpF7.js";import"./Button-BTfIzcvP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./VisuallyHidden-DBSUrbfY.js";import"./x-BDgCrCJo.js";import"./FieldError-CQXxDwPR.js";import"./Text-Dq2_g6JH.js";import"./Text-agLRoWzJ.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
