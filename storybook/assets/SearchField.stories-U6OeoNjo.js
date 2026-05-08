import{S as i}from"./SearchField-DQgxRKmF.js";import"./iframe-DG7j_jog.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DlqTy2YG.js";import"./clsx-B-dksMZM.js";import"./Form-D8vhhRij.js";import"./useFocusRing-CVU8iu1p.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./Input-Dd5m--iu.js";import"./Hidden-C_hvN9In.js";import"./Button-BXZJnhMA.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./FieldError-Jed7qGAw.js";import"./Text-qxRWFYP_.js";import"./clsx-Ciqy0D92.js";import"./Text-BYthEMg3.js";import"./RSPContexts-Dpj1kihF.js";import"./Group-BVfLijgn.js";import"./useControlledState-D0o-1ht4.js";import"./useLocalizedStringFormatter-Cy6w6_S0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0DEaxu-.js";import"./useField-NmEqGXbM.js";import"./TextField.module-DdivwlC8.js";import"./search-Cifgw-FB.js";import"./createLucideIcon-DciogvgI.js";import"./x-XMY5sYEL.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./Button-KUvfLJ-A.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DFIbjjfa.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
