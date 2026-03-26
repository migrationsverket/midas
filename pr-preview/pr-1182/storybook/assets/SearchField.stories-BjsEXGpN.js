import{S as i}from"./SearchField-CiRy5F3X.js";import"./iframe-BfMhQjGU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaDNkmjx.js";import"./clsx-B-dksMZM.js";import"./Form-BqegSd4k.js";import"./useFocusRing-C5Yjq8eB.js";import"./index-CANV50_Z.js";import"./index-DcgLR03X.js";import"./Input-DUztjJHc.js";import"./Hidden-DhDQuc5B.js";import"./Button-9bk196xZ.js";import"./useLabel-DV2YbXB7.js";import"./useLabels-DmE0eIr6.js";import"./useButton-CVkS8nd6.js";import"./FieldError-xqjiIrlm.js";import"./Text-9jZvM0HP.js";import"./clsx-Ciqy0D92.js";import"./Text--boW3P5m.js";import"./RSPContexts-BaQPI9Wj.js";import"./Group-Bv4HrTCM.js";import"./useControlledState-DswV1VSh.js";import"./useLocalizedStringFormatter-qWRJ97i-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DuPz2ck0.js";import"./useField-B97SdsPB.js";import"./TextField.module-DdivwlC8.js";import"./search-CpNNaqg1.js";import"./createLucideIcon-DSNzZSu6.js";import"./x-CGIghyVu.js";import"./useLocalizedStringFormatter-7a6_xXLI.js";import"./Button-blC6kfyz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CrEXwPZJ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
