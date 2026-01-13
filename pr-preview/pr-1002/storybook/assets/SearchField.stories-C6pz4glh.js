import{S as s}from"./SearchField-Bx-Q3_Rc.js";import"./iframe-Fz1EdHuH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4oYVFVf.js";import"./utils-CIhB6G_D.js";import"./useLocalizedStringFormatter-D7aFKFSJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6jdHa9H.js";import"./useFocusRing-qf5ZtGZP.js";import"./index-CW1yTPdq.js";import"./index-BLs35tAN.js";import"./useFormValidation-DqKDU8Wz.js";import"./useField-Ox07Q8eM.js";import"./Button-CBPVsTrf.js";import"./Hidden-BTN0SI0L.js";import"./useLabels-BFFI0pNC.js";import"./useButton-DwegKwQx.js";import"./search-wigwT-IX.js";import"./createLucideIcon-B2CroOQB.js";import"./Button-DNGuSXTP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Biv9Lv2v.js";import"./VisuallyHidden-DdITmKv1.js";import"./x-IpFqXPiI.js";import"./FieldError-CiywgrQY.js";import"./Text-DNv-3svf.js";import"./Text-DoqQ8nHE.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
