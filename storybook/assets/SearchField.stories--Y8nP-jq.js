import{S as i}from"./SearchField-D2fXxmz9.js";import"./iframe-Cg9cst3Z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2II4bp7.js";import"./clsx-B-dksMZM.js";import"./Form-_xeBhpeE.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./Input-C5Lj_Wzf.js";import"./Hidden-BgIlWTMH.js";import"./Button-ou8EhBUQ.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./FieldError-VvIdynkJ.js";import"./Text-B_9OfGMe.js";import"./clsx-Ciqy0D92.js";import"./Text-Bie4Jf82.js";import"./RSPContexts-CP6-3Q2F.js";import"./Group-BnEbGSsv.js";import"./useControlledState-L5_oq_SX.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFzhgPSu.js";import"./useField-BKczmHIS.js";import"./TextField.module-DdivwlC8.js";import"./search-T0SqDA5U.js";import"./createLucideIcon-DCEeRogg.js";import"./x-BSr4SWE3.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";import"./Button-rHVBUcPU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqMj_RBf.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
