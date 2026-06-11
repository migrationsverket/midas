import{S as i}from"./SearchField-B-gaC6JP.js";import"./iframe-Di5CTR8T.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./Form-q1oODmDm.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./Input-CM0xH0-G.js";import"./Hidden-sHhuPHwe.js";import"./Button-2OtSDF-S.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./FieldError-Bv2rXWOC.js";import"./Text-ZJfVqn-h.js";import"./clsx-Ciqy0D92.js";import"./Text-n28vbpm4.js";import"./RSPContexts-DB30PmIp.js";import"./Group-D3mEeqQ-.js";import"./useControlledState-I_KBwW67.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cw_gJkmM.js";import"./useField-BrrjMWLY.js";import"./TextField.module-DdivwlC8.js";import"./search-Dh2nnHh2.js";import"./createLucideIcon-BtcOznK7.js";import"./x-B82Stdu9.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DD_4lyF0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
