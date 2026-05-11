import{S as i}from"./SearchField-DCrtNj3g.js";import"./iframe-9chkR4gz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BlWKHGoz.js";import"./clsx-B-dksMZM.js";import"./Form-Rrz88-kW.js";import"./useFocusRing-WYiiq_Gm.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./Input-CBS4hqhQ.js";import"./Hidden-Bdzqqxyq.js";import"./Button-D4nJHmzm.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./FieldError-vZw2hMgY.js";import"./Text-MA5MIJQJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp0Bwi6j.js";import"./RSPContexts-CUGomGxG.js";import"./Group-DQRpK11V.js";import"./useControlledState-CLfBe7O7.js";import"./useLocalizedStringFormatter-D-8D6EPs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CsFl93VO.js";import"./useField-Bqq6-wKZ.js";import"./TextField.module-DdivwlC8.js";import"./search-BKgNoaUj.js";import"./createLucideIcon-BKKhyqi3.js";import"./x-2BQcGtH9.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./Button-Ci--O4pG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V1FUVsZ9.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
