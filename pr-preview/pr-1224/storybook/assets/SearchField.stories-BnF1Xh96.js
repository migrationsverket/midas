import{S as i}from"./SearchField-CNkqy3Kn.js";import"./iframe-Cwp_nH2i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D58tzseF.js";import"./clsx-B-dksMZM.js";import"./Form-DM5Rvxjr.js";import"./useFocusRing-DNNGYKVr.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./Input-CAIXe99i.js";import"./Hidden-BUSQ_LLM.js";import"./Button-BYfq0wpH.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./FieldError-DkJf33vr.js";import"./Text-h4_45G40.js";import"./clsx-Ciqy0D92.js";import"./Text-ooZ4PKli.js";import"./RSPContexts-BgIiqfY1.js";import"./Group-Bif-dsKf.js";import"./useControlledState-DjKqHFBe.js";import"./useLocalizedStringFormatter-C-PIG7PB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DpE7ZZyR.js";import"./useField-B_VPmbL6.js";import"./TextField.module-DdivwlC8.js";import"./search-DwBegIwi.js";import"./createLucideIcon-CL7AaBb9.js";import"./x-DV3Rl8a5.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./Button-D-SHIeik.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-c7FiOqp6.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
