import{S as s}from"./SearchField-BPpHTbNq.js";import"./iframe-DuaKi7xD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DAMN56Mb.js";import"./utils-BCB57b2F.js";import"./useLocalizedStringFormatter-j_Zj2lr5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cv5deoUh.js";import"./useFocusRing-CQC8CYmg.js";import"./index-D03P8HqJ.js";import"./index-Ch7u2l1l.js";import"./useFormValidation-B8lCzVVQ.js";import"./useField-Cu-a3CrC.js";import"./Button-C2VTZsyg.js";import"./Hidden-DKSH1Rie.js";import"./useLabels-CpVDs9CP.js";import"./useButton-DBitaRdE.js";import"./search-DbkwRGBa.js";import"./createLucideIcon-BniL5whM.js";import"./Button-B9O2nQjc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH44G-u9.js";import"./VisuallyHidden-DOdw6P18.js";import"./x-BaABe5aY.js";import"./FieldError-H771sQdp.js";import"./Text-CQdB-g-f.js";import"./Text-BSDD80o3.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
