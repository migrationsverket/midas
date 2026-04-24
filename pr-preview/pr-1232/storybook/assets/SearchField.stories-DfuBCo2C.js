import{S as i}from"./SearchField-C1VZxoSJ.js";import"./iframe-DOHhMkQY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-NiE-K3B6.js";import"./clsx-B-dksMZM.js";import"./Form-Dq5C2lBM.js";import"./useFocusRing-wtRS1Mc0.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./Input-DO2yHUEo.js";import"./Hidden-CBYtsSM7.js";import"./Button-BgxX3mlh.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./FieldError-BflqQ1hj.js";import"./Text-DSHHPLHE.js";import"./clsx-Ciqy0D92.js";import"./Text-C8g4NeVM.js";import"./RSPContexts-Cdm3yX79.js";import"./Group-Dmwg-2rd.js";import"./useControlledState-DiXqzo5g.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbXqGvkj.js";import"./useField-CDafB6bD.js";import"./TextField.module-DdivwlC8.js";import"./search-BOhmwGYJ.js";import"./createLucideIcon-B4Q-AngK.js";import"./x-CkxwwECO.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Button-oYxwaeFk.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQY1cYBw.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
