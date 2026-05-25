import{S as i}from"./SearchField-N0qpi61f.js";import"./iframe-DHSFkIsy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZbTr4bL.js";import"./clsx-B-dksMZM.js";import"./Form-C4OsrVJ1.js";import"./useFocusRing-CNpZwhdZ.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./Input-MzB543d8.js";import"./Hidden-N-s-Oc-P.js";import"./Button-DwFLZ-vl.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./FieldError-DFzLFMIZ.js";import"./Text-Dlktz5kY.js";import"./clsx-Ciqy0D92.js";import"./Text-CE2-J5ib.js";import"./RSPContexts-Dm3G7A6M.js";import"./Group-GTWQChIb.js";import"./useControlledState-BC5iZhUu.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzfnvZVK.js";import"./useField-CmEVGEa7.js";import"./TextField.module-DdivwlC8.js";import"./search-TeCVRAI6.js";import"./createLucideIcon-Bhv8-C3S.js";import"./x-Ca2lmhP_.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Button-BCxQv38d.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CdVi298y.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
