import{S as i}from"./SearchField-DkO3XdBm.js";import"./iframe-BjXy11IP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./Form-DuPSWePz.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./Input-CFw_curM.js";import"./Hidden-B_bNI1dK.js";import"./Button-CwQmoSQG.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./FieldError-Bj299096.js";import"./Text-DM8Ihy_8.js";import"./clsx-Ciqy0D92.js";import"./Text-CXAF5biH.js";import"./RSPContexts-Dc6ISs8u.js";import"./Group-BOFuX5F4.js";import"./useControlledState-BFdO-Aas.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oCc11dAG.js";import"./useField-C2clUNbs.js";import"./TextField.module-DdivwlC8.js";import"./search-DHYHH9Mt.js";import"./createLucideIcon-BrUYswYS.js";import"./x-CBMTJOuE.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Button-CaR7So5F.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B8YjGTUD.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
