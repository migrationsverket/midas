import{S as i}from"./SearchField-DtTMQWhQ.js";import"./iframe-DChMXCrL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BplLbAcs.js";import"./clsx-B-dksMZM.js";import"./Form-BAd9hYMN.js";import"./useFocusRing-BpLKk3JS.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./Input-ZbbcuS7K.js";import"./Hidden-H9l0LVv0.js";import"./Button-MapMtsGv.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./FieldError-BY3Emi0e.js";import"./Text-TXgPlLZT.js";import"./clsx-Ciqy0D92.js";import"./Text-CYuY9x3r.js";import"./RSPContexts-uXDlDre3.js";import"./Group-gGcgkmgi.js";import"./useControlledState-ovwSt6hg.js";import"./useLocalizedStringFormatter-CHUWFnrm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-E2JLN3xF.js";import"./useField-Cu7NXcUO.js";import"./TextField.module-DdivwlC8.js";import"./search-FYZSOBvH.js";import"./createLucideIcon-DiQgCGzM.js";import"./x-DKchXy5q.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./Button-5OLTPx-2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-O06opA_U.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
