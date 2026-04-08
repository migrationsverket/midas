import{S as i}from"./SearchField-C_FWNOqN.js";import"./iframe-DeJZYfs6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVaTJ4pr.js";import"./clsx-B-dksMZM.js";import"./Form-C-IA29jh.js";import"./useFocusRing-EUZ5WM39.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./Input-7EHMCOwY.js";import"./Hidden-CpOEnTcU.js";import"./Button-TyrtoBf7.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./FieldError-Bu4wLSzH.js";import"./Text-DiI9AjCa.js";import"./clsx-Ciqy0D92.js";import"./Text-BDvIHgKo.js";import"./RSPContexts-BW4hyt92.js";import"./Group-B-AmjHbU.js";import"./useControlledState-e4htfzmn.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNvSGf-Y.js";import"./useField-DP3RVU73.js";import"./TextField.module-DdivwlC8.js";import"./search-JKSuR115.js";import"./createLucideIcon-BN41fbAL.js";import"./x-QMdCwQzi.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Button-7AU2H28z.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C7trIB5i.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
