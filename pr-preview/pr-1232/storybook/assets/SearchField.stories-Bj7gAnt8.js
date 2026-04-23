import{S as i}from"./SearchField-FiXEAgKR.js";import"./iframe-BzE31zAh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEtUikZw.js";import"./clsx-B-dksMZM.js";import"./Form-arZIN1dN.js";import"./useFocusRing-CqeBj5xm.js";import"./index-DdObABro.js";import"./index-DiZkuWFN.js";import"./Input-v2RlOuXS.js";import"./Hidden-7JIM7zeN.js";import"./Button-DG_UrG-_.js";import"./useLabel-BsvNbn_r.js";import"./useLabels-BAeRD83W.js";import"./useButton-zcjb-0dd.js";import"./FieldError-Bs0ZVONG.js";import"./Text-BM4F5w0Y.js";import"./clsx-Ciqy0D92.js";import"./Text-DWgTuz7g.js";import"./RSPContexts-BP6VbO9Z.js";import"./Group-w0fPDDmc.js";import"./useControlledState-PVT6AeJ2.js";import"./useLocalizedStringFormatter-iW6IrIfx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CWJDtFat.js";import"./useField-BBuU5S3O.js";import"./TextField.module-DdivwlC8.js";import"./search-CMEvlmM8.js";import"./createLucideIcon-Lrfi9yqC.js";import"./x-23zMaYXZ.js";import"./useLocalizedStringFormatter-BIklF50D.js";import"./Button-D6ialrwI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-4w0VX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
