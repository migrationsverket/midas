import{S as i}from"./SearchField-ZfPBoWD4.js";import"./iframe-DpTmCcsu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./Form-ZmL5cGy_.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./Input-Dmb9VKDV.js";import"./Hidden-pLTvcnD_.js";import"./Button-BsQKBFvZ.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./FieldError-DZQ02WXe.js";import"./Text-C2ABOPKT.js";import"./clsx-Ciqy0D92.js";import"./Text-DZjjFYeH.js";import"./RSPContexts-CDes9nfa.js";import"./Group-CjaNmGuh.js";import"./useControlledState-Du11SrDH.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-y31WfOTf.js";import"./useField-BZUShFHQ.js";import"./TextField.module-DdivwlC8.js";import"./search-C2L64Ler.js";import"./createLucideIcon-BVEhdOTx.js";import"./x-Ch6sGbPf.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dp3u6Svq.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
