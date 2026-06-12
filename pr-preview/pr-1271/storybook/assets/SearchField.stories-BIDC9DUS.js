import{S as i}from"./SearchField-DGY2FdDm.js";import"./iframe-CO-gAPhX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-k2fUJOcg.js";import"./clsx-B-dksMZM.js";import"./Form-BjE-JURH.js";import"./useFocusRing-BUNiQTJz.js";import"./index-DMx7-GyY.js";import"./index-CwA1oRHE.js";import"./Input-B5Jua51h.js";import"./Hidden-BYpeRQWv.js";import"./Button-DXT5LjXI.js";import"./useLabel-CFHzh0vI.js";import"./useLabels-BDaY_wZ1.js";import"./useButton-M9CtI4R_.js";import"./FieldError-BaYlcMBl.js";import"./Text-dYy03QVX.js";import"./clsx-Ciqy0D92.js";import"./Text-B90d5phV.js";import"./RSPContexts-Bk8niJAv.js";import"./Group-CnsmZZ9G.js";import"./useControlledState-DiHS_28D.js";import"./useLocalizedStringFormatter-Ckla6k3E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzbKYk1w.js";import"./useField-CIOLxdqj.js";import"./TextField.module-DdivwlC8.js";import"./search-B-3e7bux.js";import"./createLucideIcon-BnizQjgj.js";import"./x-q4leZoPv.js";import"./useLocalizedStringFormatter-CP5Hjs4T.js";import"./Button-CYSOGzux.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKCCpPT0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
