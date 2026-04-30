import{S as i}from"./SearchField-DWHWB95R.js";import"./iframe-C2VOWNy0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DL-QRm3L.js";import"./clsx-B-dksMZM.js";import"./Form-DieApCia.js";import"./useFocusRing-tC1N5ZLd.js";import"./index-BznYJ3G3.js";import"./index-HiVmXaez.js";import"./Input-BfCXUBQw.js";import"./Hidden-BpHByyx6.js";import"./Button-MPfMNKtf.js";import"./useLabel-CxUvvvjx.js";import"./useLabels-Szx34EwE.js";import"./useButton-BqHFL3UV.js";import"./FieldError-jk1VrFqC.js";import"./Text-Cxs3PxNa.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp8Xagmv.js";import"./RSPContexts-Cjt7Khrj.js";import"./Group-Cp8FqMk5.js";import"./useControlledState-DnakpviL.js";import"./useLocalizedStringFormatter-BtBT9ZZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8e3oCBs.js";import"./useField-Cy-oi4SU.js";import"./TextField.module-DdivwlC8.js";import"./search-uqi8xg-J.js";import"./createLucideIcon-DQ7ZZ5Wg.js";import"./x-DCx4jyMP.js";import"./useLocalizedStringFormatter-BAlXpd6A.js";import"./Button-BlyWqisU.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-B4dPT57A.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
