import{S as i}from"./SearchField-DpFo6gaz.js";import"./iframe-BXzs3x0C.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7YpdZz-.js";import"./clsx-B-dksMZM.js";import"./Form-BXZvEm0b.js";import"./useFocusRing-DAr84UVu.js";import"./index-CHQe6g0w.js";import"./index-75OxiS6O.js";import"./Input-D0hNwtRc.js";import"./Hidden-HpZioBNJ.js";import"./Button-_6aq1n6B.js";import"./useLabel-D6E2-B37.js";import"./useLabels-w1sKaiJL.js";import"./useButton-CW3P_zOX.js";import"./FieldError-ZWe9d950.js";import"./Text-a0ukmHPT.js";import"./clsx-Ciqy0D92.js";import"./Text-DYh5wK03.js";import"./RSPContexts-CQe6j-NN.js";import"./Group-Ct6065UP.js";import"./useControlledState-DXnq9ftx.js";import"./useLocalizedStringFormatter-D7Rvr_ao.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BV2_ohzC.js";import"./useField-B3Bcv_v3.js";import"./TextField.module-DdivwlC8.js";import"./search-DN7t8c8K.js";import"./createLucideIcon-DAXq1X88.js";import"./x-BmIXIepj.js";import"./useLocalizedStringFormatter-6YC4OkXA.js";import"./Button-Bvp28ihJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C6-1r25j.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
