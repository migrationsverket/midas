import{S as i}from"./SearchField-BONQJopb.js";import"./iframe-CYdOIShe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-HKmh4Wcn.js";import"./clsx-B-dksMZM.js";import"./Form-Bw9LTkRW.js";import"./useFocusRing-luUELUDI.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./Input-BBo9y7oh.js";import"./Hidden-CT5s6T9J.js";import"./Button-CFIgUPn3.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./FieldError-DuFysaFf.js";import"./Text-JajiEAQE.js";import"./clsx-Ciqy0D92.js";import"./Text-BPz397x3.js";import"./RSPContexts-C-0mxEQj.js";import"./Group-CTyjmJWp.js";import"./useControlledState-DtqbYXAa.js";import"./useLocalizedStringFormatter-5ECDI-gb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPDg-aWU.js";import"./useField-D4dGqq1b.js";import"./TextField.module-DdivwlC8.js";import"./search-iZTGHMlA.js";import"./createLucideIcon-cX0zgN2L.js";import"./x-o-bpfQug.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./Button-CBUriOkd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DnXqJuQy.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
