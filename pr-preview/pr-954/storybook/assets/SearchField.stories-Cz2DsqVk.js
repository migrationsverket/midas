import{S as s}from"./SearchField-B0dvJfrn.js";import"./iframe-CdI6Gw-x.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9Me4rKQ.js";import"./utils-Dp4uK2en.js";import"./useLocalizedStringFormatter-4BabvCR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dr1CHL_M.js";import"./useFocusRing-BvpIo48n.js";import"./index-ssJF5vHn.js";import"./index-CZWLL0-F.js";import"./useFormValidation-Cvy62jZi.js";import"./useField-Bgbq1SU_.js";import"./Button-BGSdqTKH.js";import"./Hidden-D7pBTXR8.js";import"./useLabels-BGn1qwKC.js";import"./useButton-BhAYw-RT.js";import"./search-7EmY9sea.js";import"./createLucideIcon-B7xMdt7d.js";import"./Button-DXIfvleB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C-D13uLG.js";import"./VisuallyHidden-DWNUe8lB.js";import"./x-DNIbSfUM.js";import"./FieldError-DgNWY6t8.js";import"./Text-BUDuz-ou.js";import"./Text-B_qeVnZd.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
