import{S as i}from"./SearchField-DU9e4lUK.js";import"./iframe-DWjCTUGS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-jft35r8I.js";import"./clsx-B-dksMZM.js";import"./Form-fTl9ZSRE.js";import"./useFocusRing-By5vzM2y.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./Input-_7XqZgB0.js";import"./Hidden-Crg89ChB.js";import"./Button-C9b-TJtb.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./FieldError-B_RQwvpG.js";import"./Text-Dg63mXaz.js";import"./clsx-Ciqy0D92.js";import"./Text-eFe150r9.js";import"./RSPContexts-Csylolnc.js";import"./Group-DtXYA5qI.js";import"./useControlledState-CkptqhP6.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-HwJ_gv6h.js";import"./useField-76ZmfiRI.js";import"./TextField.module-DdivwlC8.js";import"./search-CtBBVvKE.js";import"./createLucideIcon-B9xTeaix.js";import"./x-BkZO3SMW.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Button-ClirsJfj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DBHrI_B7.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
