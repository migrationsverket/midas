import{S as s}from"./SearchField-ZhZyis6U.js";import"./iframe-Cvf5bOeL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C6H-hxLp.js";import"./utils-C1R7Byny.js";import"./useLocalizedStringFormatter-C0qo-Kt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tLVQaiTz.js";import"./useFocusRing-COt4M2p8.js";import"./index-ClZalfPt.js";import"./index-CXp7TptX.js";import"./useFormValidation-BvzmB0lD.js";import"./useField-DbedPEp5.js";import"./Button-CxK6-t7a.js";import"./Hidden-BkiKYALS.js";import"./useLabels-Ds9sWjje.js";import"./useButton-CeaaOal7.js";import"./search-kXom4bOP.js";import"./createLucideIcon-AeCqa4TH.js";import"./ClearButton-Bq50jhxr.js";import"./Button-Cpd04SUc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Conpc6HM.js";import"./VisuallyHidden-BC_L462J.js";import"./x-QFX-QYqm.js";import"./FieldError-CiZkIitt.js";import"./Text-kmtP8_oY.js";import"./Text-CBvf4Q07.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
