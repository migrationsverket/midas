import{S as s}from"./SearchField-Dm9yFeXq.js";import"./iframe-C_RGnjGF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DtWpqbpS.js";import"./utils-CizOIJwG.js";import"./useLocalizedStringFormatter-Bnrb7dzs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DXloCJTo.js";import"./useFocusRing-BF7aoqv-.js";import"./index-tt1S6LDy.js";import"./index-CO49tAAQ.js";import"./useFormValidation-Cl2Fp_bL.js";import"./useField-BQq33uh0.js";import"./Button-DuBv3q_5.js";import"./Hidden-BRwSW5Hr.js";import"./useLabels-BfoE21n1.js";import"./useButton-CLPY3zOp.js";import"./search-Dl-rOTPB.js";import"./createLucideIcon-Dw11k2K7.js";import"./ClearButton-BzD0iDJo.js";import"./Button-zzC5AJk8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEWE3auq.js";import"./VisuallyHidden-DR_ZosVl.js";import"./x-BD8VkNC2.js";import"./FieldError-ChB1xIDl.js";import"./Text-CHUsilgm.js";import"./Text-BVmb7BBG.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
