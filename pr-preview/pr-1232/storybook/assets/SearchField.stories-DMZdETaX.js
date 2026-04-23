import{S as i}from"./SearchField-CT40X37V.js";import"./iframe-CcS9-zHY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BpPVMEC-.js";import"./clsx-B-dksMZM.js";import"./Form-B4Em8h3U.js";import"./useFocusRing-DtQX9EVQ.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./Input-Dr_jNhta.js";import"./Hidden-C5RVHIuY.js";import"./Button-CP1lY-X_.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./FieldError-CbsUmaqP.js";import"./Text-Bk3CxDKX.js";import"./clsx-Ciqy0D92.js";import"./Text-BzFZDvz7.js";import"./RSPContexts-CbDTmKmT.js";import"./Group-DNVF67sa.js";import"./useControlledState-BouQOm1H.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOrC1Htv.js";import"./useField-B-LqTpNQ.js";import"./TextField.module-DdivwlC8.js";import"./search-BanY5Jc-.js";import"./createLucideIcon-C0GJ5EwW.js";import"./x-I-qa-SpT.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Button-D2itB7Px.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hYYm2jyD.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
