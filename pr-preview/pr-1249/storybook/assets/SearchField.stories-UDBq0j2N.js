import{S as i}from"./SearchField-gyR6Y9-6.js";import"./iframe-DwYJYgGb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./Form-CF6mtsDJ.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./Input-_uPRWUXT.js";import"./Hidden-CwjkXMFO.js";import"./Button-Ddo8eX0a.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./FieldError-8dF8Tbve.js";import"./Text-B4syvpmZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhOo0fu.js";import"./RSPContexts-DE3QJKMh.js";import"./Group-C2t1rW1T.js";import"./useControlledState-CxwoTKvB.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYPEtwKi.js";import"./useField-mcTKDTGz.js";import"./TextField.module-DdivwlC8.js";import"./search-C9tAf1QT.js";import"./createLucideIcon-CCgdfoT7.js";import"./x-CX4TJhGN.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Button-DpQdXJp1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0sEyNoY.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
