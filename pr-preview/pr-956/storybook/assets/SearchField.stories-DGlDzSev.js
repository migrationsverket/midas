import{S as s}from"./SearchField-Dv6j1VnZ.js";import"./iframe-B7hDXu73.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BSmwjkMx.js";import"./utils-s99TFDuF.js";import"./useLocalizedStringFormatter-CvfchuRE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChXK9s-Q.js";import"./useFocusRing-Dv3iYYgG.js";import"./index-jtS56rqd.js";import"./index-MHJ3wPjc.js";import"./useFormValidation-Cn0cVSSL.js";import"./useField-x2fx2wbQ.js";import"./Button-Cy0FA1OU.js";import"./Hidden-DGzhCWQ1.js";import"./useLabels-CckQevmM.js";import"./useButton-DUq9O1mu.js";import"./search-e4aE8OGy.js";import"./createLucideIcon-DGjDO6gh.js";import"./Button-BsMsUWps.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dp6ByE82.js";import"./VisuallyHidden-v1Q3RFjC.js";import"./x-BbN9cWvI.js";import"./FieldError-D2xIq2H5.js";import"./Text-DttWi8Qf.js";import"./Text-5DcUl_uA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
