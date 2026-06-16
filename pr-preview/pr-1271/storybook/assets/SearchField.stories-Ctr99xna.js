import{S as i}from"./SearchField-DRkYqJlL.js";import"./iframe-DULmNwRk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ddt4lU09.js";import"./clsx-B-dksMZM.js";import"./Form-csm8I6Hh.js";import"./useFocusRing-BEpALdF5.js";import"./index-CkqvgeHq.js";import"./index-w5klJIx9.js";import"./Input-DcM9CWhd.js";import"./Hidden-CsQy7rZM.js";import"./Button-CqBmXAr6.js";import"./useLabel-CSl0614R.js";import"./useLabels-yc-GS4fI.js";import"./useButton-DpIUfVnU.js";import"./FieldError-xC4u7UR2.js";import"./Text-BCTwMZj4.js";import"./clsx-Ciqy0D92.js";import"./Text-B3Zo93UV.js";import"./RSPContexts-WnZvTRJ2.js";import"./Group-B_hq_Kbr.js";import"./useControlledState-C9dDHRab.js";import"./useLocalizedStringFormatter-0ckZvhdt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-2ZO3_3sa.js";import"./useField-DH9B_Stt.js";import"./TextField.module-DdivwlC8.js";import"./search-uxjJNuFj.js";import"./createLucideIcon-vWWdbK2W.js";import"./x-B4k2jhKu.js";import"./useLocalizedStringFormatter-DkqmVuml.js";import"./Button-DD5PWbcS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DGjr60RX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
