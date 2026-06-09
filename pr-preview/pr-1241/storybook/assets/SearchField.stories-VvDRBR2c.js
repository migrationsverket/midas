import{S as i}from"./SearchField-B4A6DxU-.js";import"./iframe-CaeJqQ8f.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./Form-CA7TkeoX.js";import"./useFocusRing-B-IWjK53.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./Input-CpOyXK4o.js";import"./Hidden-DAb19HuU.js";import"./Button-CmYrsmdS.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./FieldError-BMeh3Mm5.js";import"./Text-kWHKD_uI.js";import"./clsx-Ciqy0D92.js";import"./Text-23GvJn9a.js";import"./RSPContexts-C23pPjhB.js";import"./Group-CTKcef7T.js";import"./useControlledState-DVDrYLuR.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OY8v5_0u.js";import"./useField-DDJhIXmw.js";import"./TextField.module-DdivwlC8.js";import"./search-PtOO4Frg.js";import"./createLucideIcon-Bkh4JM6J.js";import"./x-BNT6PRWH.js";import"./useLocalizedStringFormatter-CsL4vBQb.js";import"./Button-rTp5uTED.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CDogNmlo.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
