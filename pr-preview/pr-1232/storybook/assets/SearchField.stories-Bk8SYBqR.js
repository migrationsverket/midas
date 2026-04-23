import{S as i}from"./SearchField-CtpXgktB.js";import"./iframe-CM9gzC_-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXcBw8mX.js";import"./clsx-B-dksMZM.js";import"./Form-C7eTyKCv.js";import"./useFocusRing-Bz17EpSW.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./Input-Cgewi5HM.js";import"./Hidden-D0XxjEDh.js";import"./Button-4PfHMxFE.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./FieldError-Br-BXIw9.js";import"./Text-Bft1iTTC.js";import"./clsx-Ciqy0D92.js";import"./Text-DvQTbzsU.js";import"./RSPContexts-BGBhlXAt.js";import"./Group-CFJbaa2e.js";import"./useControlledState-D7RofSAB.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BsaCBvZg.js";import"./useField-DZeEaImT.js";import"./TextField.module-DdivwlC8.js";import"./search-DcqpQ_H1.js";import"./createLucideIcon-gLaeDi4P.js";import"./x-CRr9CCYv.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Button-DVDe5XTB.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CyPA52id.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
