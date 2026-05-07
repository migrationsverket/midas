import{S as i}from"./SearchField-QaXY0flr.js";import"./iframe-aJfE6oy0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COacjnfx.js";import"./clsx-B-dksMZM.js";import"./Form-DCHTbw_J.js";import"./useFocusRing-ClTA_ULX.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./Input-CJaHd5ka.js";import"./Hidden-ijM5UvIg.js";import"./Button-gsjvyy6J.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./FieldError-BZPifAC7.js";import"./Text-CBxYHQaa.js";import"./clsx-Ciqy0D92.js";import"./Text-CjkYZ3Fr.js";import"./RSPContexts-9F0yhmI5.js";import"./Group-Sj8qFFJW.js";import"./useControlledState-y9DEv0LS.js";import"./useLocalizedStringFormatter--tqgw_C7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIVkaC_L.js";import"./useField-BuwSGg-D.js";import"./TextField.module-DdivwlC8.js";import"./search-q9D2Bc9o.js";import"./createLucideIcon-CHcVE9D4.js";import"./x-a-leTFOM.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./Button-DTBmOwE-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5b4EtUm.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
