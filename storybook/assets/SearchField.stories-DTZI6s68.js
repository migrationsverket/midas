import{S as s}from"./SearchField-DWvOhGbf.js";import"./iframe-BEec9xws.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAzuR8Jv.js";import"./utils-tmadhNLO.js";import"./useLocalizedStringFormatter-DPYn3iJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bg4NdGaF.js";import"./useFocusRing-CHLWvWfU.js";import"./index-jsa7VRLI.js";import"./index-BPo6dsF7.js";import"./useFormValidation-Bw69zpyk.js";import"./useField-7d8i6LLe.js";import"./Button-DWX0vVyl.js";import"./Hidden-uHrwE7I5.js";import"./useLabels-B9n4tFRy.js";import"./useButton-G3mO1U0h.js";import"./search-CH0ytIwJ.js";import"./createLucideIcon-BEU2T1Tc.js";import"./ClearButton-Cs4fSlYJ.js";import"./Button-ZBZN_eZh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-piak_TFz.js";import"./VisuallyHidden-B_EbF9d8.js";import"./x-DNVtugLs.js";import"./FieldError-2T8QeYCV.js";import"./Text-CEDi3dsy.js";import"./Text-Cqp2sCpU.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
