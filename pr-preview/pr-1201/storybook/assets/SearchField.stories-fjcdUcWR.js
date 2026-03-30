import{S as i}from"./SearchField-DDrLo9yw.js";import"./iframe-KvMX5Axs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQB0ixZT.js";import"./clsx-B-dksMZM.js";import"./Form-DU3OszFC.js";import"./useFocusRing-vgvsKIAr.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./Input-S3TQ-i_W.js";import"./Hidden-DgM1V2hb.js";import"./Button-Bo3Qklea.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./FieldError-Dm-mWSrI.js";import"./Text-BvSzNFUh.js";import"./clsx-Ciqy0D92.js";import"./Text-xieIOj6u.js";import"./RSPContexts-C0J0N8cH.js";import"./Group-D54bSnbM.js";import"./useControlledState-CT69c7wx.js";import"./useLocalizedStringFormatter-BUFrwSMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3gJUay8.js";import"./useField-B9fS3fRz.js";import"./TextField.module-DdivwlC8.js";import"./search-Bp02gyGE.js";import"./createLucideIcon-CKpEkAd-.js";import"./x-BXrTPOwi.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./Button-C1NVLp98.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BX39qD-v.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
