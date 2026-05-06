import{S as i}from"./SearchField-Ce8ZIAq5.js";import"./iframe-UnOrZDCo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKy0aGzr.js";import"./clsx-B-dksMZM.js";import"./Form-Bt6GvUIb.js";import"./useFocusRing-Bp9IxzZX.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./Input-Cs81vcsg.js";import"./Hidden-BgWTJ4vd.js";import"./Button-Bxrzo9c5.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./FieldError-BTGqp3OT.js";import"./Text-C6YEGwEA.js";import"./clsx-Ciqy0D92.js";import"./Text-BkvdwtUJ.js";import"./RSPContexts-B4tPHjXP.js";import"./Group-BljE0MsX.js";import"./useControlledState-DgxohqQv.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ByLEKpTJ.js";import"./useField-DLZ_5onF.js";import"./TextField.module-DdivwlC8.js";import"./search-D_8HMHSN.js";import"./createLucideIcon-A1bnhQ0L.js";import"./x-DWogN0h0.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Button-DZKUgycP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ulNGrwFD.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
