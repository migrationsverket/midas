import{S as s}from"./SearchField-No5RJ2Ha.js";import"./iframe-CLw9EvUn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D21u0Iei.js";import"./utils-BwWAyVJP.js";import"./useLocalizedStringFormatter-tJnjIpft.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BDwKuana.js";import"./useFocusRing-BAEYXSj_.js";import"./index-Bq3XAPPV.js";import"./index-B5Glj1Lw.js";import"./useFormValidation-CBNA-ySD.js";import"./useField-CSdrZpk2.js";import"./Button-DnmoB4JS.js";import"./Hidden-D77l1g2T.js";import"./useLabels-D1N2DW3Q.js";import"./useButton-DCV5HdO0.js";import"./search-D1wJbFaZ.js";import"./createLucideIcon-KVsuRhiu.js";import"./Button-Cl5UNsPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B24pFSF-.js";import"./VisuallyHidden-CbcleJY8.js";import"./x-D1N4eJz6.js";import"./FieldError-Cd3lwIs8.js";import"./Text-D5JOCqJj.js";import"./Text-1Buqt0Vq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
