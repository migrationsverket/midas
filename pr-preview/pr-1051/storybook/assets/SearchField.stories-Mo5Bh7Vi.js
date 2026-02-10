import{S as s}from"./SearchField-DLHcPnvY.js";import"./iframe-DOk2o9NQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6ABUqgD.js";import"./utils-yxEoGQIn.js";import"./useLocalizedStringFormatter-DgU5yhXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yot0nzhU.js";import"./useFocusRing-DfiygLtK.js";import"./index-BDj9Getj.js";import"./index-Bd-kietF.js";import"./useFormValidation-D_TTn9Gw.js";import"./useField-DGKgmSeQ.js";import"./Button-WADFfC5e.js";import"./Hidden-C9UmOyee.js";import"./useLabels-CXX4Mh78.js";import"./useButton-oJknvzPj.js";import"./search-B_GJuMG5.js";import"./createLucideIcon-De700o01.js";import"./ClearButton-D32tep0N.js";import"./Button-BheV8xjG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DTXBmCaA.js";import"./VisuallyHidden-CCQSdTZL.js";import"./x-C_3F28-_.js";import"./FieldError-hXnolGoZ.js";import"./Text-DOsGQ1iy.js";import"./Text-B56BHEOe.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
