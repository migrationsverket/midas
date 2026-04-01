import{S as i}from"./SearchField-SVUH6y5B.js";import"./iframe-C_2Po1qD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoKSmqfj.js";import"./clsx-B-dksMZM.js";import"./Form-DF4m-Gx4.js";import"./useFocusRing-BUXHOBJT.js";import"./index-D4Zi599j.js";import"./index-CUY9Xica.js";import"./Input-CXKYEgFS.js";import"./Hidden-JqaEh-jr.js";import"./Button-B4BJcFaK.js";import"./useLabel-ZZAqWazw.js";import"./useLabels-DTlsntHT.js";import"./useButton-C9tFcCTE.js";import"./FieldError-g89TDsVb.js";import"./Text-CSVa2wh5.js";import"./clsx-Ciqy0D92.js";import"./Text-DCF_RRxK.js";import"./RSPContexts-BAtJ9VDW.js";import"./Group-B6-48JTq.js";import"./useControlledState-DD8Y7tdb.js";import"./useLocalizedStringFormatter-DG7dszbR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA4h2RDb.js";import"./useField-Q_sOPIFc.js";import"./TextField.module-DdivwlC8.js";import"./search-95RBC2F9.js";import"./createLucideIcon-Cz_UZZWy.js";import"./x-BojtU4Mi.js";import"./useLocalizedStringFormatter-DvhmujFD.js";import"./Button-BV8yLb9D.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BezuJMNy.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
