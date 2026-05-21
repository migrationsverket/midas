import{S as i}from"./SearchField-ISPfnSp9.js";import"./iframe-lVehiq6l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mNJ9Z0MW.js";import"./clsx-B-dksMZM.js";import"./Form-BVTVpFyF.js";import"./useFocusRing--_5FTCU2.js";import"./index-BYr4OlSN.js";import"./index-IBTB5hiH.js";import"./Input-DIC53MXy.js";import"./Hidden-CQ6hLYuq.js";import"./Button-CYmCkrOz.js";import"./useLabel-BJ5LbRsC.js";import"./useLabels-BVtbuBE4.js";import"./useButton-CaovbWyL.js";import"./FieldError-BiJGHbcs.js";import"./Text-BTYS5fVW.js";import"./clsx-Ciqy0D92.js";import"./Text-CB3b7It2.js";import"./RSPContexts-DMhdXzo5.js";import"./Group-Bj39cUw-.js";import"./useControlledState-BySGjGY5.js";import"./useLocalizedStringFormatter-Bj44o9Xo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DubTlxXT.js";import"./useField-C95X0ruH.js";import"./TextField.module-DdivwlC8.js";import"./search-MyojXdV3.js";import"./createLucideIcon-D1OyaQLn.js";import"./x-CCWQlqjq.js";import"./useLocalizedStringFormatter-qtrOBw-Q.js";import"./Button-Dp2V6GGG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C5EMcuEJ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
