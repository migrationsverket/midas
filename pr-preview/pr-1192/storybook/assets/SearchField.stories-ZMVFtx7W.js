import{S as i}from"./SearchField-ChQFEAui.js";import"./iframe-I-T_H5J_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-JproU_nw.js";import"./clsx-B-dksMZM.js";import"./Form-DVDLEN1p.js";import"./useFocusRing-B9IqJ9Mt.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./Input-DS38Pnqo.js";import"./Hidden-BMWDbIRC.js";import"./Button-C5239-Pe.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./FieldError-BblABd-b.js";import"./Text-BJ8cMGkE.js";import"./clsx-Ciqy0D92.js";import"./Text-DpvJioBU.js";import"./RSPContexts-CMvVC2hR.js";import"./Group-5DmSgEKB.js";import"./useControlledState-B5eahPl_.js";import"./useLocalizedStringFormatter-BsAjlIoO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6Tguhnl.js";import"./useField-BWv-prfB.js";import"./TextField.module-DdivwlC8.js";import"./search-Dl6FS96W.js";import"./createLucideIcon-BVI9IRTp.js";import"./x-DtRGZRlW.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./Button-B83Ld0RX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ImRnGBY4.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
