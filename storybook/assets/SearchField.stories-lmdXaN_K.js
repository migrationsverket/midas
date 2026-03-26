import{S as i}from"./SearchField-oU8YLMGt.js";import"./iframe-SOAudsoD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIsr0dbb.js";import"./clsx-B-dksMZM.js";import"./Form-CDnZ42LZ.js";import"./useFocusRing-BAXSXuvY.js";import"./index-BD7D_b6m.js";import"./index-TydVMVST.js";import"./Input-MMdSgvnL.js";import"./Hidden-B1WT_Vdg.js";import"./Button-D067fNNN.js";import"./useLabel-CkEKqqdX.js";import"./useLabels-CF8dmUib.js";import"./useButton-BQJi0Bnf.js";import"./FieldError-DfImaZQ8.js";import"./Text-BaMrJhkm.js";import"./clsx-Ciqy0D92.js";import"./Text-BA3To6tW.js";import"./RSPContexts-CnPW4VcT.js";import"./Group-D4H6ASst.js";import"./useControlledState-Bfp68Ksh.js";import"./useLocalizedStringFormatter-DhVS51M8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKQU8tGo.js";import"./useField-BBN_lIAz.js";import"./TextField.module-DdivwlC8.js";import"./search-BrXNxNpy.js";import"./createLucideIcon-C9pXYI_x.js";import"./x-MNLtDlkP.js";import"./useLocalizedStringFormatter-DNP-DOoF.js";import"./Button-C52wufQI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DchdFXfm.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
