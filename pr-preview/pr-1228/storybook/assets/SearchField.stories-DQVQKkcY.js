import{S as i}from"./SearchField-BHFepfsZ.js";import"./iframe-Xm_9cv73.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrYTleyQ.js";import"./clsx-B-dksMZM.js";import"./Form-bvdt1e3R.js";import"./useFocusRing-B1Kohi3p.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./Input-Bkd8beF6.js";import"./Hidden-BZlSwNP_.js";import"./Button-DVfOBJT3.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./FieldError-DghDJU9N.js";import"./Text-83WNws37.js";import"./clsx-Ciqy0D92.js";import"./Text-C4UzyOu1.js";import"./RSPContexts-D8VaqtGQ.js";import"./Group-CCaYHNjE.js";import"./useControlledState-B_fJsoKU.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DhuoEbb8.js";import"./useField-CVw2OaLJ.js";import"./TextField.module-DdivwlC8.js";import"./search-DucWg2ht.js";import"./createLucideIcon-9sC3-GJ0.js";import"./x-CXw9u6Gz.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Button-Da8bQidF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BGkpKKxN.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
