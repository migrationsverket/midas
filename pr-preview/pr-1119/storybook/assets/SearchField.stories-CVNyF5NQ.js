import{S as i}from"./SearchField-sks0M6Ya.js";import"./iframe-CPefQOMB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEaTr3Fo.js";import"./clsx-B-dksMZM.js";import"./Form-CpmcMTFY.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./Input-DmkKW2MK.js";import"./Hidden-CMfLv80K.js";import"./Button-CZP9j9FA.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./FieldError-HmUKiVb0.js";import"./Text-DYVOn2Uj.js";import"./clsx-Ciqy0D92.js";import"./Text-CxFNT2uR.js";import"./RSPContexts-BAtoVYGO.js";import"./Group-D1X3vN9H.js";import"./useControlledState-D3MUrnpH.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BWVMWcat.js";import"./useField-BdgyFtJ7.js";import"./TextField.module-DdivwlC8.js";import"./search-CnMus8QO.js";import"./createLucideIcon-CMS1EKmC.js";import"./x-BnYSOvfM.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";import"./Button-BiVXJ2cY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-En7Y8aD0.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
