import{S as s}from"./SearchField-DBzOcPl5.js";import"./iframe-cBPiYa1j.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CfXtp8hs.js";import"./utils-BsI1IeI-.js";import"./useLocalizedStringFormatter-DCwlqfNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DxtzIIET.js";import"./useFocusRing-C3NoufTF.js";import"./index-D3tkVpzv.js";import"./index-DfcTzlFO.js";import"./useFormValidation-CjoRhxJO.js";import"./useField-7H-zKfh5.js";import"./Button-DqAr_Q3f.js";import"./Hidden-D604MEhG.js";import"./useLabels-Ca7v6l-q.js";import"./useButton-DElLBHjA.js";import"./search-H93TcaFU.js";import"./createLucideIcon-Ft43kjRZ.js";import"./Button-DLE1YCfG.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BmqhCjnA.js";import"./VisuallyHidden-YR2KbVd6.js";import"./x-CBM_MZZz.js";import"./FieldError-BxRdx_yQ.js";import"./Text-C9cmeUrC.js";import"./Text-D5vIYSns.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
