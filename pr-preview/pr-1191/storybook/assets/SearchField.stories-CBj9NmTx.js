import{S as i}from"./SearchField-Di6YV35v.js";import"./iframe-BmAdb1PA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CCClzR0P.js";import"./clsx-B-dksMZM.js";import"./Form-DuBFRND4.js";import"./useFocusRing-DjzcYn69.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./Input-wS3uVeCW.js";import"./Hidden-B3pD7GY2.js";import"./Button-MRSjvKjG.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./FieldError-BFmjoeTz.js";import"./Text-CWRsvaQ5.js";import"./clsx-Ciqy0D92.js";import"./Text-GqXtxiSt.js";import"./RSPContexts-C9Yi9HqJ.js";import"./Group-DHPBGzHI.js";import"./useControlledState-Dv2Kshwg.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DB_mL8mV.js";import"./useField-CiSiXV_i.js";import"./TextField.module-DdivwlC8.js";import"./search-DtDSL7nU.js";import"./createLucideIcon-CbxvyYW-.js";import"./x-BgO40Plk.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Button-Cxe1PoSr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDq5yWsw.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
