import{S as i}from"./SearchField-Di0vtN_v.js";import"./iframe-gvsmTfDv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BKVt9q3t.js";import"./clsx-B-dksMZM.js";import"./Form-C4RmitN-.js";import"./useFocusRing-Bw2Eo1es.js";import"./index-zZ-VMYSr.js";import"./index-Dl6j7ESc.js";import"./Input-BqJAoGg0.js";import"./Hidden-BYsAXt4K.js";import"./Button-DfV_2-Zn.js";import"./useLabel-CAO0uGJ4.js";import"./useLabels-DHOPg_u-.js";import"./useButton-EAKdzl-u.js";import"./FieldError-Dt4wOzlE.js";import"./Text-D_-E26JC.js";import"./clsx-Ciqy0D92.js";import"./Text-B8IC8KHg.js";import"./RSPContexts-1qykiObf.js";import"./Group-DPO8_6bB.js";import"./useControlledState-CccMhTKY.js";import"./useLocalizedStringFormatter-CvPo1xmV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BKYFLcT2.js";import"./useField-BeWVgjPW.js";import"./TextField.module-DdivwlC8.js";import"./search-Bk9fzuxQ.js";import"./createLucideIcon-DCceu8CA.js";import"./x-Dvy_Fxlw.js";import"./useLocalizedStringFormatter-BwDUVQYw.js";import"./Button-B27aviMr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-M9fmIsYk.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
