import{S as i}from"./SearchField-DQCDJ-ym.js";import"./iframe-BiQ8HasD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-HJUYK1j_.js";import"./clsx-B-dksMZM.js";import"./Form-D2H-KRh-.js";import"./useFocusRing-Dh9TFhU0.js";import"./index-CxCqsVJY.js";import"./index-B9ZJX168.js";import"./Input-DaFhkqYK.js";import"./Hidden-DEdvWcqT.js";import"./Button-DOF2Ijgw.js";import"./useLabel-8IgHcDVM.js";import"./useLabels-H9owUaj8.js";import"./useButton-BbHDi8ZV.js";import"./FieldError-jePN0XGs.js";import"./Text-DGK2Zvf0.js";import"./clsx-Ciqy0D92.js";import"./Text-BdITZZNK.js";import"./RSPContexts-CmmbFvVN.js";import"./Group-BYPqrYrz.js";import"./useControlledState-DOzruH4H.js";import"./useLocalizedStringFormatter-CembVOjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B71p3qEk.js";import"./useField-CBOuPJem.js";import"./TextField.module-DdivwlC8.js";import"./search-xvufFoFl.js";import"./createLucideIcon-Dn_efDgc.js";import"./x-Cmfu2hA0.js";import"./useLocalizedStringFormatter-CgDdVzRk.js";import"./Button-CBosCwI1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-iHVSgYDu.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
