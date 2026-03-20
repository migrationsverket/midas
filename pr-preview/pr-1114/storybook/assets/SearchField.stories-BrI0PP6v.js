import{S as i}from"./SearchField-D442Pa6w.js";import"./iframe-wk1uxL0R.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BKmHeGDP.js";import"./clsx-B-dksMZM.js";import"./Form-CL-CASjO.js";import"./useFocusRing-mtIFdSYG.js";import"./index-DpCKx4XG.js";import"./index-B9EV4M0O.js";import"./Input-_h69kBPT.js";import"./Hidden-OSmil6gU.js";import"./Button-BJm7MwiY.js";import"./useLabels-Z8jFtyR8.js";import"./useButton-CzrLl786.js";import"./FieldError-5unwDnAP.js";import"./Text-D_aWqMlk.js";import"./clsx-Ciqy0D92.js";import"./Text-BueF1im7.js";import"./RSPContexts-CLBTCfJ3.js";import"./Group-CdK-XhPN.js";import"./useControlledState-DQ_KGuHt.js";import"./useLocalizedStringFormatter-Ceub4S3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CCULMzBF.js";import"./useField-cHCcHNn5.js";import"./TextField.module-DdivwlC8.js";import"./search-DjoNJW_J.js";import"./createLucideIcon-DGfTdO3_.js";import"./x-DV0orzgr.js";import"./useLocalizedStringFormatter-KI7sGx_d.js";import"./Button-DDyJ2oTu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2txOMCT.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
