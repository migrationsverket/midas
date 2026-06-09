import{S as i}from"./SearchField-AcAChwFn.js";import"./iframe-ChiJKfMX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dm4E4mwc.js";import"./clsx-B-dksMZM.js";import"./Form-tG479UME.js";import"./useFocusRing-C3m7c-xg.js";import"./index-CKWxshzR.js";import"./index-C6BXlkmx.js";import"./Input-CazRXs1x.js";import"./Hidden-BaIjPHil.js";import"./Button-DW_Sqb80.js";import"./useLabel-DFY6Hgn5.js";import"./useLabels-DqUEOu1i.js";import"./useButton-B2C85R1d.js";import"./FieldError-Bf_I7BGY.js";import"./Text-D-VvP9KN.js";import"./clsx-Ciqy0D92.js";import"./Text-FMeRFHDx.js";import"./RSPContexts-CERUV9Us.js";import"./Group-DWzWI2Bt.js";import"./useControlledState-BXkqcj0T.js";import"./useLocalizedStringFormatter-DxP6DEYd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5YX-k1j.js";import"./useField-DdqVKbLW.js";import"./TextField.module-DdivwlC8.js";import"./search-Ct3-aqZv.js";import"./createLucideIcon-CGmKAaMX.js";import"./x-Ca-xMBZU.js";import"./useLocalizedStringFormatter-Dpd2BHxH.js";import"./Button-CL16j7Sc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D09TEuo-.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
