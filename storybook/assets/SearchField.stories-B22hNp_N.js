import{S as s}from"./SearchField-B-nNDqjR.js";import"./iframe-Dl_ZEAw_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBjZ-p-J.js";import"./utils-qArlt3QR.js";import"./useLocalizedStringFormatter-CZjhQNpd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DWfHNTEK.js";import"./useFocusRing-BadRLYOI.js";import"./index-BBK-ahHU.js";import"./index-9pBu4mcS.js";import"./useFormValidation-vxZMHFxu.js";import"./useField-DyugcTbx.js";import"./Button-Bhf2TykO.js";import"./Hidden-I_e1q7UG.js";import"./useLabels-CH32VCLn.js";import"./useButton-CgsE8t_H.js";import"./search-B5N0TFnF.js";import"./createLucideIcon-xHw9Gsln.js";import"./ClearButton-D5nrrgIY.js";import"./Button-COrJAjql.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DU3dXRGP.js";import"./VisuallyHidden-kMLlKce4.js";import"./x-BXfpE1Va.js";import"./FieldError-UQabDpKY.js";import"./Text-CFgDWcau.js";import"./Text-LOlP3muv.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
