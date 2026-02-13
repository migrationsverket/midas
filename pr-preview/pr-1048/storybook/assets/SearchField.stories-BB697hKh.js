import{S as s}from"./SearchField-kBhfIqRW.js";import"./iframe-CMe2wz4D.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D13p9GBW.js";import"./utils-DJ_hucLj.js";import"./useLocalizedStringFormatter-jsgjsUy3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-iNeEMnQf.js";import"./useFocusRing-DN312JKd.js";import"./index-UTABmGgd.js";import"./index-DgLmdWsP.js";import"./useFormValidation-Btd0Kabf.js";import"./useField-B4tU80Yq.js";import"./Button-BuypZ7Sp.js";import"./Hidden-Cq5lhTG-.js";import"./number-DfkVkf0F.js";import"./useLabels-BVLipinj.js";import"./useButton-CdtNP3fm.js";import"./search-DDVPHe8e.js";import"./createLucideIcon-Bteudlm4.js";import"./ClearButton-BHG2ilKa.js";import"./Button-CDQv5njw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fpyssM3k.js";import"./VisuallyHidden-BaQWCrYN.js";import"./x-BEfRANP2.js";import"./FieldError-CqK9CxSD.js";import"./Text-DbDESw7Z.js";import"./Text-C6IcTtvN.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
