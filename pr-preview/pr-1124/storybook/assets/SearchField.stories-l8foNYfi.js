import{S as i}from"./SearchField-oITdbOcW.js";import"./iframe-DH698doG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mVgYYLB3.js";import"./clsx-B-dksMZM.js";import"./Form-CD59Qj0z.js";import"./useFocusRing-BGlk11Cg.js";import"./index-DMd-E98X.js";import"./index-DdbUDU8H.js";import"./Input-lk79nvOO.js";import"./Hidden-lMTjRszI.js";import"./Button-BtUst4AR.js";import"./useLabels-D0yThyi4.js";import"./useButton-D9Hw2-4l.js";import"./FieldError-LfuFvrGD.js";import"./Text-wTeCM58U.js";import"./clsx-Ciqy0D92.js";import"./Text-B6-Pmcz8.js";import"./RSPContexts-BEJaOB8S.js";import"./Group-CUa0FXuH.js";import"./useControlledState-BAbuv76Z.js";import"./useLocalizedStringFormatter-GBxrcPr6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Br6ZModO.js";import"./useField-m9aJz28J.js";import"./TextField.module-DdivwlC8.js";import"./search-Dl74F3CS.js";import"./createLucideIcon-CRaNdiYT.js";import"./x-Cpk9L1c7.js";import"./useLocalizedStringFormatter-BLVqg3Su.js";import"./Button-D64pEHkS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C_koxuPK.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
