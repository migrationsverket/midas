import{S as i}from"./SearchField-CqMLAm94.js";import"./iframe-eNlvCIQC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DazIc8Hv.js";import"./clsx-B-dksMZM.js";import"./Form-Da29Si70.js";import"./useFocusRing-BmmlkTDk.js";import"./index-BZeDSjH7.js";import"./index-DngAPwAT.js";import"./Input-U924Lu33.js";import"./Hidden-BdbKhiKI.js";import"./Button-CefyB9za.js";import"./useLabel-B0k3Io0S.js";import"./useLabels-Dlb0vDOj.js";import"./useButton-DwspZCKK.js";import"./FieldError-D9ddsGCi.js";import"./Text-CCBMvhvi.js";import"./clsx-Ciqy0D92.js";import"./Text-DpGTS3fY.js";import"./RSPContexts-B8tIFTcn.js";import"./Group-tWso2G9U.js";import"./useControlledState-CSVjjcGV.js";import"./useLocalizedStringFormatter-B8bz883m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bk4zHeKd.js";import"./useField-9uUI2YDc.js";import"./TextField.module-DdivwlC8.js";import"./search-1a3JnN14.js";import"./createLucideIcon-CwcksuKO.js";import"./x-DfVN5ZiU.js";import"./useLocalizedStringFormatter-CfUiywgS.js";import"./Button-CcMDkuHu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4bD4gli.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
