import{S as i}from"./SearchField-h2Eup4oU.js";import"./iframe-ntYsoI3q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJHfATlu.js";import"./clsx-B-dksMZM.js";import"./Form-q--S1nBS.js";import"./useFocusRing-D9nk-FO4.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./Input-klmdQr_w.js";import"./Hidden-BJHd_AQT.js";import"./Button-Czul53LM.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./FieldError-BR-RMZw1.js";import"./Text-DeKUVabC.js";import"./clsx-Ciqy0D92.js";import"./Text-DcoyKAFk.js";import"./RSPContexts-Vvgjzfon.js";import"./Group-CA3PZ7_L.js";import"./useControlledState-DrHB4IJb.js";import"./useLocalizedStringFormatter-hhUVFxwM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B00liPAR.js";import"./useField-BT-2cJTY.js";import"./TextField.module-DdivwlC8.js";import"./search-Ccfznb-y.js";import"./createLucideIcon-DVRKw96B.js";import"./x-DVmtkFru.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./Button-Cjgmk6w1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Tbx6jsXW.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
