import{S as i}from"./SearchField-BlndwHUQ.js";import"./iframe-D6LQdl6O.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZfNivSw.js";import"./clsx-B-dksMZM.js";import"./Form-DJN2nlTm.js";import"./useFocusRing-BDbVtPGE.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./Input-Cmu-G9wA.js";import"./Hidden-yz3dW65o.js";import"./Button-9qwLQrmH.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./FieldError-D0W-ZueW.js";import"./Text-CwW63OZO.js";import"./clsx-Ciqy0D92.js";import"./Text-RYp74C2J.js";import"./RSPContexts-wImFRte6.js";import"./Group-CxixKFtH.js";import"./useControlledState-FXE_mKkD.js";import"./useLocalizedStringFormatter-iIj43R9v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5294WGM.js";import"./useField-D9v9VApI.js";import"./TextField.module-DdivwlC8.js";import"./search-CeSqT--4.js";import"./createLucideIcon-kgcsXuQA.js";import"./x-CNFfLLin.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./Button-BVWIHAUA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cd1-ui_g.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
