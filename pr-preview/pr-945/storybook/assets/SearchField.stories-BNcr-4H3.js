import{S as s}from"./SearchField-BhKv1Ipe.js";import"./iframe-Cur_B9x6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DxtyO0YE.js";import"./utils-BHg8G-Z9.js";import"./useLocalizedStringFormatter-bd-N5t6G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGYBO8st.js";import"./useFocusRing-CRuZSqUo.js";import"./index-CTduu0cI.js";import"./index-CqyIpgV0.js";import"./useFormValidation-bdXELRtu.js";import"./useField-V2skQNbm.js";import"./Button-BeG5EWPQ.js";import"./Hidden-SFeirINQ.js";import"./useLabels-iG7AllCV.js";import"./useButton-DpJaITZj.js";import"./search-B-AevGpo.js";import"./createLucideIcon-PM3bnbfq.js";import"./Button-D0lF0KE2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CIxK5Ezl.js";import"./VisuallyHidden-CNgGjdlH.js";import"./x-Cbbv-5j9.js";import"./FieldError-DnpHL-2i.js";import"./Text-QTfkrrvd.js";import"./Text-D7rZbanu.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
