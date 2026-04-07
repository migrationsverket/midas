import{S as i}from"./SearchField-BPe1v0Tl.js";import"./iframe-oKPevWaY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./Form-D8hKIz8A.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./Input-CjDHzIIp.js";import"./Hidden-DpO7vPy1.js";import"./Button-UMnKvlHB.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./FieldError-B9nT_kkA.js";import"./Text-NuhHAO3F.js";import"./clsx-Ciqy0D92.js";import"./Text-CEmixCfV.js";import"./RSPContexts-I8GuPoNW.js";import"./Group-D4AR734E.js";import"./useControlledState-CyVhgPro.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B-1OQ-Tr.js";import"./useField-Bl_GZwWa.js";import"./TextField.module-DdivwlC8.js";import"./search-a7Ruo4We.js";import"./createLucideIcon-D_CPhcXk.js";import"./x-DIFCquM7.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5YwBUcA.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
