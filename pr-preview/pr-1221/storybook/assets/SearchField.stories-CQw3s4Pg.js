import{S as i}from"./SearchField-6-lDwnQY.js";import"./iframe-CJ-60Efo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZH6ruXT.js";import"./clsx-B-dksMZM.js";import"./Form-CC7WfIHq.js";import"./useFocusRing-CupJGFR5.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./Input-CP1yInaz.js";import"./Hidden-DsEAHCyp.js";import"./Button-DEbA7b2J.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./FieldError-DwTCOkZc.js";import"./Text-Bn5fWWC4.js";import"./clsx-Ciqy0D92.js";import"./Text-duXz9LRx.js";import"./RSPContexts-DWc37NkB.js";import"./Group-wIK1IaXS.js";import"./useControlledState-xfItMrqO.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BLmCLSnX.js";import"./useField-avb_z8h9.js";import"./TextField.module-DdivwlC8.js";import"./search-DfzPiY0E.js";import"./createLucideIcon-n1hD9M9W.js";import"./x-CqpjZLya.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Button-DePLT0p9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhklY17S.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
