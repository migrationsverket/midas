import{S as i}from"./SearchField-BOb5SFtM.js";import"./iframe-CSArLD6f.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CCBKoGgU.js";import"./clsx-B-dksMZM.js";import"./Form-BIzjWTDH.js";import"./useFocusRing-IWQ1hWag.js";import"./index-DIECvqes.js";import"./index-ywIekiaj.js";import"./Input-CvOxm1Hc.js";import"./Hidden-C3bxkDXx.js";import"./Button-CVc2L7QK.js";import"./useLabel-6yPvvDeu.js";import"./useLabels-y6WFRAzY.js";import"./useButton-Ivv3_IdO.js";import"./FieldError-B5M3gUUv.js";import"./Text-BU71TyQs.js";import"./clsx-Ciqy0D92.js";import"./Text-DYmfOSM7.js";import"./RSPContexts-gcUc6sbV.js";import"./Group-kgmteNLn.js";import"./useControlledState-DaW5OxR1.js";import"./useLocalizedStringFormatter-WHf9z393.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yjLoMu7B.js";import"./useField-BAs0XYJF.js";import"./TextField.module-DdivwlC8.js";import"./search-DHn6NyoK.js";import"./createLucideIcon-DROqj45j.js";import"./x-C6uKjybT.js";import"./useLocalizedStringFormatter-BBjTg30D.js";import"./Button-CWyJ-riM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-46ezc1h_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
