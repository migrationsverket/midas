import{S as i}from"./SearchField-CY4kG7eI.js";import"./iframe-CFSsLpc3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CgvAx7Eh.js";import"./clsx-B-dksMZM.js";import"./Form-DqURqGCQ.js";import"./useFocusRing-BscyqCba.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./Input-DlF7f-nw.js";import"./Hidden-CLuFLk7t.js";import"./Button-BA4ocZWH.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./FieldError-D6ZDrv96.js";import"./Text-CxyFIK0P.js";import"./clsx-Ciqy0D92.js";import"./Text-DJekINTm.js";import"./RSPContexts-Dl7sCpzY.js";import"./Group-Db9bSCAd.js";import"./useControlledState-CbBMw6Jg.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4DwmSYD.js";import"./useField-CPTxJIMP.js";import"./TextField.module-DdivwlC8.js";import"./search-BAB6M6Wp.js";import"./createLucideIcon-DwZpSpKK.js";import"./x-BqPwmm8B.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Button-BpZ-gEJa.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CJUN9Oa8.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
