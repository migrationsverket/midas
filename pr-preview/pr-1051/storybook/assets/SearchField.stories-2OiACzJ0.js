import{S as i}from"./SearchField-ddLBffY3.js";import"./iframe-B5fT8W8B.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bh7KGz6i.js";import"./clsx-B-dksMZM.js";import"./Form-g6SjH7Xy.js";import"./useFocusRing-BgTsLm0m.js";import"./index-CkX7KbtT.js";import"./index-C5IsVOl0.js";import"./Input-Be8NFDJ3.js";import"./Hidden-DB3eEGqq.js";import"./Button-DoDt4li8.js";import"./useLabels-D60PMjBU.js";import"./useButton-CPqG-nUq.js";import"./FieldError-C1zhQcfr.js";import"./Text-DOeKj6x7.js";import"./clsx-Ciqy0D92.js";import"./Text-DNRTdsIF.js";import"./RSPContexts-D1Lpp2lJ.js";import"./Group-DnN7o3-X.js";import"./useControlledState-BGmHapEN.js";import"./useLocalizedStringFormatter-CcytJjyB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUd_Ep5z.js";import"./useField-BJB193JT.js";import"./TextField.module-DdivwlC8.js";import"./search-BfR0D9Ed.js";import"./createLucideIcon-ChldPQr9.js";import"./x-G9O7KDBX.js";import"./useLocalizedStringFormatter-CVUeiCFD.js";import"./Button-Cbu0zB47.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DiGmQZwe.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
