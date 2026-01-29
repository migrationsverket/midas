import{S as s}from"./SearchField-a1hCIdma.js";import"./iframe-TjYTyBIA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRcN3zts.js";import"./utils-B2jU_PXd.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-5p42HyBq.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./useFormValidation-CeJWDr9L.js";import"./useField-DJHv4sS4.js";import"./Button-DfGK-ytd.js";import"./Hidden-Bk8kC44C.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./search-gc1aJse7.js";import"./createLucideIcon-CEDLvmmT.js";import"./ClearButton-jUFSvUv_.js";import"./Button-Lepv9VS_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./x-BMgB1TfF.js";import"./FieldError-Bc9pveKo.js";import"./Text-BkOzDRnY.js";import"./Text-C9TF991Y.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
