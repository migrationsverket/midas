import{S as s}from"./SearchField-DI9nlJek.js";import"./iframe-DUaQtwZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-44ZtI1aY.js";import"./utils-BxoSgS2M.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CDyrOvSf.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./useFormValidation-Bt9ME4iF.js";import"./useField-hX13VR-a.js";import"./Button-i4oaDduy.js";import"./Hidden-DsXdzH0m.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./search-CERS_GcL.js";import"./createLucideIcon-DySqv-QW.js";import"./ClearButton-BUrcqnEf.js";import"./Button-DWqhmGVb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./VisuallyHidden-Dc19GMYo.js";import"./x-D82uET-y.js";import"./FieldError-CgUL0M8n.js";import"./Text-DKXG1-n8.js";import"./Text-DnwjRhY6.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
