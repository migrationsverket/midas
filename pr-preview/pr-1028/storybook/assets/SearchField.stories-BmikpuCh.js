import{S as s}from"./SearchField-22AIMGbT.js";import"./iframe-COBKNkIo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-njDs9clp.js";import"./utils-Cawu88FS.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgNJouZW.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./useFormValidation-UFN-ft0-.js";import"./useField-9hLn6ruD.js";import"./Button-DVN4emYY.js";import"./Hidden-DWdHgASM.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./search-DiW_-3VH.js";import"./createLucideIcon-CRw8Ded6.js";import"./ClearButton-BTpoHene.js";import"./Button-COjdwtTG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./VisuallyHidden-vIshbz0f.js";import"./x-Dj_xkDq5.js";import"./FieldError-Dc4PcQjT.js";import"./Text-fShGFw3n.js";import"./Text-CtIfC9h2.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
