import{S as i}from"./SearchField-DVwW1efi.js";import"./iframe-D1quRbgW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5jbBDEho.js";import"./clsx-B-dksMZM.js";import"./Form-CYOiDrvK.js";import"./useFocusRing-9kJRwLWf.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./Input-D6BpUq6c.js";import"./Hidden-CE_f7fkS.js";import"./Button-BhbL5JV7.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./FieldError-tCCfgJxh.js";import"./Text-3Qvoq1in.js";import"./clsx-Ciqy0D92.js";import"./Text-D_OKwN2L.js";import"./RSPContexts-BOAQgN9e.js";import"./Group-BYE11aio.js";import"./useControlledState-DeZ6Yvot.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vt5FCW9J.js";import"./useField-Cufj8K7g.js";import"./TextField.module-DdivwlC8.js";import"./search-CIgwiHOl.js";import"./createLucideIcon-xiP51FEZ.js";import"./x-C6gJ_9jG.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Button-BfQ6mpwy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BTPkzFD2.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
