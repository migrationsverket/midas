import{S as i}from"./SearchField-CV2FY7Gh.js";import"./iframe-BQlcbrgq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zlU0QFfw.js";import"./clsx-B-dksMZM.js";import"./Form-BbiXVtoW.js";import"./useFocusRing-vaJTuI4B.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./Input-Dmfx3AYP.js";import"./Hidden-BCstp6u_.js";import"./Button-CDoUC3iq.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./FieldError-Bsl-hkeP.js";import"./Text-9noXsIlr.js";import"./clsx-Ciqy0D92.js";import"./Text-VFn9yNax.js";import"./RSPContexts-Bvy64kgY.js";import"./Group-6JbUst6D.js";import"./useControlledState-8FQUmPf4.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-5FDI_JTc.js";import"./useField-C6cnRVBt.js";import"./TextField.module-DdivwlC8.js";import"./search-D95bR3Sd.js";import"./createLucideIcon-Dkmw8KOt.js";import"./x-CQzcLprN.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./Button-CWx5j6of.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKBFwX4P.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
