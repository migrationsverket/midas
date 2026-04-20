import{S as i}from"./SearchField-D-_lUdMu.js";import"./iframe-DHMeiSea.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./Form-BA5p4_Pr.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./Input-f9ifWMLK.js";import"./Hidden-BDTDIVWX.js";import"./Button-X7Yqj24b.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./FieldError-lPOYj5uT.js";import"./Text-BM4AoGMt.js";import"./clsx-Ciqy0D92.js";import"./Text-OJU2i65y.js";import"./RSPContexts-BSo_BzMb.js";import"./Group-D0pRYruO.js";import"./useControlledState-CMV_FSB4.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-3cQ0mlc5.js";import"./useField-DM8ENoK0.js";import"./TextField.module-DdivwlC8.js";import"./search-CTzFn2zU.js";import"./createLucideIcon-DHfZe-cT.js";import"./x-C9bWyskH.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Button-DRj-uv9d.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V6Y_A8T3.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
