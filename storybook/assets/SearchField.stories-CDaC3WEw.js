import{S as s}from"./SearchField-DLppYJct.js";import"./iframe-BI14_MVF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7wUKhFW.js";import"./utils-CUoFg1P-.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DVz2DBKg.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./useFormValidation-CI5p8J41.js";import"./useField-10jeCMxt.js";import"./Button-C1lGy2rc.js";import"./Hidden-fX2mzFJg.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./search-CBz9yeIb.js";import"./createLucideIcon-DENDzJzs.js";import"./ClearButton-BMYc0gMf.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./VisuallyHidden-CyW44Voa.js";import"./x-BV47LBd3.js";import"./FieldError-0gwuUdiP.js";import"./Text-CI44Yo6S.js";import"./Text-RJrnIXBc.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
