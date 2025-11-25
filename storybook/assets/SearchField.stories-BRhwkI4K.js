import{S as s}from"./SearchField-D9Vl0C6l.js";import"./iframe-CNQjlvDm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cw34tQo_.js";import"./utils-gQ4yd-Ab.js";import"./useLocalizedStringFormatter-BAx4OKHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CyQke-mJ.js";import"./useFocusRing-6KaOFFld.js";import"./index-BAocd020.js";import"./index-Crk6Oovq.js";import"./useFormValidation-D93gSj4q.js";import"./useField-1JlohsQ1.js";import"./Button-Bq-mABfS.js";import"./Hidden-CKgMcecd.js";import"./useLabels-Bfeh6CAt.js";import"./useButton-C5sXC89g.js";import"./search-58zDSPEL.js";import"./createLucideIcon-CLo-1QQP.js";import"./Button-DKj7SgkX.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CuiX0-xA.js";import"./VisuallyHidden-CkZ7QXN2.js";import"./x-gQKg2dFZ.js";import"./FieldError-B77Pd3sF.js";import"./Text-CBKz5-Bc.js";import"./Text-_2-H1EYs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
