import{S as i}from"./SearchField-B-REUD8Q.js";import"./iframe-DG8sLAOy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DLAFhier.js";import"./clsx-B-dksMZM.js";import"./Form-DJ7nF5qY.js";import"./useFocusRing-mNkvIRfY.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./Input-DLI75ww7.js";import"./Hidden-BYn-neub.js";import"./Button-e9hh4zze.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./FieldError-DWs4hNvn.js";import"./Text-BL7Sfi9Q.js";import"./clsx-Ciqy0D92.js";import"./Text-BnRQmBDY.js";import"./RSPContexts-CMJFVu7E.js";import"./Group-CI_3ak_E.js";import"./useControlledState-RiscT5mJ.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHNbyuqs.js";import"./useField-FnGI4Iq2.js";import"./TextField.module-DdivwlC8.js";import"./search-s6siFpFG.js";import"./createLucideIcon-CiRaq98A.js";import"./x-BslDqAEV.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Button-D1u3zQ32.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CYqYwLo_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
