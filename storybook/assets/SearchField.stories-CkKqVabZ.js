import{S as i}from"./SearchField-CaL07wdP.js";import"./iframe-D_5POFLP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DO_vjv71.js";import"./clsx-B-dksMZM.js";import"./Form-C_lLIp1i.js";import"./useFocusRing--g4Wtvt8.js";import"./index-DqO0WD41.js";import"./index-cRMo-pfK.js";import"./Input-US2W4nt2.js";import"./Hidden-CviAMZFs.js";import"./Button-fdQqDZ1U.js";import"./useLabels-BXPD6Dkt.js";import"./useButton-BcNImXbv.js";import"./FieldError-EOiA5P3C.js";import"./Text-BKb3b_9z.js";import"./clsx-Ciqy0D92.js";import"./Text-yMJxKm-c.js";import"./RSPContexts-xL2uHiKx.js";import"./Group-CSZ6p5rU.js";import"./useControlledState-BKs1wQOh.js";import"./useLocalizedStringFormatter-zQAwDCu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRJmg6nt.js";import"./useField-BuH4E1_r.js";import"./TextField.module-DdivwlC8.js";import"./search-DH66lFRD.js";import"./createLucideIcon-DU05kscE.js";import"./x-CkDzpDVd.js";import"./useLocalizedStringFormatter-DWsBg7K0.js";import"./Button-C961Ae12.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-2Q1B73xw.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
