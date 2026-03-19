import{S as i}from"./SearchField-CXIky1aU.js";import"./iframe-C9WX87J6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-WPpV5jWl.js";import"./clsx-B-dksMZM.js";import"./Form-CrDGPGDU.js";import"./useFocusRing-CAXYS_HG.js";import"./index-CHnbLAYQ.js";import"./index-La7aNuBH.js";import"./Input-DInRldIR.js";import"./Hidden-CEJtjfct.js";import"./Button-Bu5uxYhh.js";import"./useLabels-DgR_9Kxw.js";import"./useButton-CpsvKUvy.js";import"./FieldError-BMuqq62L.js";import"./Text-BCCgd_b8.js";import"./clsx-Ciqy0D92.js";import"./Text-BtCJyYmU.js";import"./RSPContexts-DpKSKp3G.js";import"./Group-WJ_ukR0V.js";import"./useControlledState-fvtCyn4a.js";import"./useLocalizedStringFormatter-D1_2bmqB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D-ryzgE-.js";import"./useField-CaDFVgqd.js";import"./TextField.module-DdivwlC8.js";import"./search-DCUPlTnb.js";import"./createLucideIcon-LB-mxs_a.js";import"./x-BtWXvI6-.js";import"./useLocalizedStringFormatter-zypQ79BF.js";import"./Button-CB3oN7z-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C27kR6LN.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
