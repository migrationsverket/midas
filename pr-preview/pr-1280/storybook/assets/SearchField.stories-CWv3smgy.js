import{S as i}from"./SearchField-ChTJbmyU.js";import"./iframe-dvXwWV4I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSQgyNi0.js";import"./clsx-B-dksMZM.js";import"./Form-DVwVv6S8.js";import"./useFocusRing-CFfVe8sk.js";import"./index-BluzQUAG.js";import"./index-CbKl3GPI.js";import"./Input-gYxwRStd.js";import"./Hidden-BiX0nsQm.js";import"./Button-DtMCt8o7.js";import"./useLabel-DUS9osvw.js";import"./useLabels-CR4N-lVY.js";import"./useButton-DGlHeihW.js";import"./FieldError-C76blMz5.js";import"./Text-CQFRG3Bv.js";import"./clsx-Ciqy0D92.js";import"./Text-CqtbULFE.js";import"./RSPContexts-CrUawT1P.js";import"./Group-BV8wH11K.js";import"./useControlledState-zKncmKHQ.js";import"./useLocalizedStringFormatter-BZ3gM8Ke.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BkMuYRIu.js";import"./useField-oOkckiEp.js";import"./TextField.module-DdivwlC8.js";import"./search-BaQ_Lx-T.js";import"./createLucideIcon-Cuh90yXY.js";import"./x-BvR5c_PP.js";import"./useLocalizedStringFormatter-CE8NwZkm.js";import"./Button-DN_kkRXq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DTt1NZf8.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
