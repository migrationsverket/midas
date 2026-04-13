import{S as i}from"./SearchField-CY3_WbZb.js";import"./iframe-CYSKzr0I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ByZ0CNGg.js";import"./clsx-B-dksMZM.js";import"./Form-DeTa1GGT.js";import"./useFocusRing-BOmMevWO.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./Input-B5TltZNv.js";import"./Hidden-nUwUlPG8.js";import"./Button-DDpb5IsZ.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./FieldError-pBIr7GBS.js";import"./Text-D-FhadIY.js";import"./clsx-Ciqy0D92.js";import"./Text-BV0i2D1f.js";import"./RSPContexts-aAwDc8x5.js";import"./Group-kfhBFxvy.js";import"./useControlledState-YbLesBTN.js";import"./useLocalizedStringFormatter-ClZt7a0N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wzBMBhWC.js";import"./useField-9poXgOx8.js";import"./TextField.module-DdivwlC8.js";import"./search-C6lbHB7U.js";import"./createLucideIcon-DLSGmePH.js";import"./x-BEC-7ATt.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./Button-BBfM7fHR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5I2qOtz.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
