import{S as i}from"./SearchField-DVEaY0N-.js";import"./iframe-DmNPUwJF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dh-PwKV8.js";import"./clsx-B-dksMZM.js";import"./Form-C6AulDIl.js";import"./useFocusRing-BP4HKvPD.js";import"./index-D7iFWbiU.js";import"./index-zqi-VihA.js";import"./Input-DQVad2MI.js";import"./Hidden-CmDSCNgN.js";import"./Button-CVX6slyJ.js";import"./useLabel-x3JXI5A6.js";import"./useLabels-Dtp6pYD3.js";import"./useButton-DpMfdXMB.js";import"./FieldError-CRuVxlm4.js";import"./Text-D0ZjjTeW.js";import"./clsx-Ciqy0D92.js";import"./Text-C7BN_W1g.js";import"./RSPContexts-DpZBoqVv.js";import"./Group-Cd9zdqZ4.js";import"./useControlledState-DBKo4wr0.js";import"./useLocalizedStringFormatter-B5MBjwfs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D__rASGL.js";import"./useField-Bj4uuUS8.js";import"./TextField.module-DdivwlC8.js";import"./search-HMFpM__q.js";import"./createLucideIcon-eE295ZHw.js";import"./x-DBWgEmNi.js";import"./useLocalizedStringFormatter-CqULl0lq.js";import"./Button-CBE5oTrg.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xsknM-vp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
