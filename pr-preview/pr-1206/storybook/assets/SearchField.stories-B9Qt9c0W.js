import{S as i}from"./SearchField-CXuGyElG.js";import"./iframe-CPZ4_d2q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DWW_dCIy.js";import"./clsx-B-dksMZM.js";import"./Form-D49Ri7OX.js";import"./useFocusRing-d1kY_X2y.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./Input-Du1VWq2r.js";import"./Hidden-ddHOLGj0.js";import"./Button-CXhapsAk.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./FieldError-rOuvG30X.js";import"./Text-C-nhapA_.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhoFnBV.js";import"./RSPContexts-CNU_cvLJ.js";import"./Group-Abbeg9Sy.js";import"./useControlledState-DiN_YqvG.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPTUmy2B.js";import"./useField-DjwAKZ9N.js";import"./TextField.module-DdivwlC8.js";import"./search-De_-Snl0.js";import"./createLucideIcon-CHHQY25e.js";import"./x-_8u0d44F.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Button-hn_7_4-p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_2Qiydl.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
