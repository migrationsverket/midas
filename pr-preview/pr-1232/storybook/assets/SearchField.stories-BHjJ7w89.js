import{S as i}from"./SearchField-DpSjoxhd.js";import"./iframe-Bsq2Gecy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEAPqOk0.js";import"./clsx-B-dksMZM.js";import"./Form-CirE0Ecy.js";import"./useFocusRing-Duh6XNKg.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./Input-CVVchZra.js";import"./Hidden-BUmnbfmf.js";import"./Button-Dgb6FvaO.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./FieldError-C-dVYh2X.js";import"./Text-BbliZ5q4.js";import"./clsx-Ciqy0D92.js";import"./Text-CN4UKteu.js";import"./RSPContexts-B54NxITZ.js";import"./Group-D5jdMy_A.js";import"./useControlledState-BhYy7T42.js";import"./useLocalizedStringFormatter-CvMlUMFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DR-qlDF_.js";import"./useField-ErwE8ZmA.js";import"./TextField.module-DdivwlC8.js";import"./search-DyksJvQg.js";import"./createLucideIcon-CYPfeOBH.js";import"./x-BiXsmrYJ.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./Button-2sJltsSG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dj8T0Unv.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
