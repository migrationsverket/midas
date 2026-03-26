import{S as i}from"./SearchField-CCOrfZ9L.js";import"./iframe-CmYiK-n6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DuGECbYJ.js";import"./clsx-B-dksMZM.js";import"./Form-b_mzsJNr.js";import"./useFocusRing-fb67MZCG.js";import"./index-uTF0zBZg.js";import"./index-3su9nmIU.js";import"./Input-DZg1c3XK.js";import"./Hidden-DYp0pP8Z.js";import"./Button-qoG5XtEP.js";import"./useLabel-DORwbiEm.js";import"./useLabels-CWIg4FvW.js";import"./useButton-DI4TpKGO.js";import"./FieldError-BH0tEXew.js";import"./Text-BjHkHRHl.js";import"./clsx-Ciqy0D92.js";import"./Text-Do0OahUX.js";import"./RSPContexts-CLCgQCox.js";import"./Group-DrusCoa1.js";import"./useControlledState-CmhxWbu6.js";import"./useLocalizedStringFormatter-DtH6xDXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DER5hTj5.js";import"./useField-BPzngyvH.js";import"./TextField.module-DdivwlC8.js";import"./search-CJBRb31b.js";import"./createLucideIcon-tBOZLxvE.js";import"./x-BVGBl3EY.js";import"./useLocalizedStringFormatter-Bg3jxnyj.js";import"./Button-CF9FU3kY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-3nqwjOvK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
