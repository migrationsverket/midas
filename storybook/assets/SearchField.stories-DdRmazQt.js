import{S as s}from"./SearchField-CwamjnoJ.js";import"./iframe-Dv5oy3ex.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CnplxgpR.js";import"./utils-DqE5PILI.js";import"./useLocalizedStringFormatter-Ci5_pA40.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBkUeFr0.js";import"./useFocusRing-DFkj2PJJ.js";import"./index-COb2Vy-7.js";import"./index-IcK2KPt1.js";import"./useFormValidation-DtuLUvaq.js";import"./useField-Be9MSkin.js";import"./Button-BH4eeu0k.js";import"./Hidden-CxtegDl0.js";import"./useLabels-Dt8q9qYY.js";import"./useButton-B42S7nFw.js";import"./search-DXeSVV1L.js";import"./createLucideIcon-BqwtoRoR.js";import"./ClearButton-BqKp8pfl.js";import"./Button-DFKGQSYP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BSci6oqP.js";import"./VisuallyHidden-ziZ6pEVt.js";import"./x-Uek5wc5v.js";import"./FieldError-CoMYK3IV.js";import"./Text-D7P0gU-S.js";import"./Text-BnCHL2hB.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
