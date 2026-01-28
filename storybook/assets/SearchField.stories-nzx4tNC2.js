import{S as s}from"./SearchField-Cv9_l3-R.js";import"./iframe-BBs4_N6h.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjCb2bRF.js";import"./utils-DQWEvmcK.js";import"./useLocalizedStringFormatter-CAgc08WU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ck-lkHHw.js";import"./useFocusRing-C2UWZwX7.js";import"./index-DSf7Rq9d.js";import"./index-DgjA7sBY.js";import"./useFormValidation-D4vZGBVx.js";import"./useField-KR56YyQD.js";import"./Button-Xr6dJxVX.js";import"./Hidden-Vg2S_tOJ.js";import"./useLabels-2mnglK4H.js";import"./useButton-C_pkSc3R.js";import"./search-Dzq7FRSS.js";import"./createLucideIcon-qvf3G-BL.js";import"./ClearButton-CewHEwO0.js";import"./Button-Bf3i2B3M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYezl8xZ.js";import"./VisuallyHidden-DBQc_FBH.js";import"./x-DCZtPpro.js";import"./FieldError-BhhOnxLS.js";import"./Text-Docz9roa.js";import"./Text-DQhNGrME.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
