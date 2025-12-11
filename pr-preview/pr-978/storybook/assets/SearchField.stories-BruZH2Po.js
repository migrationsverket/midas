import{S as s}from"./SearchField-C2JjM8-W.js";import"./iframe-aZts9sTH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BWJsClp4.js";import"./utils-CluU2ngc.js";import"./useLocalizedStringFormatter-DQv6nStV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJiGSzmF.js";import"./useFocusRing-BRQxC-Pn.js";import"./index-BtqyUEvJ.js";import"./index-BZUDR8KZ.js";import"./useFormValidation-qXr_qDHo.js";import"./useField-Vu3lS0Hp.js";import"./Button-DRPL95DZ.js";import"./Hidden-BI6nf7sE.js";import"./useLabels-Bi0kdcz9.js";import"./useButton-B4wgjHhf.js";import"./search-E-bpGm-R.js";import"./createLucideIcon-BCtVQ7cW.js";import"./Button-Ba0mnMwa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Buplq2VU.js";import"./VisuallyHidden-CjGgagJb.js";import"./x-Br7_Za6u.js";import"./FieldError-FbBCy-EM.js";import"./Text-D3KoC4fT.js";import"./Text-BFEuyFsz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
