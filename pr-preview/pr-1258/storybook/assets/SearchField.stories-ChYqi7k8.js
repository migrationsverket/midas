import{S as i}from"./SearchField-Df3U0QQq.js";import"./iframe-BqQ5c8fE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-vcgv-geB.js";import"./clsx-B-dksMZM.js";import"./Form-DesHcFFM.js";import"./useFocusRing-0ttJCKLt.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./Input-C_rKGDhH.js";import"./Hidden-lysAnu3A.js";import"./Button-BUzCWcrF.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./FieldError-vKbkj088.js";import"./Text-mKjyceMN.js";import"./clsx-Ciqy0D92.js";import"./Text-DZT9e49R.js";import"./RSPContexts-BnH9bYe5.js";import"./Group-B96oZygu.js";import"./useControlledState-p_0xc8M1.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CM4pVSWA.js";import"./useField-BpwbsBj8.js";import"./TextField.module-DdivwlC8.js";import"./search-DDgHXfO6.js";import"./createLucideIcon-BcjPS7EP.js";import"./x-DEICiepl.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Button-BS1gBrNw.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BYz02vHS.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
