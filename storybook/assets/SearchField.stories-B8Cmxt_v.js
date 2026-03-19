import{S as i}from"./SearchField-CzBsQ-Um.js";import"./iframe-f7w4ng_k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CsngUmKh.js";import"./clsx-B-dksMZM.js";import"./Form-B1Ks0hwY.js";import"./useFocusRing-D2_28YrY.js";import"./index-BPHMLxna.js";import"./index-AUNQREmD.js";import"./Input-MG-MEaLF.js";import"./Hidden-CTte53jM.js";import"./Button-Cc-TNn9L.js";import"./useLabels-C80eq718.js";import"./useButton-D4PZb1F-.js";import"./FieldError-CSW0NKF8.js";import"./Text-DxL6Rji7.js";import"./clsx-Ciqy0D92.js";import"./Text-KyyKZpMF.js";import"./RSPContexts-B8g52CrK.js";import"./Group-BH48pCuV.js";import"./useControlledState-HdtZioBu.js";import"./useLocalizedStringFormatter-Cul2dCid.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSx09bq-.js";import"./useField-BdJOpr4_.js";import"./TextField.module-DdivwlC8.js";import"./search-B39i6yHR.js";import"./createLucideIcon-BKDiJvQY.js";import"./x--g3_ok1a.js";import"./useLocalizedStringFormatter-BW0f4aMp.js";import"./Button-DjmPZJ5Y.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C0OILqoq.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
