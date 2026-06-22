import{S as i}from"./SearchField-DqB10teE.js";import"./iframe-DcBIsMXx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5byDKFfB.js";import"./clsx-B-dksMZM.js";import"./Form-BrIhRNhF.js";import"./useFocusRing-D5tG7NYb.js";import"./index-Ddy-ld7t.js";import"./index-lIHyJaf-.js";import"./Input-DybDWXr1.js";import"./Hidden-DR2geLuk.js";import"./Button-C4Q8xd0B.js";import"./useLabel-Cl4TFLpj.js";import"./useLabels-x1_Sa4GJ.js";import"./useButton-CpEr-C_f.js";import"./FieldError-CA3FiWjt.js";import"./Text-DAtPV-yE.js";import"./clsx-Ciqy0D92.js";import"./Text-C7WBWqxX.js";import"./RSPContexts-CEHus4Pd.js";import"./Group-BKaapwgt.js";import"./useControlledState-e6Gq9Qx5.js";import"./useLocalizedStringFormatter-BLQND9we.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BeWQ-UA7.js";import"./useField-wfnZ9XHu.js";import"./TextField.module-DdivwlC8.js";import"./search-D1xZJm3x.js";import"./createLucideIcon-D8sotqZ_.js";import"./x-B6Pe-CX-.js";import"./useLocalizedStringFormatter-RHrCy6F9.js";import"./Button-CFaNyWK_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ILsWu368.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
