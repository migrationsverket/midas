import{S as i}from"./SearchField-CPIlngxb.js";import"./iframe-Du56DBQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAvnU5Td.js";import"./clsx-B-dksMZM.js";import"./Form-CXEH7Fev.js";import"./useFocusRing-f_eVeiMs.js";import"./index-CuQRkvKt.js";import"./index-QgZ7VLnC.js";import"./Input-DrE2OjmY.js";import"./Hidden-pui8tPLU.js";import"./Button-Bp_A6Sod.js";import"./useLabel-B6ITnJQY.js";import"./useLabels-BbAQfqg_.js";import"./useButton-BRUJuVat.js";import"./FieldError-OzBsZtu-.js";import"./Text-BILk2R8l.js";import"./clsx-Ciqy0D92.js";import"./Text-Cp0RoVFZ.js";import"./RSPContexts-DOVRjuky.js";import"./Group-Kw1De_li.js";import"./useControlledState-DMDoFiwU.js";import"./useLocalizedStringFormatter-CWz9Ovv4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-hCBROf8B.js";import"./useField-DAQMiV2l.js";import"./TextField.module-DdivwlC8.js";import"./search-BKMmhtHo.js";import"./createLucideIcon-CmFcJ4zx.js";import"./x-Cw-UH40G.js";import"./useLocalizedStringFormatter-B6x4H80B.js";import"./Button-COw5A1XQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DfEAH0ac.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
