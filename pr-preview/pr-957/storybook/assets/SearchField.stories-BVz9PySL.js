import{S as s}from"./SearchField-BWauQwg3.js";import"./iframe-BtMwOEiM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-4eQ4VJ_x.js";import"./utils-BoP-oma8.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBDzCWqG.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./useFormValidation-C0gaMIqj.js";import"./useField-DWqLAcPx.js";import"./Button-DpK-_iud.js";import"./Hidden-4SQq7b_R.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./search-C-IY1CWW.js";import"./createLucideIcon-C3W8dNhU.js";import"./Button-Bs1OmtnK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DETAsxuF.js";import"./VisuallyHidden-DmeEZsXF.js";import"./x-BtjPiESg.js";import"./FieldError-D_5OLq9A.js";import"./Text-BIvd2lWW.js";import"./Text-Blq4VDAx.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
