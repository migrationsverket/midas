import{S as i}from"./SearchField-CDb0QqDo.js";import"./iframe-CWKpWNkk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZaHz_Vy.js";import"./clsx-B-dksMZM.js";import"./Form-ClSFU7sX.js";import"./useFocusRing-CpL5jV2W.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./Input-Dl4b6tmI.js";import"./Hidden-bt019v0w.js";import"./Button-apqjWUoz.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./FieldError-CQ-FvnYz.js";import"./Text-C7LaV_aB.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds_oVnWP.js";import"./RSPContexts-BCpmha9C.js";import"./Group-C9US1aCF.js";import"./useControlledState-DvoS3sKo.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSQ8xXA8.js";import"./useField-CPp_IGdL.js";import"./TextField.module-DdivwlC8.js";import"./search-Ba2RzVyZ.js";import"./createLucideIcon-DmuvpfBU.js";import"./x-BvIy6Ou7.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Button-WdsjujPh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CUqCo7Kt.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
