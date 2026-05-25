import{S as i}from"./SearchField-BpQLC9gG.js";import"./iframe-BgrJi1dO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./Form-BYQG3pHA.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./Input-DXAbBT3f.js";import"./Hidden-B-ocAKFH.js";import"./Button-CzM4r0Q8.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./FieldError-CK0qCQ53.js";import"./Text-BwTtjMDe.js";import"./clsx-Ciqy0D92.js";import"./Text-U40rqCZc.js";import"./RSPContexts-DvRO0UAG.js";import"./Group-Cmswapzf.js";import"./useControlledState-D4OQ_QAh.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bc0a0Wov.js";import"./useField-DQisryMe.js";import"./TextField.module-DdivwlC8.js";import"./search-d2uAvpeB.js";import"./createLucideIcon-Xa2G53WL.js";import"./x-DF1DvVFb.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BtrvhTUL.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
