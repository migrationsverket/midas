import{S as s}from"./SearchField-BwhuP5-5.js";import"./iframe-BrSFSEso.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CqGR6b7a.js";import"./utils-CSLr47GB.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BpM0-sgz.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./useFormValidation-DYc4Vusd.js";import"./useField-BUD6g1mX.js";import"./Button-sstewYaM.js";import"./Hidden-bRkw9FY4.js";import"./number-DfkVkf0F.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./search-DXRNl31Q.js";import"./createLucideIcon-D7YZh2ey.js";import"./ClearButton-D7N3gLMf.js";import"./Button-D56CPdXD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./x-DQ48cbAb.js";import"./FieldError-C1wT0W68.js";import"./Text-CqAiKc3c.js";import"./Text-afjM-cTG.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
