import{S as s}from"./SearchField-D2GgBp03.js";import"./iframe-DIgCkbD1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iud_Pbox.js";import"./utils-D8xi_xBs.js";import"./useLocalizedStringFormatter-C6XmYEGX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMvpFUuh.js";import"./useFocusRing-B4tmv29s.js";import"./index-CX1iR86j.js";import"./index-CWy7JOdY.js";import"./useFormValidation-DTzib3Vr.js";import"./useField-DhzdSUPc.js";import"./Button-L3gEMBR5.js";import"./Hidden-CeUFJKQL.js";import"./useLabels-CMNk11Q0.js";import"./useButton-Cw6qVxnq.js";import"./search-BZyKIahL.js";import"./createLucideIcon-DsB032j6.js";import"./Button-DQt3X-10.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAAVeZG.js";import"./VisuallyHidden-DCGxt7Nj.js";import"./x-BLSu5xtU.js";import"./FieldError-BtS7DKcw.js";import"./Text-Ci7gikDv.js";import"./Text-D4RhZXD6.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
