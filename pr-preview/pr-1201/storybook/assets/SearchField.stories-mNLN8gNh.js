import{S as i}from"./SearchField-B8X83qhL.js";import"./iframe-DTOqtRPp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQz-p0Ar.js";import"./clsx-B-dksMZM.js";import"./Form-Cjvz3og7.js";import"./useFocusRing-jHCCwEPg.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./Input-hXck_yNU.js";import"./Hidden-BopZmEN9.js";import"./Button-C4kKXxPS.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./FieldError-B6hQSiJl.js";import"./Text-CIhwCa8A.js";import"./clsx-Ciqy0D92.js";import"./Text-BaCnxKWQ.js";import"./RSPContexts-mX6bJ66o.js";import"./Group-DP8-mIsy.js";import"./useControlledState-DPZt2fnR.js";import"./useLocalizedStringFormatter-BUk3tKu_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DblHJwAe.js";import"./useField-BbLqM0Ws.js";import"./TextField.module-DdivwlC8.js";import"./search-BjmfE3Fm.js";import"./createLucideIcon-DdZg643M.js";import"./x-CrpZHpR_.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./Button-CDDDIvIj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DwgxUjwt.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
