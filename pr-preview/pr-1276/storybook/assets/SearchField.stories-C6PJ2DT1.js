import{S as i}from"./SearchField-Bb46jmFG.js";import"./iframe-msAyXsP3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CNLzm5ks.js";import"./clsx-B-dksMZM.js";import"./Form-BzCO8y52.js";import"./useFocusRing-DUmFoS0u.js";import"./index-DbT8YmDW.js";import"./index-DdtKLc0f.js";import"./Input-uT8EL97e.js";import"./Hidden-1dN06UT8.js";import"./Button-CHXcA8G6.js";import"./useLabel-CSQCeGiL.js";import"./useLabels-CoFEN7CD.js";import"./useButton-o2FEXKT7.js";import"./FieldError-D_l8yWz1.js";import"./Text-B_o1aquN.js";import"./clsx-Ciqy0D92.js";import"./Text-O5KbKawX.js";import"./RSPContexts-iGd1ezyt.js";import"./Group-C9uwkwF3.js";import"./useControlledState-B9ayh_25.js";import"./useLocalizedStringFormatter-DPSc_3xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CTS6NHyV.js";import"./useField-BQiibDSC.js";import"./TextField.module-DdivwlC8.js";import"./search-BkZcNyRj.js";import"./createLucideIcon-DQiIjLik.js";import"./x-DoBtKp7e.js";import"./useLocalizedStringFormatter-DOzvk0aq.js";import"./Button-C2f__mC4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BM3YcZfp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
