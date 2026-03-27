import{S as i}from"./SearchField-DA115vEQ.js";import"./iframe-BUTiSP7z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgvO5RRu.js";import"./clsx-B-dksMZM.js";import"./Form-B4-dBuGl.js";import"./useFocusRing-Ba-KD3wP.js";import"./index-xHN4e2Es.js";import"./index-DtSReIsm.js";import"./Input-45D5XBuv.js";import"./Hidden-ByRZ-jrH.js";import"./Button-Bo24jbF_.js";import"./useLabel-DayWlGa1.js";import"./useLabels-BFR96MD7.js";import"./useButton-DroPnLuM.js";import"./FieldError-CYEkkCc9.js";import"./Text-D5N8Dzak.js";import"./clsx-Ciqy0D92.js";import"./Text-LYM_b1_z.js";import"./RSPContexts-DLLJ83nY.js";import"./Group-CR6JA3qy.js";import"./useControlledState-BxwH6ylP.js";import"./useLocalizedStringFormatter-PGtNsfZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qftoGqFa.js";import"./useField-I3F-HNPn.js";import"./TextField.module-DdivwlC8.js";import"./search-CEks0ipO.js";import"./createLucideIcon-hh9ZE-Di.js";import"./x-BTgbWRg1.js";import"./useLocalizedStringFormatter-D6S3a2W6.js";import"./Button-Ktwig2Cy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xIEwbCvt.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
