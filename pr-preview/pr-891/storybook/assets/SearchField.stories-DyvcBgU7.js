import{S as s}from"./SearchField-BpK2ZGMr.js";import"./iframe-WskM-gQy.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-ClJJ_Sp5.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9EpcS-3.js";import"./utils-PiplYHk9.js";import"./useLocalizedStringFormatter-DZmX7KtP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CE46bYr_.js";import"./useFocusRing-VjDIWbHo.js";import"./index-DQ5MGmqD.js";import"./index-BUVNGicR.js";import"./useFormValidation-CRpeXhTc.js";import"./useField-DeXtnrJc.js";import"./Button-D8QLfFfX.js";import"./Hidden-CGOCYihM.js";import"./useLabels-CP12Ou_e.js";import"./useButton-DKOsPuai.js";import"./search-CvN4PwAn.js";import"./createLucideIcon-VhmxKnBe.js";import"./Button-DPo6WJUv.js";import"./Button.module-CtQ1deO8.js";import"./x-BDUUVzbP.js";import"./useLocalizedStringFormatter-DmtdD_MQ.js";import"./FieldError-DJyd5OaV.js";import"./Text-ZMEsASHW.js";import"./Text-Dtog7EZC.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
