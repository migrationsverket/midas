import{S as i}from"./SearchField-CW1now_E.js";import"./iframe-C5o5Abe9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CI0V6-bZ.js";import"./clsx-B-dksMZM.js";import"./Form-zY5OwCBG.js";import"./useFocusRing-DUJ025qE.js";import"./index-O7wF_jHq.js";import"./index-gJJpgxtN.js";import"./Input-BxeWODad.js";import"./Hidden-CBrM32Fq.js";import"./Button-D0wm-Bzx.js";import"./useLabels-Bc_QKjnL.js";import"./useButton-DaL-nw23.js";import"./FieldError-Bi-8FqnY.js";import"./Text-CZIcrdc8.js";import"./clsx-Ciqy0D92.js";import"./Text-C8hlp_Vi.js";import"./RSPContexts-gnW2D4kn.js";import"./Group-BtL86FhI.js";import"./useControlledState-Bsc6Xcu0.js";import"./useLocalizedStringFormatter-D-x6F0Q7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DE370Alt.js";import"./useField-4QdNIdvN.js";import"./TextField.module-DdivwlC8.js";import"./search-Ntn9zUTC.js";import"./createLucideIcon-Dogmr7E8.js";import"./x-Bvhbyjtu.js";import"./useLocalizedStringFormatter-DRt_xGrO.js";import"./Button-B2ihGD6k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B90J4eav.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
