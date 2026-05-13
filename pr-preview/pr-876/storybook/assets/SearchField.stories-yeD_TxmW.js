import{S as i}from"./SearchField-2qb2WRw6.js";import"./iframe-XCmPjT_D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./Form-ClIjAo6w.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./Input-PfFttH7r.js";import"./Hidden-YeCUxupi.js";import"./Button-CNsl3901.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-BuJILbtP.js";import"./clsx-Ciqy0D92.js";import"./Text-RTx-QT4L.js";import"./RSPContexts-BqTpYPqw.js";import"./Group-C1BkV6KF.js";import"./useControlledState-CJRuvBEJ.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzF4rdmg.js";import"./useField-a2ZWKilV.js";import"./TextField.module-DdivwlC8.js";import"./search-BWZ8zxKN.js";import"./createLucideIcon-dj1Mp7UM.js";import"./x-DXC51em7.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DTL2Sb6w.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
