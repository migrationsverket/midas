import{S as i}from"./SearchField-D2IyliAU.js";import"./iframe-Cttpu6ri.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BuF_h7AP.js";import"./clsx-B-dksMZM.js";import"./Form-Akxi3hJ_.js";import"./useFocusRing-Da5Lg8ZZ.js";import"./index-D0txj7Kr.js";import"./index-dIHcpMJ6.js";import"./Input-ytqw39oT.js";import"./Hidden-C4gGqRbi.js";import"./Button-BgQeNeK3.js";import"./useLabel-CDs_h7ib.js";import"./useLabels-iWlhSr0B.js";import"./useButton-BMgOxl6g.js";import"./FieldError-iMDvMznL.js";import"./Text-Bia_ZCxP.js";import"./clsx-Ciqy0D92.js";import"./Text-BDpwDhFd.js";import"./RSPContexts-BavTxQ8D.js";import"./Group-DLtc9AkO.js";import"./useControlledState-Dikg9rpi.js";import"./useLocalizedStringFormatter-BUIk-26D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IjevuV_3.js";import"./useField-D8xc0ZN-.js";import"./TextField.module-DdivwlC8.js";import"./search-a5dkKbej.js";import"./createLucideIcon-DxQlc1dM.js";import"./x-B0jtMRI2.js";import"./useLocalizedStringFormatter-DKwzGpb3.js";import"./Button-BdE_pR_p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B52J-ASA.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
