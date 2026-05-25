import{S as i}from"./SearchField-CJuGO_Xz.js";import"./iframe-RhDbrXC3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DW8RLnA8.js";import"./clsx-B-dksMZM.js";import"./Form-BGhlaKqh.js";import"./useFocusRing-gsVXsph9.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./Input-Dm1er1Vq.js";import"./Hidden-UG-LGAyj.js";import"./Button-B7Qh-IV7.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./FieldError-BMJ6O_ac.js";import"./Text-BjSdk3hx.js";import"./clsx-Ciqy0D92.js";import"./Text-CcqjDRD2.js";import"./RSPContexts-CYLIcFJW.js";import"./Group-DhQ-VxvO.js";import"./useControlledState-DqxoR-5f.js";import"./useLocalizedStringFormatter-DVReLGbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEgpf5VL.js";import"./useField-D3_NVbG0.js";import"./TextField.module-DdivwlC8.js";import"./search-BGvnl2gG.js";import"./createLucideIcon-CO3bJS-y.js";import"./x-BCkyh0wS.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./Button-ByeM9eCK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BacDaEj4.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
