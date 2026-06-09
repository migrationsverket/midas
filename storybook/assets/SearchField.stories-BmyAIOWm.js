import{S as i}from"./SearchField-K_v8eo0t.js";import"./iframe-BKRZxWBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Y4JGSljl.js";import"./clsx-B-dksMZM.js";import"./Form-fTlquUmi.js";import"./useFocusRing-CbgDMaVp.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./Input-By6lc-FN.js";import"./Hidden-D261fXZx.js";import"./Button-Bag6HyT1.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./FieldError-DG-tonkS.js";import"./Text-DGzS_SrA.js";import"./clsx-Ciqy0D92.js";import"./Text-8xjuYN6y.js";import"./RSPContexts-BLR_J2o2.js";import"./Group-B955Gz_D.js";import"./useControlledState-C2ay6qCb.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBLab7Xb.js";import"./useField-CPhZds7-.js";import"./TextField.module-DdivwlC8.js";import"./search-CpKNJr64.js";import"./createLucideIcon-B2GxFjYG.js";import"./x-BTizcETx.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./Button-D0aetTqs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbkQs6Cg.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
