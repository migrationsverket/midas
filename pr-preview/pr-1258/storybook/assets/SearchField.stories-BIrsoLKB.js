import{S as i}from"./SearchField-DJPnLeMr.js";import"./iframe-Bsevwbh7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BjUYJUY7.js";import"./clsx-B-dksMZM.js";import"./Form-iwCra6U3.js";import"./useFocusRing-DBBFiexc.js";import"./index-0Uf6_8UJ.js";import"./index-CpU-YPFf.js";import"./Input-DIhOLcQb.js";import"./Hidden-BzElwnOz.js";import"./Button-BBqJQ0vW.js";import"./useLabel-DSPZXDj4.js";import"./useLabels-CDo4fr32.js";import"./useButton-CLSd70bQ.js";import"./FieldError-BOklNagG.js";import"./Text-C73-jwg3.js";import"./clsx-Ciqy0D92.js";import"./Text-DtHsSzf4.js";import"./RSPContexts-BP83SwVZ.js";import"./Group-N6yrWHuu.js";import"./useControlledState-J6z6hn1D.js";import"./useLocalizedStringFormatter-Cz7KI8RO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-E5OriAto.js";import"./useField-C9u-Vza6.js";import"./TextField.module-DdivwlC8.js";import"./search-Yb3FVn0L.js";import"./createLucideIcon-DFszj1HS.js";import"./x-CPgoGNLm.js";import"./useLocalizedStringFormatter-DXTgKJtU.js";import"./Button-Dtn1R1va.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrA1NcJU.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
