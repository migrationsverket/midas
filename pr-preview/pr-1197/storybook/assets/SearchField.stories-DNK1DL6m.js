import{S as i}from"./SearchField-D9Dhpv_e.js";import"./iframe-CxkETeDd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GlStkLEJ.js";import"./clsx-B-dksMZM.js";import"./Form-C5JH_F4V.js";import"./useFocusRing-Do0yfzWS.js";import"./index-BSb6ZrfR.js";import"./index-nMmCh7nR.js";import"./Input-DoY7pUez.js";import"./Hidden-CKsesGiK.js";import"./Button-M5zQwREp.js";import"./useLabel-BO_xYu1i.js";import"./useLabels-DaC1eol5.js";import"./useButton-DENm16UC.js";import"./FieldError-BWtspna3.js";import"./Text-CjYtEiaz.js";import"./clsx-Ciqy0D92.js";import"./Text-BAZIzjwA.js";import"./RSPContexts-DsMbIQ4H.js";import"./Group-B8gB1pu2.js";import"./useControlledState-Cqnjl-Rp.js";import"./useLocalizedStringFormatter-C1sxkLmf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMiTRF45.js";import"./useField-DUhSjK8V.js";import"./TextField.module-DdivwlC8.js";import"./search-CSx8dDQ2.js";import"./createLucideIcon-C0eB9KvK.js";import"./x-B204znOg.js";import"./useLocalizedStringFormatter-53dmxcXe.js";import"./Button-CKmKD5ej.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BFccnY_O.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
