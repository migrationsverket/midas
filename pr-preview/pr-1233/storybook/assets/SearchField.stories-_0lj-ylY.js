import{S as i}from"./SearchField-BnkpoZS-.js";import"./iframe-CuHS7f-D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BFq6s5qx.js";import"./clsx-B-dksMZM.js";import"./Form-KXBu28U1.js";import"./useFocusRing-c3yj8psb.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./Input-qYlI4fVr.js";import"./Hidden-DQfRALgS.js";import"./Button-BHwczPOP.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./FieldError-DWjsvXUz.js";import"./Text-wtPwzvaL.js";import"./clsx-Ciqy0D92.js";import"./Text-Suqt0mTK.js";import"./RSPContexts-CmGu2gwM.js";import"./Group-BFyk5cnr.js";import"./useControlledState-Kxt6bXWr.js";import"./useLocalizedStringFormatter-MxafZpyg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CwzW4wa_.js";import"./useField-CrVq981-.js";import"./TextField.module-DdivwlC8.js";import"./search-wVEnZZxy.js";import"./createLucideIcon-WRij3kcs.js";import"./x-9kI0zPFb.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./Button-CT4-7PnM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-sy5lx_M_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
