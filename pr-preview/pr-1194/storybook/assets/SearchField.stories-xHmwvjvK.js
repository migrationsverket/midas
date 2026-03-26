import{S as i}from"./SearchField-DR6wVRpl.js";import"./iframe-O6mcP7w5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-msXr86i8.js";import"./clsx-B-dksMZM.js";import"./Form-DFAJxP4u.js";import"./useFocusRing-DFc_QmgH.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./Input-_9crkkgl.js";import"./Hidden-BulmN4hD.js";import"./Button-BzVOX2eA.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./FieldError-CxFm68nF.js";import"./Text-D-DusRzY.js";import"./clsx-Ciqy0D92.js";import"./Text-CWuBzebG.js";import"./RSPContexts-BOI8AU7_.js";import"./Group-BBuyh76W.js";import"./useControlledState-BRRn0qym.js";import"./useLocalizedStringFormatter-7LpUttql.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Q9vPHk4M.js";import"./useField-Cm9c8J8E.js";import"./TextField.module-DdivwlC8.js";import"./search-C7HPvsm3.js";import"./createLucideIcon-rh706yg9.js";import"./x-76M_aj2E.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./Button-I2L11CLA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVj_UoLV.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
