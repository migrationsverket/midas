import{S as s}from"./SearchField-BXhONwDE.js";import"./iframe-UFnE_WWZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DkL4wxsI.js";import"./utils-Boro9Fs8.js";import"./useLocalizedStringFormatter-W8pD0Zdb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0DVQZmI.js";import"./useFocusRing-CagMB1EX.js";import"./index-DuAER-0b.js";import"./index-B_Tx1Q9m.js";import"./useFormValidation-CLKVdQyp.js";import"./useField-BocjWxIh.js";import"./Button-BlMAHKed.js";import"./Hidden-Cq2GYd5C.js";import"./useLabels-DemKNQhF.js";import"./useButton-C4720CM1.js";import"./search-C38WdCub.js";import"./createLucideIcon-DWAOhH2n.js";import"./ClearButton-RyMsZ4O1.js";import"./Button-Bqr_oLK4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BfDZhfHQ.js";import"./VisuallyHidden-CqngOA9c.js";import"./x-PQVQjURZ.js";import"./FieldError-DIDzRcSm.js";import"./Text-VMpyaGIc.js";import"./Text-DMrMZJ_c.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
