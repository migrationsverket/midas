import{S as s}from"./SearchField-CCLa399R.js";import"./iframe-B6mQtHg_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRStpwCw.js";import"./utils-BRho1dRj.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkG25mzw.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./useFormValidation-Bzj4B0-M.js";import"./useField-DPGyVH2q.js";import"./Button-fYT3W3-R.js";import"./Hidden-Zr6f3d_F.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./search-us5hm2J0.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./ClearButton-CqyYNZ4I.js";import"./x-CmYm4Ua_.js";import"./Button-CjEwSg5p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./VisuallyHidden-B9plZj9e.js";import"./FieldError-DsUm8Cjt.js";import"./Text-P1kAvbTC.js";import"./Text-CC5_ooHx.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
