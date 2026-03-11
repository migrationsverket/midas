import{S as s}from"./SearchField-Ne_WbsQt.js";import"./iframe-CWkvuWTT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iyG7ALqN.js";import"./utils-DyJgWfbB.js";import"./useLocalizedStringFormatter-DWk1Wejp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dehuj20F.js";import"./useFocusRing-BH2MioRm.js";import"./index-BqsuNAQb.js";import"./index-BFnZ93le.js";import"./useFormValidation-CEtdWlS3.js";import"./useField-hL8cI8qW.js";import"./Button-CENR_dMZ.js";import"./Hidden-BVluWMB8.js";import"./useLabels-jLhadwWQ.js";import"./useButton-3lWcEg9J.js";import"./search-yn-n663H.js";import"./createLucideIcon-CVtV5ZX2.js";import"./ClearButton-BRlGzA45.js";import"./Button-zWAgsDfI.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bt6bRdGE.js";import"./VisuallyHidden-mePKQ-Q7.js";import"./x-qMOEwESg.js";import"./FieldError-Cc11gFwP.js";import"./Text-CWck0lXA.js";import"./Text-wpzgiqlm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
