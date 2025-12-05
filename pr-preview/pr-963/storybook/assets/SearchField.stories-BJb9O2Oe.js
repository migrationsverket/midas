import{S as s}from"./SearchField-Cpd3QmrH.js";import"./iframe-EvAXEFMI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B-dx9B_p.js";import"./utils-CxbI4lJ8.js";import"./useLocalizedStringFormatter-LpBXKpWQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CAnMwNGO.js";import"./useFocusRing-DfVRu85N.js";import"./index-BERR-sy9.js";import"./index-5Nx_3vzb.js";import"./useFormValidation-CNd9s6u-.js";import"./useField-Bz34INMU.js";import"./Button-CoUp-4SO.js";import"./Hidden-DF-gcxja.js";import"./useLabels-CcKLbZF9.js";import"./useButton-CyNHfsAf.js";import"./search-C6Fw8IAS.js";import"./createLucideIcon-Dkm_kHZA.js";import"./Button-DNu20i5o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQT0Ev-t.js";import"./VisuallyHidden-Bx2PPkoO.js";import"./x-DiiIVqZK.js";import"./FieldError-BYwZNEs3.js";import"./Text-C1bk4Rmu.js";import"./Text-CAHlbO0E.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
