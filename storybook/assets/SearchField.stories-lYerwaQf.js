import{S as s}from"./SearchField-70kGZWxD.js";import"./iframe-BHGbmSoX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRSDM5kG.js";import"./utils-u6nfEu2d.js";import"./useLocalizedStringFormatter-CKK1hwYD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKjVGFlI.js";import"./useFocusRing-C-fWWvCQ.js";import"./index-DHRUWqon.js";import"./index-BlWlHcen.js";import"./useFormValidation-Djr0e9BL.js";import"./useField-B4LIi9WL.js";import"./Button-DBP2ABnj.js";import"./Hidden-HuY8qCdY.js";import"./useLabels-jG-RMIhn.js";import"./useButton-DyLMe38J.js";import"./search-BPHDLzK6.js";import"./createLucideIcon-Pf4v_yLg.js";import"./ClearButton-BPlHaJdo.js";import"./Button-Dt4Dz_uA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYD_fmTs.js";import"./VisuallyHidden-BSU9NXEn.js";import"./x-CaOaLzID.js";import"./FieldError-BbuZpPii.js";import"./Text-DR-y75op.js";import"./Text-Co-Ig638.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
