import{S as i}from"./SearchField-B95tU0il.js";import"./iframe-C-mFL-y5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D1nXJARU.js";import"./clsx-B-dksMZM.js";import"./Form-BnpClDkZ.js";import"./useFocusRing-BcE_QfPF.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./Input-B5Q3TADs.js";import"./Hidden-9ao8Y1ps.js";import"./Button-muDgoa96.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./FieldError-5__MdH0k.js";import"./Text-BMqghmwo.js";import"./clsx-Ciqy0D92.js";import"./Text-CCSjYwix.js";import"./RSPContexts-D19sCzde.js";import"./Group-BxnUnKSO.js";import"./useControlledState-CYklShRN.js";import"./useLocalizedStringFormatter-DwJHjI96.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BP8G-PJi.js";import"./useField-CphlyUa3.js";import"./TextField.module-DdivwlC8.js";import"./search-CAS3IBHP.js";import"./createLucideIcon-B54AhZJE.js";import"./x-CfBPXENx.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./Button-DbyCtJuo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CO1695QU.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
