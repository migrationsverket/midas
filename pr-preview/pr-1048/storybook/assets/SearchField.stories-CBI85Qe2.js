import{S as s}from"./SearchField-DSHaSETP.js";import"./iframe-C8C_T9pK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CVPSNT_z.js";import"./utils-665vdH3I.js";import"./useLocalizedStringFormatter-D9h1UHb6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dg0o6C-K.js";import"./useFocusRing-aErJaiMB.js";import"./index-BgFSJS_x.js";import"./index-Bnqj0GEH.js";import"./useFormValidation-DeBAaOac.js";import"./useField-D6-PoPba.js";import"./Button-DgcJy71N.js";import"./Hidden-BK2dTpyi.js";import"./number-DfkVkf0F.js";import"./useLabels-DLIgyPIl.js";import"./useButton-Bir6pOh3.js";import"./search-D88Wfted.js";import"./createLucideIcon-CyML3fXz.js";import"./ClearButton-Dz0udiAJ.js";import"./Button-BjszVOBG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFq-SMx0.js";import"./VisuallyHidden-H5Q5oE0x.js";import"./x-DusTrbha.js";import"./FieldError--KTQss0Q.js";import"./Text-oN8gJ-0T.js";import"./Text-B2x6FBCA.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
