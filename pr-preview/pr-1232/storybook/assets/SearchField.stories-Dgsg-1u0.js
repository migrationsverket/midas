import{S as i}from"./SearchField-CuaxzTf7.js";import"./iframe-CiZlFozv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtoKVfJq.js";import"./clsx-B-dksMZM.js";import"./Form-CPfOE8lK.js";import"./useFocusRing-C8iINmO1.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./Input-B76nlUBd.js";import"./Hidden-CBUgc4Bq.js";import"./Button-CxmVBxVQ.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./FieldError-BFjjyPg1.js";import"./Text-Dp6H8GRU.js";import"./clsx-Ciqy0D92.js";import"./Text-CXoRcQkQ.js";import"./RSPContexts-fJFJPzCo.js";import"./Group-DRiAJmX2.js";import"./useControlledState-k5LcuuXZ.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMXOK1F5.js";import"./useField-Bx-SoAUQ.js";import"./TextField.module-DdivwlC8.js";import"./search-DFA0X_oP.js";import"./createLucideIcon-DFSC9aW4.js";import"./x-DBo1ex8S.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Button-BS9Q-Own.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D6ktoCNF.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
