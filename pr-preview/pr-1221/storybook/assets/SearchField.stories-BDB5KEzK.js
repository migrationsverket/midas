import{S as i}from"./SearchField-BKsA6mAI.js";import"./iframe-D1Yo_ASl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./Form-BTzQwVTd.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./Input-bSTNyt_1.js";import"./Hidden-BeKvJ1wg.js";import"./Button-M2F6_Qz4.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./FieldError-BrTiJca0.js";import"./Text-CC_-JfUc.js";import"./clsx-Ciqy0D92.js";import"./Text-Cm1JxqTj.js";import"./RSPContexts-TtF35Naa.js";import"./Group-CAMsnLF6.js";import"./useControlledState-DI2wiQtX.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BXYFaxrk.js";import"./useField--yXn37df.js";import"./TextField.module-DdivwlC8.js";import"./search-BsLvG9mQ.js";import"./createLucideIcon-B2W31-43.js";import"./x-Dx4ggZKu.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BaAY3BDc.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
