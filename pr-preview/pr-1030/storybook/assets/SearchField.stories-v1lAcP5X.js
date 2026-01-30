import{S as s}from"./SearchField-CQfWyzgg.js";import"./iframe-BFkYxjpi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Jpu9zhJ4.js";import"./utils-Cvg_SbFj.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-k3VPT5oz.js";import"./useFocusRing-DhM4Chk4.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./useFormValidation-CqZHtoXh.js";import"./useField-B0sWGxFk.js";import"./Button-CPeoJlq9.js";import"./Hidden-BxbGe5dx.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./search-Dc5gr4e4.js";import"./createLucideIcon-Dk_ZVBqn.js";import"./ClearButton-DdE1z_C7.js";import"./Button-C3X5dVZs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";import"./VisuallyHidden-CKZ765x3.js";import"./x-D-DQfH5Z.js";import"./FieldError-CieRBtPV.js";import"./Text-B49sPC4A.js";import"./Text-f7GuBcHW.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
