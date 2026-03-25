import{S as i}from"./SearchField-CS8F0Xwf.js";import"./iframe-ArSWsRFy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bk01FJOF.js";import"./clsx-B-dksMZM.js";import"./Form-vy4xYy7s.js";import"./useFocusRing-CuEBX_ny.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./Input-DsE3bmq_.js";import"./Hidden-DhQXB3Em.js";import"./Button-BEQHwt_x.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./FieldError-BB8VxeZz.js";import"./Text-BQUF3iRq.js";import"./clsx-Ciqy0D92.js";import"./Text-DS3DZlwG.js";import"./RSPContexts-CKQVnrYn.js";import"./Group-DYodJDFD.js";import"./useControlledState-BLEc30eS.js";import"./useLocalizedStringFormatter-C8sflf6-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMi09hYa.js";import"./useField-DlDxRxY8.js";import"./TextField.module-DdivwlC8.js";import"./search-t7vG6zCO.js";import"./createLucideIcon-xPhfpX1g.js";import"./x-BmJ6_yih.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./Button-B7NXJoV0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7lPtWpQ.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
