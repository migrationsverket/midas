import{S as s}from"./SearchField-CXRMymKb.js";import"./iframe-Dor4ircF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DvR4e7YP.js";import"./utils-DMuGTtMS.js";import"./useLocalizedStringFormatter-BWgIDVv3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJvkV0oq.js";import"./useFocusRing-CI_ISeqX.js";import"./index-BRWlJPJW.js";import"./index-qWyL7EHC.js";import"./useFormValidation-CT2uGaah.js";import"./useField-DjgNXvlM.js";import"./Button-CwntTkhI.js";import"./Hidden-Dp-Crghp.js";import"./useLabels-CpLLuEK0.js";import"./useButton-CwfL82kC.js";import"./search-wiDGk5Qm.js";import"./createLucideIcon-Db-iAtDf.js";import"./ClearButton-BFhZglqH.js";import"./Button-DlFMUaPv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Hlva-IBM.js";import"./VisuallyHidden-CIjKH1Nn.js";import"./x-pETj6_df.js";import"./FieldError-CwY-5fO_.js";import"./Text-B-FP0CmP.js";import"./Text-BhYbgXGv.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
