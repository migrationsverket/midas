import{S as s}from"./SearchField-DPk3POyH.js";import"./iframe-zpggoKIR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DZC8FGcW.js";import"./utils-x5_IF6Fd.js";import"./useLocalizedStringFormatter-DAC57hfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CTEIZmo7.js";import"./useFocusRing-DEI2YvN0.js";import"./index-CO-ei0u1.js";import"./index-CcxtW1-v.js";import"./useFormValidation-nCLJto24.js";import"./useField-V_jejpYH.js";import"./Button-B-VKMFHe.js";import"./Hidden-BXem5sEI.js";import"./useLabels-DDoh6ac0.js";import"./useButton-DD3Qn3gD.js";import"./search-BfyzcBTs.js";import"./createLucideIcon-B6tNtBeM.js";import"./Button-C5jRedSt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-TtzimPvS.js";import"./VisuallyHidden-BTL-vbQk.js";import"./x-P7dpyzYI.js";import"./FieldError-B2s3aV6y.js";import"./Text-BeAnzuJs.js";import"./Text-DIidV3d-.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
