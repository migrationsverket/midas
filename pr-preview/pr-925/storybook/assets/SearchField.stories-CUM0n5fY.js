import{S as s}from"./SearchField-CcOihMRp.js";import"./iframe-nGNo9-8O.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-EHg2JhJE.js";import"./utils-UNFcTH9P.js";import"./useLocalizedStringFormatter-BA4G5uku.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DT8IGrqM.js";import"./useFocusRing-C4tRJGEy.js";import"./index-Bofu8C1l.js";import"./index-C-K6rHqI.js";import"./useFormValidation-C19cb3Zb.js";import"./useField-DH9kUM2Z.js";import"./Button-eRwgxovv.js";import"./Hidden-CvblkW9k.js";import"./useLabels-DhwZeyz8.js";import"./useButton-BNd8Ph1P.js";import"./search-B3CxmeNH.js";import"./createLucideIcon-BBha-BqP.js";import"./Button-LUv1NTVn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BT8srvPn.js";import"./VisuallyHidden-GtNNRbXA.js";import"./x-BybCoCfR.js";import"./FieldError-CT-Q184-.js";import"./Text-Z8AhytFT.js";import"./Text-f2btrM1d.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
