import{S as i}from"./SearchField-CtQTaCxC.js";import"./iframe-BJvdaX8k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZkRQ_pis.js";import"./clsx-B-dksMZM.js";import"./Form-BV7WK4aN.js";import"./useFocusRing-DK9g2iem.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./Input-Cu4qY4tm.js";import"./Hidden-1TQ91tjS.js";import"./Button-2rxKwo5b.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./FieldError-Dsj3zxX_.js";import"./Text-BNMtUmCk.js";import"./clsx-Ciqy0D92.js";import"./Text-C0JJvFIL.js";import"./RSPContexts-CoTdr7hf.js";import"./Group-cyVCmGVY.js";import"./useControlledState-CFLNrtf2.js";import"./useLocalizedStringFormatter-DTwaBSs6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrwnAK80.js";import"./useField-Bt0bpF0c.js";import"./TextField.module-DdivwlC8.js";import"./search-CAn0QmSw.js";import"./createLucideIcon-CeO-jkh6.js";import"./x-DbFWgsIq.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./Button-Bns6iq4v.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PAT-EUPY.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
