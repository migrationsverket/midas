import{S as i}from"./SearchField-Cl75hlgO.js";import"./iframe-CWDqI9As.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dBjUBpAV.js";import"./clsx-B-dksMZM.js";import"./Form-Bi-96Kx0.js";import"./useFocusRing-CGI_ER4d.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./Input-Cd4gARcs.js";import"./Hidden-Cgjt9oWa.js";import"./Button-ChgRUqyy.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./FieldError-BFTOWK8w.js";import"./Text-CNhsvp3k.js";import"./clsx-Ciqy0D92.js";import"./Text-Bg0gZzcQ.js";import"./RSPContexts-BANsKMWb.js";import"./Group-EJLZZM0Q.js";import"./useControlledState-7TZpR_sr.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMHVb6gN.js";import"./useField-C8fPh8Wl.js";import"./TextField.module-DdivwlC8.js";import"./search-Dk47oInf.js";import"./createLucideIcon-CQ9K894w.js";import"./x-CzmzQROS.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Button-CT52BdlE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CSPSoyjM.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
