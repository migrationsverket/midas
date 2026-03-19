import{S as i}from"./SearchField-D3pRVMPI.js";import"./iframe-Boi322-e.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-z1j4bIi1.js";import"./clsx-B-dksMZM.js";import"./Form-Co5HaTHR.js";import"./useFocusRing-CkCvH5DS.js";import"./index-Cvkkkaql.js";import"./index-s4s_PHwE.js";import"./Input-CG9S7cb5.js";import"./Hidden-Cxs5fcIU.js";import"./Button-BZrkaF7s.js";import"./useLabels-DbPeSc60.js";import"./useButton-aRTTkymG.js";import"./FieldError-CghXp7Fo.js";import"./Text-bXt2bHa-.js";import"./clsx-Ciqy0D92.js";import"./Text-D7z3Z1mn.js";import"./RSPContexts-CQ86iZLn.js";import"./Group-DTgLm_AU.js";import"./useControlledState-CJDuseoe.js";import"./useLocalizedStringFormatter-BdYnyh_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSk9WCGP.js";import"./useField-ChTCt58t.js";import"./TextField.module-DdivwlC8.js";import"./search-DS6Mt5TD.js";import"./createLucideIcon-C52beLhx.js";import"./x-chi6RhK4.js";import"./useLocalizedStringFormatter-DQv5OY2h.js";import"./Button-BbOSYGn_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CV_gcmgX.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
