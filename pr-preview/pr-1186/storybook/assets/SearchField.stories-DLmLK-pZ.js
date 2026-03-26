import{S as i}from"./SearchField-DfK-732W.js";import"./iframe-Cd0-ZcsP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhqpUTpA.js";import"./clsx-B-dksMZM.js";import"./Form-CVMbYt33.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./Input-D97QSq7i.js";import"./Hidden-CPmKijlW.js";import"./Button-7ELWuSQK.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./FieldError-1WFTuS_h.js";import"./Text-DyAmcS7z.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw2Ugvgy.js";import"./RSPContexts-Co104av2.js";import"./Group-L4zEm_4E.js";import"./useControlledState-d4JhcqA_.js";import"./useLocalizedStringFormatter-eRJpNzx7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BwqM3_Fh.js";import"./useField-DAxwXtOh.js";import"./TextField.module-DdivwlC8.js";import"./search-fy7IDt52.js";import"./createLucideIcon-BVwfSxcn.js";import"./x-DC2j07Yv.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./Button-pofFgtnZ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUU_0XCx.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
