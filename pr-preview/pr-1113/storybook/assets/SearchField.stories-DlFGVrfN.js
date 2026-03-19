import{S as i}from"./SearchField-zQdhd1e1.js";import"./iframe-DmYAiZdS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ce8T3nBz.js";import"./clsx-B-dksMZM.js";import"./Form-MQFNPBez.js";import"./useFocusRing-uVSx56YJ.js";import"./index-Clg0oazY.js";import"./index-BekCUKef.js";import"./Input-Lx8fWuo8.js";import"./Hidden-DSqyIKF7.js";import"./Button-B_13vb86.js";import"./useLabels-o8QMpPqb.js";import"./useButton-DhL-fajU.js";import"./FieldError-UD24mey6.js";import"./Text-Cpi_AAzk.js";import"./clsx-Ciqy0D92.js";import"./Text-DrUi_0Jd.js";import"./RSPContexts-6HyyfxyX.js";import"./Group-CDnaQ8lB.js";import"./useControlledState-C0DEKgGJ.js";import"./useLocalizedStringFormatter-BxKtkIxd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUFV13OO.js";import"./useField-BQBCqG7h.js";import"./TextField.module-DdivwlC8.js";import"./search-jr1Wzets.js";import"./createLucideIcon-Cd1S2Ifo.js";import"./x-BXdaKO9_.js";import"./useLocalizedStringFormatter-BrrMXkxk.js";import"./Button-CF56JNsj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HoFr5-6u.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
