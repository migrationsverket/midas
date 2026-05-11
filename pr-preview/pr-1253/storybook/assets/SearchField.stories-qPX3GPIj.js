import{S as i}from"./SearchField-BCHo2peb.js";import"./iframe-B--hDPXb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./Form-U2PISRcB.js";import"./useFocusRing-DBQnIZ7Q.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./Input-DgqP73Ss.js";import"./Hidden-CMfVl8d1.js";import"./Button-C9U5DdED.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./FieldError-B0I-izd3.js";import"./Text-eQWaQXgM.js";import"./clsx-Ciqy0D92.js";import"./Text-BKE4mpEc.js";import"./RSPContexts-DkE08RbH.js";import"./Group-0GBrZlGV.js";import"./useControlledState-DZkg54SI.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5SKRwZR.js";import"./useField-B8UugQx6.js";import"./TextField.module-DdivwlC8.js";import"./search-ccLp3p2S.js";import"./createLucideIcon-BSPs0YiP.js";import"./x-D9iWQ3e4.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Button-Bz3nOl8L.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-8_Tg-jOG.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
