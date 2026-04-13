import{S as i}from"./SearchField-DD3j9o6I.js";import"./iframe-CNCYpet-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbCir_Jt.js";import"./clsx-B-dksMZM.js";import"./Form-BY3Nnasj.js";import"./useFocusRing-CRxTmkRw.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./Input-CLzu89d7.js";import"./Hidden-hGcy4cT5.js";import"./Button-DJ63q7tI.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./FieldError-pGosIpkp.js";import"./Text-BSDJ27Oc.js";import"./clsx-Ciqy0D92.js";import"./Text-ORzvfqKL.js";import"./RSPContexts-BaURGsym.js";import"./Group-DFj-8_7F.js";import"./useControlledState-CeXWXac4.js";import"./useLocalizedStringFormatter-D4gZ00xG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CH01Fcwe.js";import"./useField-CS2Ek9vr.js";import"./TextField.module-DdivwlC8.js";import"./search-C4Ip_36Y.js";import"./createLucideIcon-Clh8USVg.js";import"./x-BNWluiEV.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./Button-FEtIFAuh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BD8822Hp.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
