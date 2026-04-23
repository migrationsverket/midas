import{S as i}from"./SearchField-BPGQMRIt.js";import"./iframe-9FvbyuW0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./Form-CxEXbquf.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./Input-bNYEqfXu.js";import"./Hidden-DVuO0yGr.js";import"./Button-C6F5UViI.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./FieldError-DXeE9aRb.js";import"./Text-DiUsHtEy.js";import"./clsx-Ciqy0D92.js";import"./Text-rctLJTJW.js";import"./RSPContexts--6FiGTU6.js";import"./Group-BTtkthVR.js";import"./useControlledState-DTpS52De.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CDf8M08J.js";import"./useField-BA20b1Lr.js";import"./TextField.module-DdivwlC8.js";import"./search-3bz1hq7P.js";import"./createLucideIcon-BM_MsqvO.js";import"./x-DkE65F2h.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Button-2CN5Xnme.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2w5ZOiK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
