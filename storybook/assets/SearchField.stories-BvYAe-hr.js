import{S as i}from"./SearchField-DWiNUOf6.js";import"./iframe-CJiLO33n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BwIbfVvT.js";import"./clsx-B-dksMZM.js";import"./Form-CzM7f-FM.js";import"./useFocusRing-BwtfOiN2.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./Input-swurc7cY.js";import"./Hidden-GX2Gt-Bh.js";import"./Button-BPl7GMUn.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./FieldError-Dd2S8Fqt.js";import"./Text-Cu_x9kkp.js";import"./clsx-Ciqy0D92.js";import"./Text-B20Rga9k.js";import"./RSPContexts-T3bE05r6.js";import"./Group-BSts2WQT.js";import"./useControlledState-sn3ZKmd0.js";import"./useLocalizedStringFormatter-BwFxFA-j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-EHlUx0Cb.js";import"./useField-BDsDA6Qn.js";import"./TextField.module-DdivwlC8.js";import"./search-CJw8mMxz.js";import"./createLucideIcon-DApbN3tp.js";import"./x-CEEDctr_.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./Button-u-2V4ARC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DMMbRnDT.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
