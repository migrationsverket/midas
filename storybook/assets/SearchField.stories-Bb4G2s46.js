import{S as s}from"./SearchField-Dozk61Pz.js";import"./iframe-y6AvU9pV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DShqKV-K.js";import"./utils-VIxaLxO-.js";import"./useLocalizedStringFormatter-DqeEh2aJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0XYBVgu.js";import"./useFocusRing-B9DSdUhj.js";import"./index-BwPUsMU4.js";import"./index-DrBZwNpv.js";import"./useFormValidation-BBLW1j1l.js";import"./useField-BN-dX1j4.js";import"./Button-4DuSgfee.js";import"./Hidden-CSfoPJVM.js";import"./useLabels-Bnd5CjV_.js";import"./useButton-DriAMg0B.js";import"./search-C9lYjRHY.js";import"./createLucideIcon-D29kT7vp.js";import"./Button-4Ng5Qb5n.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BhHfTxwL.js";import"./VisuallyHidden-DF1AJIqt.js";import"./x-CilltRp-.js";import"./FieldError-B_ZzXf74.js";import"./Text-DlhfRLNK.js";import"./Text-B3Lob103.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
