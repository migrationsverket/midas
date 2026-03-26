import{S as i}from"./SearchField-CrV17dGy.js";import"./iframe-B6v7SNgB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvQnzAUx.js";import"./clsx-B-dksMZM.js";import"./Form-CFc7lGpW.js";import"./useFocusRing-BmrkPpfG.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./Input-B-WrNOQP.js";import"./Hidden-DVRxRWYq.js";import"./Button-R8L0fisR.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./FieldError-lkabuhB0.js";import"./Text-BIYy6_GG.js";import"./clsx-Ciqy0D92.js";import"./Text-IRrkNmmn.js";import"./RSPContexts-xsTqzyol.js";import"./Group-B_1NLwKO.js";import"./useControlledState-BWAzPrBc.js";import"./useLocalizedStringFormatter-DoD5PX0W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZ5kzp9G.js";import"./useField-CQP4R4b6.js";import"./TextField.module-DdivwlC8.js";import"./search-CrFUeLQB.js";import"./createLucideIcon-DJSw6RDm.js";import"./x-DEpZC0gz.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./Button-DFw2NzPi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-s-TUYsoQ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
