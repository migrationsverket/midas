import{S as s}from"./SearchField-3B3Z4Gn9.js";import"./iframe-67fMHQcr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DJp7nnOG.js";import"./utils-CzrochTz.js";import"./useLocalizedStringFormatter-B_WHaKeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CflmkExz.js";import"./useFocusRing-Bp8Mhd7n.js";import"./index-DfEYfE5h.js";import"./index-sfGWluQm.js";import"./useFormValidation-C5U66RQU.js";import"./useField-D_DH0Li_.js";import"./Button-kat9spYA.js";import"./Hidden-CgRbqzp1.js";import"./useLabels-Jj46PDyy.js";import"./useButton-BkNgGNTC.js";import"./search-eZ7sNQzj.js";import"./createLucideIcon-DPoFQgUp.js";import"./Button-SGb-jW8E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-166t5hcs.js";import"./VisuallyHidden-kN9goOZy.js";import"./x-Cu2I43LM.js";import"./FieldError-e7I4HOpx.js";import"./Text-BUZyNo40.js";import"./Text-DRPPRvVG.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
