import{S as i}from"./SearchField-Bv6lzaTV.js";import"./iframe-TDsHiw9c.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DFK3ftG0.js";import"./clsx-B-dksMZM.js";import"./Form-DrGj5S3q.js";import"./useFocusRing-D-BQBv-v.js";import"./index-CWZOiNf1.js";import"./index-Cblya1pl.js";import"./Input-Pda8CAWB.js";import"./Hidden-aVRRAvvd.js";import"./Button-BZ0QUIXr.js";import"./useLabel-De4TtVrY.js";import"./useLabels-z_MUf0yQ.js";import"./useButton-Be-gBZL5.js";import"./FieldError-D00axG9h.js";import"./Text-BDcQTCXw.js";import"./clsx-Ciqy0D92.js";import"./Text-BTMF7VME.js";import"./RSPContexts-CLirld8T.js";import"./Group-Fsc_xOdt.js";import"./useControlledState-BONMuXu4.js";import"./useLocalizedStringFormatter-Da5BvhPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZsD89Hj.js";import"./useField-Djaz5aQj.js";import"./TextField.module-DdivwlC8.js";import"./search-RQZX2FVx.js";import"./createLucideIcon-Diz4XGXj.js";import"./x-DlwJGxMz.js";import"./useLocalizedStringFormatter-DxUswB7b.js";import"./Button-BFdMqc_h.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpvkWfyr.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
