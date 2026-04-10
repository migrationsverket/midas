import{S as i}from"./SearchField-JlxxauQP.js";import"./iframe--DNH3aGV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0GaImV3w.js";import"./clsx-B-dksMZM.js";import"./Form-DPDs5zEL.js";import"./useFocusRing-COgihC8f.js";import"./index-BdkFEYWR.js";import"./index-DalW6cey.js";import"./Input-C3-sIc-5.js";import"./Hidden-DGctFygB.js";import"./Button-BsANfNMy.js";import"./useLabel-CkI0hnox.js";import"./useLabels-C8J0Cx0Y.js";import"./useButton-Cnfu5-B9.js";import"./FieldError-WqsNiK7P.js";import"./Text-BBvcfJf4.js";import"./clsx-Ciqy0D92.js";import"./Text-c4OCYkd3.js";import"./RSPContexts-D_qB4YUz.js";import"./Group-CRL_tLBo.js";import"./useControlledState-D7Iw9EWv.js";import"./useLocalizedStringFormatter-BrEpEIAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1_wCBkw.js";import"./useField-CEYiaukY.js";import"./TextField.module-DdivwlC8.js";import"./search-BKwL1yD-.js";import"./createLucideIcon-GK2uHeXX.js";import"./x-DQhZrA3s.js";import"./useLocalizedStringFormatter-DOUyl0Wg.js";import"./Button-k3ORVpm3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CF-eQG1L.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
