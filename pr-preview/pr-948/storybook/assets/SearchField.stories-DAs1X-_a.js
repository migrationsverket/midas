import{S as s}from"./SearchField-_x_WAvxb.js";import"./iframe-ESnm-WG3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Df7HUCxc.js";import"./utils-CfF6X6ci.js";import"./useLocalizedStringFormatter-DiyOzk1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MzffEJs8.js";import"./useFocusRing-DA_fDrnE.js";import"./index-vxsCmClI.js";import"./index-AgRx6xjg.js";import"./useFormValidation-cPSQcZQK.js";import"./useField-CyX9ROHV.js";import"./Button-DFzAjeyw.js";import"./Hidden-CluJLsa9.js";import"./useLabels-CAK9137x.js";import"./useButton-6NzSPfmg.js";import"./search-BRVOqffL.js";import"./createLucideIcon-BI482lZK.js";import"./Button-C-IyseEW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dl_alOYb.js";import"./VisuallyHidden-D9McEQWq.js";import"./x-Ctz3SHhN.js";import"./FieldError-rr6C8cNr.js";import"./Text-CopC_eFr.js";import"./Text-DgO_WfAt.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
