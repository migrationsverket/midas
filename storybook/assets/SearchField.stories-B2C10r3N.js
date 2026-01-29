import{S as s}from"./SearchField-oZclgq1z.js";import"./iframe-_gH3GU_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D8rfmS1g.js";import"./utils-CfJDu102.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--d7LR7vK.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./useFormValidation-oTP1bryq.js";import"./useField-ByUbZnyG.js";import"./Button-B0GHbiBt.js";import"./Hidden-D04Pc1_R.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./search-BaK8kwlo.js";import"./createLucideIcon-CfuZJf8D.js";import"./ClearButton-BqVjIZl_.js";import"./Button-DXF4_9k-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./x-BwSPrVqf.js";import"./FieldError-DpcLG2Fx.js";import"./Text-BRHHCRG8.js";import"./Text-DjGT25-P.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
