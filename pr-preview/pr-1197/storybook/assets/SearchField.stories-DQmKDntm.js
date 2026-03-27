import{S as i}from"./SearchField-BEqQmGLv.js";import"./iframe-XIh9uYhW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-QqHpIW-4.js";import"./clsx-B-dksMZM.js";import"./Form-uKASpG5T.js";import"./useFocusRing-BdFa1UIk.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./Input-CRfLYA6t.js";import"./Hidden-l3oUe_Z9.js";import"./Button-BsucxUz-.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./FieldError-CImeX3LJ.js";import"./Text-DrkaIHH8.js";import"./clsx-Ciqy0D92.js";import"./Text-FP4KMc3f.js";import"./RSPContexts-Bn8Ylugu.js";import"./Group-Bqm2qrBS.js";import"./useControlledState-CqcNfIKv.js";import"./useLocalizedStringFormatter-C8j3kjHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-PrAZ5utE.js";import"./useField-DZimw16l.js";import"./TextField.module-DdivwlC8.js";import"./search-B7lGH4QG.js";import"./createLucideIcon-C-gCmxMp.js";import"./x-Drs9DY4g.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./Button-D1gmeqQE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C1E6EF0U.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
