import{S as i}from"./SearchField-CGC8EozO.js";import"./iframe-DCTfXxhU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-nW_xli8K.js";import"./clsx-B-dksMZM.js";import"./Form-B53GEl8m.js";import"./useFocusRing-DkB_y7Fd.js";import"./index-mul5IfuL.js";import"./index-oL1NoEtf.js";import"./Input-BD-aNJo6.js";import"./Hidden-Dz79xEs9.js";import"./Button-CFGQLTfC.js";import"./useLabel-5AB1LZK2.js";import"./useLabels-DDnu_dmS.js";import"./useButton-Dit7Lb_r.js";import"./FieldError-CjtBgxrO.js";import"./Text-5UTT66SL.js";import"./clsx-Ciqy0D92.js";import"./Text-Caoun6Yq.js";import"./RSPContexts-C4YWDn84.js";import"./Group-CQg2sBSK.js";import"./useControlledState-2cB3sfef.js";import"./useLocalizedStringFormatter-CXqAKE2A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce7gwFy5.js";import"./useField-cahVHmCN.js";import"./TextField.module-DdivwlC8.js";import"./search-CV0-ASWR.js";import"./createLucideIcon-2FpY4XeI.js";import"./x-DKEdZNvx.js";import"./useLocalizedStringFormatter-D6vCsR43.js";import"./Button-9AP9GDtE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmJc66Gc.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
