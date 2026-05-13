import{S as i}from"./SearchField-CGNuPAH_.js";import"./iframe-DK3mrAyo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./Form-ZU5Jc3do.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./Input-BNeMn4RE.js";import"./Hidden-B9O9f11_.js";import"./Button-Yd8CTw2L.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./FieldError-7i4Fax51.js";import"./Text-ChQBgCn7.js";import"./clsx-Ciqy0D92.js";import"./Text-BG4EGVIm.js";import"./RSPContexts-CbpbC2QZ.js";import"./Group-FnEYpQ-A.js";import"./useControlledState-c72KLHwF.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfphWo0U.js";import"./useField-BURaNJxe.js";import"./TextField.module-DdivwlC8.js";import"./search-Xv2JrVsG.js";import"./createLucideIcon-ZHubZ-OE.js";import"./x-Cj5OGhdg.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CuCKnYKC.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
