import{S as i}from"./SearchField-36kRimES.js";import"./iframe-BYwHSihz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dh-IoFbm.js";import"./clsx-B-dksMZM.js";import"./Form-xzTb284W.js";import"./useFocusRing-DxmY0qcu.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./Input-d_MJQ0-d.js";import"./Hidden-DpptCkiu.js";import"./Button-DOnb1gUF.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./FieldError-BWBSyxmE.js";import"./Text-DJX_2QXd.js";import"./clsx-Ciqy0D92.js";import"./Text-BHNKCnwU.js";import"./RSPContexts-BAR4w1ha.js";import"./Group-CHWkQxXC.js";import"./useControlledState-CJUIxKhT.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGxfNyX_.js";import"./useField-Civc57Hk.js";import"./TextField.module-DdivwlC8.js";import"./search-CmEuSgT3.js";import"./createLucideIcon-COPS1n-B.js";import"./x-CQCbnBEa.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Button-crEn75HL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-2UqtjUFf.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
