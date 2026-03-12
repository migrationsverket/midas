import{S as s}from"./SearchField-2JYTfjfB.js";import"./iframe-DQVQza6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaVALF-g.js";import"./utils-D-_RfQn2.js";import"./useLocalizedStringFormatter-Dx8dDRGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce1nkcbT.js";import"./useFocusRing-CBM0kVUN.js";import"./index-DiS2M8Ea.js";import"./index-CfbU1Mg4.js";import"./useFormValidation-BZrjYykE.js";import"./useField-2JEukHs2.js";import"./Button-BSDgymoN.js";import"./Hidden-Hezyv9Df.js";import"./useLabels-De2gA6Om.js";import"./useButton-B4zLsihB.js";import"./search-2hy6zlZB.js";import"./createLucideIcon-CuIMjDf_.js";import"./ClearButton-BjI_Gemj.js";import"./x-CJRhTqpy.js";import"./Button-BVp6tPBn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-IWYOBSFO.js";import"./VisuallyHidden-DtlR1Tt8.js";import"./FieldError-BFJVbEZW.js";import"./Text-BbABlkeP.js";import"./Text-CiNfpZ1d.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
