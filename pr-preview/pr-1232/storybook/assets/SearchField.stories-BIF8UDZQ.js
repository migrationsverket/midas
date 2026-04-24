import{S as i}from"./SearchField-BGhCk4Oq.js";import"./iframe-Csum_Dn_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ge-V0544.js";import"./clsx-B-dksMZM.js";import"./Form-DtazZjcv.js";import"./useFocusRing-ClEYMHRu.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./Input-DRNfRwEn.js";import"./Hidden-CxHKwZ6C.js";import"./Button-BUrmgwKE.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./FieldError-JqGe9xU9.js";import"./Text-D-PYeQb1.js";import"./clsx-Ciqy0D92.js";import"./Text-tsq8PiKH.js";import"./RSPContexts-CufW8UMt.js";import"./Group-D0rK0BGE.js";import"./useControlledState-CRJrM8G1.js";import"./useLocalizedStringFormatter-CsJPWzRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6JknOgh-.js";import"./useField-Dre-fZ9m.js";import"./TextField.module-DdivwlC8.js";import"./search-VO588sDW.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./x-ClDHgqDO.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./Button-dhowh8Zu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDF8meml.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
