import{S as i}from"./SearchField-DkU5_U5H.js";import"./iframe-BE6opBBQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./Form-BxafmMzb.js";import"./useFocusRing-B2vnni9l.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./Input-C-66vJoQ.js";import"./Hidden-ZOBOpRNs.js";import"./Button-33q5ghqc.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./FieldError-rh0vxGNi.js";import"./Text-DssX7oue.js";import"./clsx-Ciqy0D92.js";import"./Text-DXKcxlic.js";import"./RSPContexts-D18522_R.js";import"./Group-DRgvDqS1.js";import"./useControlledState-DKq-QKGp.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_muvX0L.js";import"./useField-Dwn3J9rA.js";import"./TextField.module-DdivwlC8.js";import"./search-Qc1nauMZ.js";import"./createLucideIcon-BCuYuRMM.js";import"./x-D6OAu6QL.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./Button-C8N-CVIU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TQ9t5iSG.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
