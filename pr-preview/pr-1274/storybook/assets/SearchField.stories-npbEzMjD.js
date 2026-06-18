import{S as i}from"./SearchField-BOkthLDh.js";import"./iframe-BrwpvQHc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BACMs3jS.js";import"./clsx-B-dksMZM.js";import"./Form-QTUFbTxy.js";import"./useFocusRing-ay8XrwpJ.js";import"./index-e4zmhYiJ.js";import"./index-CfMCfkTD.js";import"./Input-CqxWm35E.js";import"./Hidden-62uiVpgl.js";import"./Button-CyBHSIdo.js";import"./useLabel-1zqhq5YX.js";import"./useLabels-D7FAWWUV.js";import"./useButton-DKTae0i9.js";import"./FieldError-Bn-kD1g2.js";import"./Text-Cp5vE00Z.js";import"./clsx-Ciqy0D92.js";import"./Text-B8xII3uk.js";import"./RSPContexts-LKuPHdSI.js";import"./Group-EsSCRkvs.js";import"./useControlledState-BuArS6Zg.js";import"./useLocalizedStringFormatter-CkzWLLcE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CtISlFAN.js";import"./useField-BfH21yjI.js";import"./TextField.module-DdivwlC8.js";import"./search-CcjFmNP9.js";import"./createLucideIcon-DL41wzn8.js";import"./x-C3Fvjogf.js";import"./useLocalizedStringFormatter-V2VPiIBS.js";import"./Button-BhMRkAV6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DRJAfVxE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
