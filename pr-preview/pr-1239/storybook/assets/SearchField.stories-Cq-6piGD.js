import{S as i}from"./SearchField-CMNO9DBM.js";import"./iframe-DYtTLEOY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeWuc0kB.js";import"./clsx-B-dksMZM.js";import"./Form-yvOI9qEP.js";import"./useFocusRing-_bdLe-pi.js";import"./index-CHX39vrh.js";import"./index-DvTVW4UW.js";import"./Input-C_TafsML.js";import"./Hidden-DDsbX8hq.js";import"./Button-DsqyYrvI.js";import"./useLabel-BnXeWK3Y.js";import"./useLabels-CT9q7uAF.js";import"./useButton-Ci3u1E4N.js";import"./FieldError-f6hy05Az.js";import"./Text-B_xqvba2.js";import"./clsx-Ciqy0D92.js";import"./Text-DW1CAqib.js";import"./RSPContexts-DkdKWqA8.js";import"./Group-DLwVJwa_.js";import"./useControlledState-rzHF_sGy.js";import"./useLocalizedStringFormatter-Ccy2SGCc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ByTnTJ3e.js";import"./useField-CBfES0O1.js";import"./TextField.module-DdivwlC8.js";import"./search-FRLVvMD-.js";import"./createLucideIcon-CX9lPY5s.js";import"./x-hiiCX7eS.js";import"./useLocalizedStringFormatter-CJKDlra2.js";import"./Button-NK277Tyq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-bhNQHOWS.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
