import{S as s}from"./SearchField-BiLRFifk.js";import"./iframe-Ct1ppXcO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMKsiY2b.js";import"./utils-C-gSI02s.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BLmDom6j.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./useFormValidation-CbVk8cPB.js";import"./useField-C735bYz9.js";import"./Button-Co_Oqhu6.js";import"./Hidden-BnjpnQVL.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./search-Cj2730T4.js";import"./createLucideIcon-BuchYPst.js";import"./ClearButton-C7dkXCK3.js";import"./Button-DGYQQhVQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./VisuallyHidden-CPthcFHg.js";import"./x-DhEC6HJx.js";import"./FieldError-MCWN8uVd.js";import"./Text-bA96Aj1V.js";import"./Text-BLnUO4XT.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
