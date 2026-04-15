import{S as i}from"./SearchField-CA7z-6WY.js";import"./iframe-DjTiQbk5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ionmxpx_.js";import"./clsx-B-dksMZM.js";import"./Form-DuGe5VBy.js";import"./useFocusRing-DMf_tcM8.js";import"./index-zhJsHxyL.js";import"./index-D7ZGMXkv.js";import"./Input-CDNzlbFx.js";import"./Hidden-CDamOlST.js";import"./Button-DA9JAHIV.js";import"./useLabel-CLuSEdHo.js";import"./useLabels-BB0a4MRb.js";import"./useButton-CB170Mhz.js";import"./FieldError-CUTcgzRi.js";import"./Text-C_ch0y44.js";import"./clsx-Ciqy0D92.js";import"./Text-Cem6pM3f.js";import"./RSPContexts-BQojnwjm.js";import"./Group-Cbp4935P.js";import"./useControlledState-DLtB8m1U.js";import"./useLocalizedStringFormatter-b3SQCftA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DoHnYcWO.js";import"./useField-DuPle7CC.js";import"./TextField.module-DdivwlC8.js";import"./search-BnSfbhCI.js";import"./createLucideIcon-CJ41k5Dv.js";import"./x-B1F8kTQk.js";import"./useLocalizedStringFormatter-Bs_4plvK.js";import"./Button-DB82qK_z.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQ7IztLz.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
