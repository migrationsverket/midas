import{S as s}from"./SearchField-Cxni2yPy.js";import"./iframe-X3mj68t3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGtnjhE_.js";import"./utils-DTPrts_7.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bt5iotie.js";import"./useFocusRing-A-SYz4Bz.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./useFormValidation-BhwNd55G.js";import"./useField-BqKadYEg.js";import"./Button-B9l0bgEJ.js";import"./Hidden-ozg39Vr6.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./search-CyGh6lgv.js";import"./createLucideIcon-DXrZJMlk.js";import"./ClearButton-Df2BDUZT.js";import"./Button-BVJ0mzNb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";import"./VisuallyHidden-BBlGikRY.js";import"./x-DPV5jirE.js";import"./FieldError-ND8ftnbY.js";import"./Text-dnG1hIAI.js";import"./Text-BWheoq0_.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
