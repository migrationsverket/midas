import{S as i}from"./SearchField-DXdKXJEC.js";import"./iframe-CZzQp4L4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./Form-659gi0gy.js";import"./useFocusRing-BmXcpeVt.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./Input-DFxiIJ3V.js";import"./Hidden-BsPoJuN8.js";import"./Button-CMuMpLTA.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./FieldError-B2NzjSdH.js";import"./Text-D4nq5ZrE.js";import"./clsx-Ciqy0D92.js";import"./Text-CgRiWgOz.js";import"./RSPContexts-C0f-FQan.js";import"./Group-A-mQcfpV.js";import"./useControlledState-Bzqk2M-v.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BlQ66k1M.js";import"./useField-C2MfHxqd.js";import"./TextField.module-DdivwlC8.js";import"./search-D3dPv408.js";import"./createLucideIcon-Cp1wTSwb.js";import"./x-BkS9uTgk.js";import"./useLocalizedStringFormatter-DHizypL-.js";import"./Button-fUmHoMv6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-aeJx5n8b.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
