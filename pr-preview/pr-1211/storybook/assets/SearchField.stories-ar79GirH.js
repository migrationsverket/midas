import{S as i}from"./SearchField-DwQj3hcr.js";import"./iframe-IoRZPpzT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BxE4vEtI.js";import"./clsx-B-dksMZM.js";import"./Form-an_t5IvV.js";import"./useFocusRing-Cfj0kgNA.js";import"./index-C3u5Wnjv.js";import"./index-CWXAEqH-.js";import"./Input-BrOSOBAi.js";import"./Hidden-wW-xxMhm.js";import"./Button-CVTJNyWz.js";import"./useLabel-Cv3-1VeN.js";import"./useLabels-0sv1QR26.js";import"./useButton-BSTxFbL2.js";import"./FieldError-BWVbvEBE.js";import"./Text-Bm8kOdo3.js";import"./clsx-Ciqy0D92.js";import"./Text-fDJLlYrf.js";import"./RSPContexts-BGd6R71q.js";import"./Group-013S7T0p.js";import"./useControlledState-BGABXmqM.js";import"./useLocalizedStringFormatter-Dl-vCCz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-AuN8sM1I.js";import"./useField-Vudx1VTG.js";import"./TextField.module-DdivwlC8.js";import"./search-DkL5zT34.js";import"./createLucideIcon-D_o_RWfS.js";import"./x-BKVjaePe.js";import"./useLocalizedStringFormatter-DWwCwLPP.js";import"./Button-fE-_CYhO.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DVgF-hYp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
