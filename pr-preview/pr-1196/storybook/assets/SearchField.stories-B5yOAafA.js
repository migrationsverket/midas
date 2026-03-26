import{S as i}from"./SearchField-Dxrx8BFs.js";import"./iframe-DUmnjMKN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0xSMeEGm.js";import"./clsx-B-dksMZM.js";import"./Form-CMYZ7XKZ.js";import"./useFocusRing-CNLfoayx.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./Input-Dpw-0U33.js";import"./Hidden-Cfzmra0d.js";import"./Button-6X6Z2oCH.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./FieldError-0rnN8Sj0.js";import"./Text-CeMQVnHe.js";import"./clsx-Ciqy0D92.js";import"./Text-CnbD-jnj.js";import"./RSPContexts-QZF1MtLT.js";import"./Group-CKnMjZ9q.js";import"./useControlledState-D6z3aXVM.js";import"./useLocalizedStringFormatter-Brx_2IRC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DCCVHlVZ.js";import"./useField-iVKXJziX.js";import"./TextField.module-DdivwlC8.js";import"./search-DSfGT6ug.js";import"./createLucideIcon-D1JpQBbc.js";import"./x-54C-wf8A.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./Button-tmoOZgUj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cb4icQhq.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
