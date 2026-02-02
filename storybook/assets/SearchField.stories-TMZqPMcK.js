import{S as s}from"./SearchField-BOBN49F4.js";import"./iframe-D8kScJOW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CfPp4VwR.js";import"./utils-DOIpWP0z.js";import"./useLocalizedStringFormatter-yHRbMNWv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tBSUgwkE.js";import"./useFocusRing-DX0NOpMY.js";import"./index-BwG7EFX-.js";import"./index-DoG9K020.js";import"./useFormValidation-mZ0GSkOf.js";import"./useField-DdbhNNnT.js";import"./Button-Calv3qt8.js";import"./Hidden-DrIa5vju.js";import"./useLabels-CiWc5UlF.js";import"./useButton-CsXDdlLu.js";import"./search-CKr6Avj9.js";import"./createLucideIcon-D86DfHIr.js";import"./ClearButton-Ce_Mmhca.js";import"./Button-yGMt3EcI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CnhkruPy.js";import"./VisuallyHidden-CmWP6aGN.js";import"./x-gesZXF53.js";import"./FieldError-BGTGmZtQ.js";import"./Text-C9haNyBE.js";import"./Text-dfzJJw2x.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
