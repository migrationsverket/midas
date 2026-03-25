import{S as i}from"./SearchField-lX5Sqt-S.js";import"./iframe-Bau-Vb-U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./Form-Ci16kZpr.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./Input-DLVIJ28g.js";import"./Hidden-ygOXplTE.js";import"./Button-nyoR5AiN.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./FieldError-C4-I9rBv.js";import"./Text-CCFXQNDk.js";import"./clsx-Ciqy0D92.js";import"./Text-CnUTPFtZ.js";import"./RSPContexts-Ci7lzjgK.js";import"./Group-DoN2xJaD.js";import"./useControlledState-B-7lzpTq.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dxtjgl1W.js";import"./useField-CoKhaZ76.js";import"./TextField.module-DdivwlC8.js";import"./search-NMrhBl9C.js";import"./createLucideIcon-Di4Tit0m.js";import"./x-Bn5zNUwZ.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Button-BCWlvYFn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HpJjECW7.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
