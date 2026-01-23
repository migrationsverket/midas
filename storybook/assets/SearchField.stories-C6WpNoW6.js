import{S as s}from"./SearchField-nraI57JZ.js";import"./iframe-CAxX8b8z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CrLblIfK.js";import"./utils-DCHF2L9h.js";import"./useLocalizedStringFormatter-CTDPvKwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUDeOcF8.js";import"./useFocusRing-CJGxaojv.js";import"./index-BFL8txhV.js";import"./index-BsUamICG.js";import"./useFormValidation-ORBzuIse.js";import"./useField-BJlVD6tn.js";import"./Button-4YWHHaEC.js";import"./Hidden-BhCMtZNx.js";import"./useLabels-DOCuV8eN.js";import"./useButton-pswNsnH0.js";import"./search-DAviJlAA.js";import"./createLucideIcon-Btl_k1Dg.js";import"./ClearButton-D6ram10f.js";import"./Button-hIWv77LG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ck8_EjzN.js";import"./VisuallyHidden-BxgXzkUT.js";import"./x-DFKddAaY.js";import"./FieldError-D4Sp8V1Y.js";import"./Text-BLQTNCsN.js";import"./Text-D4pRrquR.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
