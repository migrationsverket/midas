import{S as i}from"./SearchField-CtO6Hsti.js";import"./iframe-DDkxC9AE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bv-3ie4X.js";import"./clsx-B-dksMZM.js";import"./Form-CGJqMPHB.js";import"./useFocusRing-C43-8fCQ.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./Input-DkmOOcYX.js";import"./Hidden-BdbLRp3U.js";import"./Button-CUTFiFAp.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./FieldError-B9fj7azt.js";import"./Text-BtXc1lRV.js";import"./clsx-Ciqy0D92.js";import"./Text-1G0eP0RO.js";import"./RSPContexts-C5FShT2F.js";import"./Group-COxqjzKt.js";import"./useControlledState-DDBKKIZJ.js";import"./useLocalizedStringFormatter-em54CWSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ViwtlI3S.js";import"./useField-DdUlwoVZ.js";import"./TextField.module-DdivwlC8.js";import"./search-ChdjbgI5.js";import"./createLucideIcon-tquE4JOn.js";import"./x-zjzglfs-.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./Button-nixYBadL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ZtpMBoq6.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
