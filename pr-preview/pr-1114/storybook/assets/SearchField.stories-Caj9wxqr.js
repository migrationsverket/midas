import{S as i}from"./SearchField-D9IvaIBM.js";import"./iframe-BMuIqf2U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CzLgQND9.js";import"./clsx-B-dksMZM.js";import"./Form-AZXoGIRv.js";import"./useFocusRing-DrTSxcZR.js";import"./index-DrkjSw_E.js";import"./index-BzHeAC17.js";import"./Input-C5dbbndU.js";import"./Hidden-D30GFtt0.js";import"./Button-DOK0QqgZ.js";import"./useLabels-DL2LM1pj.js";import"./useButton-BIdZHsA8.js";import"./FieldError-BYsndT3-.js";import"./Text-CDpvKUAe.js";import"./clsx-Ciqy0D92.js";import"./Text-Yadq2hZ1.js";import"./RSPContexts-g3J5QWBf.js";import"./Group-DpYibYIB.js";import"./useControlledState-DRATP7Vg.js";import"./useLocalizedStringFormatter-hZHAja5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CmaI2bBi.js";import"./useField-BVB_nZx5.js";import"./TextField.module-DdivwlC8.js";import"./search-DEb1JrRO.js";import"./createLucideIcon-CEUfukBy.js";import"./x-BI9V4c-g.js";import"./useLocalizedStringFormatter-W3lFtewy.js";import"./Button-BsMPKC4Q.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPe22ZQU.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
