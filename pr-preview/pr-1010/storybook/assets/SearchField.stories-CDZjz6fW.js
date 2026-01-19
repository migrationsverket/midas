import{S as s}from"./SearchField-HYzZ4uUT.js";import"./iframe-B63rKYqU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D2SrYs4q.js";import"./utils-B8PawZ4p.js";import"./useLocalizedStringFormatter-KGBF3wy6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BcH3O51m.js";import"./useFocusRing-DmPhrr6X.js";import"./index-BYawnw9P.js";import"./index-uItY6MEj.js";import"./useFormValidation-Bsz9sBLD.js";import"./useField-qBosTa6s.js";import"./Button-C9TkbvA1.js";import"./Hidden-BYyNs38Y.js";import"./useLabels-Vvrocbqw.js";import"./useButton-BJDVqpSD.js";import"./search-CSisSUSU.js";import"./createLucideIcon-Cv9mqkPS.js";import"./ClearButton-IlMCyeQg.js";import"./Button-CpkwJ8HO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bjx4e2b1.js";import"./VisuallyHidden-D1fJoZKk.js";import"./x-CqJOIyZm.js";import"./FieldError-D2ragNVA.js";import"./Text-Bq093QF5.js";import"./Text-BAZ032Hu.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
