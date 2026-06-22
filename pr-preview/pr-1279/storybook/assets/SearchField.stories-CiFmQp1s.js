import{S as i}from"./SearchField-DG0NHBaR.js";import"./iframe-BdqauXPx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-TjQiWSfv.js";import"./clsx-B-dksMZM.js";import"./Form-Bsw9pKS8.js";import"./useFocusRing-Djhyctp1.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./Input-DFZxFk2j.js";import"./Hidden-D68chLs-.js";import"./Button-BdENfSlN.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./FieldError-DGaJEWvC.js";import"./Text-BL07whN_.js";import"./clsx-Ciqy0D92.js";import"./Text-Cb3R__HW.js";import"./RSPContexts-DWJwZTPK.js";import"./Group-DAsAupNi.js";import"./useControlledState-BqbfbBFv.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CyrS5BG0.js";import"./useField-C7HioUHP.js";import"./TextField.module-DdivwlC8.js";import"./search-DqjfV4M2.js";import"./createLucideIcon-BaaLPnxs.js";import"./x-CmpCUEVG.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Button-lQ7FTiYx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-d4YRXwAI.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
