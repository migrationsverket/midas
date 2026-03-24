import{S as i}from"./SearchField-CMXyFact.js";import"./iframe-DZ1EsSEK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-lK9T8_jl.js";import"./clsx-B-dksMZM.js";import"./Form-Uz8HRtXw.js";import"./useFocusRing-D_vCbsr-.js";import"./index-71P1Szw3.js";import"./index-BQnaZYa2.js";import"./Input-CUDeexPh.js";import"./Hidden-Ds6hIAxc.js";import"./Button-ZOWpVm8T.js";import"./useLabels-D4tzMtOA.js";import"./useButton-c1Yevao-.js";import"./FieldError-BzMgxN1Q.js";import"./Text-DZdpfwqx.js";import"./clsx-Ciqy0D92.js";import"./Text-DqGoi7_4.js";import"./RSPContexts-BoDURVtR.js";import"./Group-CXVlAMhZ.js";import"./useControlledState-CfPDeg3b.js";import"./useLocalizedStringFormatter-D4af7QR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B9qE1ySm.js";import"./useField-BW5TjY1c.js";import"./TextField.module-DdivwlC8.js";import"./search-D6z4OQ0x.js";import"./createLucideIcon-CHs8jxVv.js";import"./x-CqUvAfPO.js";import"./useLocalizedStringFormatter-CXoae_qU.js";import"./Button-BU-tH8i8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DVsJMowt.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
