import{S as i}from"./SearchField-DW4zl99s.js";import"./iframe-DhO1D3QS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSNCD2yj.js";import"./clsx-B-dksMZM.js";import"./Form-DQnVBK_C.js";import"./useFocusRing-CQcNXJs3.js";import"./index-LXpDKKNQ.js";import"./index-DoTz7Iqr.js";import"./Input-C6g8_Qf3.js";import"./Hidden-I1lhyBbs.js";import"./Button-C3UugFSS.js";import"./useLabel-DkS0rVDY.js";import"./useLabels-DLba56LZ.js";import"./useButton-CWHmgq4Y.js";import"./FieldError-BUEn5Oe2.js";import"./Text-_SRXujoE.js";import"./clsx-Ciqy0D92.js";import"./Text-CzyDiWSu.js";import"./RSPContexts-6O3ucjMQ.js";import"./Group-C20hGe4g.js";import"./useControlledState-C9CuHrJu.js";import"./useLocalizedStringFormatter-BuzJnweE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_37wv57.js";import"./useField-DoQL0GGr.js";import"./TextField.module-DdivwlC8.js";import"./search-D60npjly.js";import"./createLucideIcon-DKHdgiD6.js";import"./x-CdBi1_si.js";import"./useLocalizedStringFormatter-D1NPH8NW.js";import"./Button-Do0NIfC4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D9luNuIh.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
