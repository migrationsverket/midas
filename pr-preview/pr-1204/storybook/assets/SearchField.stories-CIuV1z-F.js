import{S as i}from"./SearchField-BNZGgfFY.js";import"./iframe-Cnprf77l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BAknv1n_.js";import"./clsx-B-dksMZM.js";import"./Form-BO6ek__5.js";import"./useFocusRing-BbKkuYRW.js";import"./index-D131wgQu.js";import"./index-DinabbhG.js";import"./Input-DYN-lYP3.js";import"./Hidden-CtzSMGYR.js";import"./Button-C9qpCnHp.js";import"./useLabel-VHxyrYwA.js";import"./useLabels-D2bRDv09.js";import"./useButton-Dj6JkoG-.js";import"./FieldError-37LT6hKT.js";import"./Text-TETOR_cU.js";import"./clsx-Ciqy0D92.js";import"./Text-xSTWmp3z.js";import"./RSPContexts-Cw9ibUso.js";import"./Group-D_hcMCy8.js";import"./useControlledState-bPVMsSoD.js";import"./useLocalizedStringFormatter-BM9Op5Of.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ciw4fb72.js";import"./useField-sgfdLoP0.js";import"./TextField.module-DdivwlC8.js";import"./search-1K2g8oHG.js";import"./createLucideIcon-BhAvpesv.js";import"./x-Bh_dZ6M0.js";import"./useLocalizedStringFormatter-TTFjkzUm.js";import"./Button-CSDIchjo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-O1yJF_LA.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
