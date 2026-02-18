import{S as s}from"./SearchField-BkL2Jdf0.js";import"./iframe-UKNJQjU7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DMxiQw5s.js";import"./utils-ZaspRvtG.js";import"./useLocalizedStringFormatter-DzhvNqYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEeFRIUC.js";import"./useFocusRing-BeIXTmL-.js";import"./index-BeTr8JYW.js";import"./index-Cs6Wfmrv.js";import"./useFormValidation-CUAGv13k.js";import"./useField-BOrveTUw.js";import"./Button-ktQggvc6.js";import"./Hidden-DcgeNwze.js";import"./useLabels-Egh2Tmf-.js";import"./useButton-B8VBkWrX.js";import"./search-GEBi0sd7.js";import"./createLucideIcon-VUHoQ9n0.js";import"./ClearButton-BPplLbmv.js";import"./Button-CwlpoN3f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B6bHgHU4.js";import"./VisuallyHidden-B64N4Qj2.js";import"./x-Dq6kRcYA.js";import"./FieldError-D2l5qYM7.js";import"./Text-DJmal9QH.js";import"./Text-DpfK05TX.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
