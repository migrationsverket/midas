import{S as i}from"./SearchField-BmEWnnOS.js";import"./iframe-CDA_ildW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DYwc33gT.js";import"./clsx-B-dksMZM.js";import"./Form-DdFGDuZ4.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./Input-Da3U7j3V.js";import"./Hidden-DPevkO8m.js";import"./Button-Djyjt8oy.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./FieldError-6T9sq_yG.js";import"./Text-K4BkD2rQ.js";import"./clsx-Ciqy0D92.js";import"./Text-ThZYXmAV.js";import"./RSPContexts-txMKpHrt.js";import"./Group-C2aha83k.js";import"./useControlledState-K9GQEKN-.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSELfoWC.js";import"./useField-DXzrxJwr.js";import"./TextField.module-DdivwlC8.js";import"./search-CIYgvpY0.js";import"./createLucideIcon-HvfaTVWX.js";import"./x-BUsqX4F1.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";import"./Button-ByHOpWo0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1KRANLi.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
