import{S as s}from"./SearchField-C3Ew4kOT.js";import"./iframe-nE4dm88Z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Da3ywIgU.js";import"./utils-D6BHXFFk.js";import"./useLocalizedStringFormatter-BZ1dBZg4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BKQ5h-hw.js";import"./useFocusRing-CHzcFtFU.js";import"./index-DogyMJnz.js";import"./index-DUvPe5TJ.js";import"./useFormValidation-C6QvPBXN.js";import"./useField-B9aIp0ru.js";import"./Button-B3APOlWO.js";import"./Hidden-B5zipMeH.js";import"./useLabels-h0Q5hm8W.js";import"./useButton-Dgl5rK7P.js";import"./search-DxVWZjIa.js";import"./createLucideIcon-DoBEpZId.js";import"./Button-CXDEkB4j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CURwqrMK.js";import"./VisuallyHidden-t4WqRTpg.js";import"./x-BAGrW2Pg.js";import"./FieldError-Dawq3Gkj.js";import"./Text-DiUExjYu.js";import"./Text-Cx_6NWCd.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
