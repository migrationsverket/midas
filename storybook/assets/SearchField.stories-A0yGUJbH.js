import{S as i}from"./SearchField-XC-38Ka6.js";import"./iframe-B_HV58Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5bq7NR9.js";import"./clsx-B-dksMZM.js";import"./Form-Buk6T5M9.js";import"./useFocusRing-CQ6srqs1.js";import"./index-BV-Xu0hA.js";import"./index-BRioma8_.js";import"./Input-BaR7SQ2W.js";import"./Hidden-CWUxqDD_.js";import"./Button-9JB-LEJf.js";import"./useLabels-BLTcitxv.js";import"./useButton-86EcIjrD.js";import"./FieldError-DqYkTsF9.js";import"./Text-BmPT9jx1.js";import"./clsx-Ciqy0D92.js";import"./Text-ErMtNt0N.js";import"./RSPContexts-BqT_UpmT.js";import"./Group-DCmqm-9q.js";import"./useControlledState-BTwDuLxs.js";import"./useLocalizedStringFormatter-BvV0axQt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CsaqehcC.js";import"./useField-DMy_SaCN.js";import"./TextField.module-DdivwlC8.js";import"./search-BXqAER5a.js";import"./createLucideIcon-BVARARz1.js";import"./x-BovYJwPt.js";import"./useLocalizedStringFormatter-CoVb38JF.js";import"./Button-Bso6HAwt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D3wC15bS.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
