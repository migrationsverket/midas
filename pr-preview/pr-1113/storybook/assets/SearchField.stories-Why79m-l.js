import{S as i}from"./SearchField-BU5ni78j.js";import"./iframe-DcNvp08h.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BNNMLtuO.js";import"./clsx-B-dksMZM.js";import"./Form-BUw62znU.js";import"./useFocusRing-BPRwT2-e.js";import"./index-DSSiHOxL.js";import"./index-CP11QsuO.js";import"./Input-iqiC72_m.js";import"./Hidden-B1kRsClu.js";import"./Button-BXO-nfgy.js";import"./useLabels-C5gPRZ5z.js";import"./useButton-BpzNPdXU.js";import"./FieldError-EMbUKL48.js";import"./Text-B8dGyjgo.js";import"./clsx-Ciqy0D92.js";import"./Text-BTXvFjJ1.js";import"./RSPContexts-DrpcDSg9.js";import"./Group-D4pk5m5c.js";import"./useControlledState-v-JghTjQ.js";import"./useLocalizedStringFormatter-CfHv0oEA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-_0CuLNYR.js";import"./useField-Cg2EtwLb.js";import"./TextField.module-DdivwlC8.js";import"./search-BkzhnypP.js";import"./createLucideIcon-CgIMhL8N.js";import"./x-DmMt4JWK.js";import"./useLocalizedStringFormatter-CwX-QJhh.js";import"./Button-Btc6I3Hp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BvqUxAVU.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
