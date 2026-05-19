import{S as i}from"./SearchField-B_Gqmrlo.js";import"./iframe-TmYtQgnY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvgYso-7.js";import"./clsx-B-dksMZM.js";import"./Form-DALGR-BM.js";import"./useFocusRing-DS5bIIsk.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./Input-evjaDaYE.js";import"./Hidden-Curp_cq_.js";import"./Button-ChpfMuYO.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./FieldError-7FPxvhrU.js";import"./Text-Buf9POGu.js";import"./clsx-Ciqy0D92.js";import"./Text-T0trnrKS.js";import"./RSPContexts-DD-NCnvs.js";import"./Group-DFvqsGLM.js";import"./useControlledState-D8j9ZCcX.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BH15xdHg.js";import"./useField-T1pIVFYf.js";import"./TextField.module-DdivwlC8.js";import"./search-werSkSIa.js";import"./createLucideIcon-DeoFDGGs.js";import"./x-WIEiNIRj.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Button-CPisJxWJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bad1FF8A.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
