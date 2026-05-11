import{S as i}from"./SearchField-BMREzEjS.js";import"./iframe-BFuflVuT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVETsxUB.js";import"./clsx-B-dksMZM.js";import"./Form-_O7owz9U.js";import"./useFocusRing-BGj7TLCb.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./Input-1iFcmsQM.js";import"./Hidden-CWAGeXUM.js";import"./Button-Bvi4kTfB.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./FieldError-B21E2xEp.js";import"./Text-50232H9V.js";import"./clsx-Ciqy0D92.js";import"./Text-Cd7qZGor.js";import"./RSPContexts-BKJ_hWyQ.js";import"./Group-DxDnkT_x.js";import"./useControlledState-D_V-QnC2.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOeOV3eO.js";import"./useField-CmfWuk6-.js";import"./TextField.module-DdivwlC8.js";import"./search-Dj2zVnle.js";import"./createLucideIcon-CY2uueIZ.js";import"./x-Dlq0AP5X.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Button-B_e2-Iv-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ChouFcZQ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
