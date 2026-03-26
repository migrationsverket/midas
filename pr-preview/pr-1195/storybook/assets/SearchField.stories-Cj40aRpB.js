import{S as i}from"./SearchField-C3ykzYch.js";import"./iframe-BgSB-ePP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5FyKCk8.js";import"./clsx-B-dksMZM.js";import"./Form-Svy9eoUw.js";import"./useFocusRing-CEd5VvO1.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./Input-B8QMzC7u.js";import"./Hidden-CuqOQBO_.js";import"./Button-Lo8sEzbF.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./FieldError-6w5f847L.js";import"./Text-BdZEyiog.js";import"./clsx-Ciqy0D92.js";import"./Text-Bp3gM7sB.js";import"./RSPContexts-Dgg5-u6I.js";import"./Group-DDQgAvWO.js";import"./useControlledState-DJPtRTJ6.js";import"./useLocalizedStringFormatter-DhW77Uj_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CexmqUaG.js";import"./useField-C6hLFYbq.js";import"./TextField.module-DdivwlC8.js";import"./search-DudbDPLk.js";import"./createLucideIcon-B3pidq9m.js";import"./x-CEx6wB1z.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./Button-BXdJw4HN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bm0pqSKV.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
