import{S as i}from"./SearchField-DWNSPowP.js";import"./iframe-CX9u6T8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_VHG1Gv.js";import"./clsx-B-dksMZM.js";import"./Form-CcjwXvgg.js";import"./useFocusRing-VvtcDzXm.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./Input-MSTc-SIR.js";import"./Hidden-BBME2lcH.js";import"./Button-DNtvrS_L.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./FieldError--tTRVDtY.js";import"./Text-C6_BqquS.js";import"./clsx-Ciqy0D92.js";import"./Text-e2IPEiX4.js";import"./RSPContexts-BNooXlrN.js";import"./Group-DykfZ54i.js";import"./useControlledState-CqdFbIjJ.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJBn353g.js";import"./useField-B8XYujKH.js";import"./TextField.module-DdivwlC8.js";import"./search-Bq6tr9Zu.js";import"./createLucideIcon-B3Yd5B-T.js";import"./x-3RPgUNSS.js";import"./useLocalizedStringFormatter-BMBTKo38.js";import"./Button-DlDZpI3n.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQlGnIWD.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
