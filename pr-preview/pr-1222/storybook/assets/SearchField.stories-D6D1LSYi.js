import{S as i}from"./SearchField-C6bLVXcX.js";import"./iframe-CgWG_iU2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./Form-CrH2ZpvP.js";import"./useFocusRing-Dsycni8a.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./Input-RxD5CMUw.js";import"./Hidden-D3aMc9rP.js";import"./Button-ByOlI6-C.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./FieldError-D-IJ4T5L.js";import"./Text-Dj7d9dGS.js";import"./clsx-Ciqy0D92.js";import"./Text-dFUGDIq7.js";import"./RSPContexts-Bs45BnO9.js";import"./Group-C-cJ-Nhy.js";import"./useControlledState-BM6BESXh.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C28V9mVK.js";import"./useField-s0ioTJPg.js";import"./TextField.module-DdivwlC8.js";import"./search-D4qW24VA.js";import"./createLucideIcon-DjCctUN5.js";import"./x-Dv2iooYO.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Button-nHuGQ5i0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oanLmiAX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
