import{S as i}from"./SearchField-B54kR5_P.js";import"./iframe-Ex-KEKbR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dq_8TIe4.js";import"./clsx-B-dksMZM.js";import"./Form-CXAt5UpX.js";import"./useFocusRing-H-1VYNNS.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./Input-CN9bHUmc.js";import"./Hidden-CyDaCMoS.js";import"./Button-C8JSYTF8.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./FieldError-CgmLooUG.js";import"./Text-CeEAoIdH.js";import"./clsx-Ciqy0D92.js";import"./Text-DJaiOuNK.js";import"./RSPContexts-DxlwqgCa.js";import"./Group-uGzZW66D.js";import"./useControlledState-OUr4VazD.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BU2Zn2Z3.js";import"./useField-BOXq6rqV.js";import"./TextField.module-DdivwlC8.js";import"./search-DsTHWAni.js";import"./createLucideIcon-CnalT5R6.js";import"./x-D_4t1M2T.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Button-BAZVnFvD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1UrQI4k.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
