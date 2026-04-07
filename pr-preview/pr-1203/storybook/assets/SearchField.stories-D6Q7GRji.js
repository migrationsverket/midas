import{S as i}from"./SearchField-OjdOqL3l.js";import"./iframe-QwZUgaLO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5PAaS6l.js";import"./clsx-B-dksMZM.js";import"./Form-B3ZZchXU.js";import"./useFocusRing-DCV7Bvm3.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./Input-C_LA6nTg.js";import"./Hidden-qsgafZIY.js";import"./Button-D9S27FhL.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./FieldError-vnsH4bsL.js";import"./Text-CjsrR6_S.js";import"./clsx-Ciqy0D92.js";import"./Text-XaIsUgQ9.js";import"./RSPContexts-CRJgyFJK.js";import"./Group-Bpr5GJCw.js";import"./useControlledState-DGCNkOh1.js";import"./useLocalizedStringFormatter-B8e3KCPt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ci1dramH.js";import"./useField-D8U6vQ86.js";import"./TextField.module-DdivwlC8.js";import"./search-BfDo_xsw.js";import"./createLucideIcon-BN5DVyg5.js";import"./x-CLIz2YWd.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./Button-CEqP3wI_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7afogpp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
