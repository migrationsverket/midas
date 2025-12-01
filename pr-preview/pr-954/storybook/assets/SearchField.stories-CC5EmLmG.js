import{S as s}from"./SearchField-Cflh_QRH.js";import"./iframe-DwenO7ee.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BpTl-34E.js";import"./utils-B04QOTqX.js";import"./useLocalizedStringFormatter-BmtD3KPy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CK4Ym3n7.js";import"./useFocusRing-DMrg0sfB.js";import"./index-xMNIBZ7U.js";import"./index-DeJVUVa5.js";import"./useFormValidation-DBCLm4XG.js";import"./useField-xxMGL5ET.js";import"./Button-BweeCEHL.js";import"./Hidden-Cu6WCKNR.js";import"./useLabels-CZNC_GkZ.js";import"./useButton-BxnkwXfu.js";import"./search-C1CQcuy7.js";import"./createLucideIcon-CA6X7-no.js";import"./Button-B4MIMYl2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3eP5Seam.js";import"./VisuallyHidden-D6EEr8kz.js";import"./x-B0tZ-htC.js";import"./FieldError-D0wasyEZ.js";import"./Text-DBlsv5Fr.js";import"./Text-f-cH2Nc1.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
