import{S as i}from"./SearchField-DtmO0tqv.js";import"./iframe-xMXigoWy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-YGWrB3Vf.js";import"./clsx-B-dksMZM.js";import"./Form-eqNz80uk.js";import"./useFocusRing-DfQ0yX8G.js";import"./index-BSZ5eAzw.js";import"./index-DHIIVQ80.js";import"./Input-B4tTYQrT.js";import"./Hidden-DphnPAPv.js";import"./Button-BdNSmPg8.js";import"./useLabel-CBmnmGxA.js";import"./useLabels-BLdk5JBQ.js";import"./useButton-Bw607H0U.js";import"./FieldError-C88gPFQS.js";import"./Text-D19M6ZHM.js";import"./clsx-Ciqy0D92.js";import"./Text-CdJ1E4Uo.js";import"./RSPContexts-Catmt_xa.js";import"./Group-Ds0Tuj8b.js";import"./useControlledState-CfBsYb3v.js";import"./useLocalizedStringFormatter-BNd9Pi1_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MDQxft5x.js";import"./useField-C_OQM8it.js";import"./TextField.module-DdivwlC8.js";import"./search-tiP8rbAQ.js";import"./createLucideIcon-DEQfBkzv.js";import"./x-B6O-7LlT.js";import"./useLocalizedStringFormatter-DsDwc5ZW.js";import"./Button-taOyTeEm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvauRNh_.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
