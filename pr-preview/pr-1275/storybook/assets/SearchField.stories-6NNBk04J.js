import{S as i}from"./SearchField-DWEYOmhm.js";import"./iframe-Cb8Pppl7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj888C4V.js";import"./clsx-B-dksMZM.js";import"./Form-CFGWDFPn.js";import"./useFocusRing-hqoRcLtB.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./Input-5LTcMgXu.js";import"./Hidden-COGS7kep.js";import"./Button-C8pMS1J_.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./FieldError-D0-fOVgu.js";import"./Text-D2Ko1ZUZ.js";import"./clsx-Ciqy0D92.js";import"./Text-C5__ZA60.js";import"./RSPContexts-DHg3Hsl6.js";import"./Group-NyRvfXLY.js";import"./useControlledState-ixH4fEDK.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DbdeBffJ.js";import"./useField-BqzVMgOW.js";import"./TextField.module-DdivwlC8.js";import"./search-pnMiair_.js";import"./createLucideIcon-D7UMDINh.js";import"./x-BvWkyjfg.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Button-D4LxrXr0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DtKq5Gdo.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
