import{S as i}from"./SearchField-BOb-bYRc.js";import"./iframe-BaDPacjd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./Form-oBhPq7WZ.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./Input-BrXEUkLM.js";import"./Hidden-wYkIMllK.js";import"./Button-xqG4BSxe.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./clsx-Ciqy0D92.js";import"./Text-maDwTHxG.js";import"./RSPContexts-Q8mL0bRp.js";import"./Group-DLvsScbU.js";import"./useControlledState-C7Qyb7bs.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfD0yxsi.js";import"./useField-DIToGq9j.js";import"./TextField.module-DdivwlC8.js";import"./search-BJ2tDsGa.js";import"./createLucideIcon-Cn3KNUPN.js";import"./x-CIJW-8OQ.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cc7_mEU0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
