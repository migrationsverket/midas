import{S as s}from"./SearchField-DGcsv446.js";import"./iframe-a6Wk3Xzy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DCZoTGT5.js";import"./utils-Djxj9dvS.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5MFLd6M.js";import"./useFocusRing-C1yXmCPx.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./useFormValidation-ONm4qT-T.js";import"./useField-BDXXirFK.js";import"./Button-D3kzwT0j.js";import"./Hidden-DuHdXNGk.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./search-DViOwNwm.js";import"./createLucideIcon-D5ghYwFQ.js";import"./Button-BXJQHasJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";import"./VisuallyHidden-nz69IdQH.js";import"./x-UTOZVbAg.js";import"./FieldError-BCytiDW7.js";import"./Text-DkJniAIt.js";import"./Text-Cei6q4nW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
