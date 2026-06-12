import{S as i}from"./SearchField-BlLm8wMJ.js";import"./iframe-CWlixrW_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./Form-DiqHwhIn.js";import"./useFocusRing-DDmLMMaV.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./Input-BebCl7JJ.js";import"./Hidden-C139jkL0.js";import"./Button-kA2ued5f.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./FieldError-BKAyDRlQ.js";import"./Text-oz4ou16d.js";import"./clsx-Ciqy0D92.js";import"./Text-CaYrS64L.js";import"./RSPContexts-D4D98plB.js";import"./Group-4GKF3_A1.js";import"./useControlledState-CzRWfzat.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6alrfwPS.js";import"./useField-Do_CZFfm.js";import"./TextField.module-DdivwlC8.js";import"./search-BMCm-RPq.js";import"./createLucideIcon-Ay7p0EQv.js";import"./x-BLTOENDc.js";import"./useLocalizedStringFormatter-BtK1NWhh.js";import"./Button-DHj3NF2u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BQ6ylskT.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
