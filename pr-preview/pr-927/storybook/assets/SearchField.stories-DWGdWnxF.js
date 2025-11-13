import{S as s}from"./SearchField-YXCeCcVA.js";import"./iframe-BlNSK8M8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DcrFjJH-.js";import"./utils-y_Ysi-53.js";import"./useLocalizedStringFormatter-CeEu-nei.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bw-ddFDi.js";import"./useFocusRing-n2GNbng4.js";import"./index-BHe3mj7v.js";import"./index-B8FlXCLo.js";import"./useFormValidation-BJ1Wn2vJ.js";import"./useField-CbZpfp7_.js";import"./Button-UL3rNHqZ.js";import"./Hidden-Df5yupSK.js";import"./useLabels-wei9JXnD.js";import"./useButton-sYL6IkJL.js";import"./search-CdXrTtjb.js";import"./createLucideIcon-wU_OqTQp.js";import"./Button-BQGitBll.js";import"./Button.module-CtQ1deO8.js";import"./x-XDtlwMQe.js";import"./useLocalizedStringFormatter-n3TDJp7T.js";import"./FieldError-DhYzCNjI.js";import"./Text-Cv88p_mU.js";import"./Text-CsuJG2Zh.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
