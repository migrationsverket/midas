import{S as i}from"./SearchField-CF9F0_Vm.js";import"./iframe-yW9ZA3bb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUJhr-Te.js";import"./clsx-B-dksMZM.js";import"./Form-Dyi7ByEU.js";import"./useFocusRing-Bwgr8eO9.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./Input-aTb6VFZD.js";import"./Hidden-zw4kT8e2.js";import"./Button-Dz51wr3r.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./FieldError-CaZE3eKK.js";import"./Text-Cihq6LYV.js";import"./clsx-Ciqy0D92.js";import"./Text-DMsq_JIv.js";import"./RSPContexts-ESkvyycf.js";import"./Group-DSLIBANt.js";import"./useControlledState-YFMNQnxY.js";import"./useLocalizedStringFormatter-sAga3kqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPKUsTxO.js";import"./useField-DB6t2HH5.js";import"./TextField.module-DdivwlC8.js";import"./search-DNED2u_n.js";import"./createLucideIcon-Dzjc7ziG.js";import"./x-DnrjJHU3.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./Button-CVdu7ubL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BLpKIy7O.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
