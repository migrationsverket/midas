import{S as i}from"./SearchField-CF8yZM77.js";import"./iframe-DHxMEyk6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_yGkqEQ.js";import"./clsx-B-dksMZM.js";import"./Form-BSJcOZpD.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./Input-DpbKxiDC.js";import"./Hidden-CkZgcLGH.js";import"./Button-BpC7kCwC.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./FieldError-C2Sc9U8m.js";import"./Text-C0s7dJ5a.js";import"./clsx-Ciqy0D92.js";import"./Text-CSs2JSPr.js";import"./RSPContexts-xSY5mLjc.js";import"./Group-BjRO1dfk.js";import"./useControlledState-DToB7jqX.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RCL-8rD7.js";import"./useField-C7HbmUXj.js";import"./TextField.module-DdivwlC8.js";import"./search-uhQhncgQ.js";import"./createLucideIcon-uDhXojJY.js";import"./x-BasF0MYi.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oG0E9KZu.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
