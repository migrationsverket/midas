import{S as s}from"./SearchField-Dvhenf88.js";import"./iframe-BBV6b5lG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DB16enQ5.js";import"./utils-Cl8pVGWb.js";import"./useLocalizedStringFormatter-DxPLpvAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPKBCyFY.js";import"./useFocusRing-BKoWjM3h.js";import"./index-BzpXdeZq.js";import"./index-D_KHeT1o.js";import"./useFormValidation-DK1VssBA.js";import"./useField-CJHeRl7h.js";import"./Button-DLszx2Y7.js";import"./Hidden-Ds8YvxI_.js";import"./useLabels-pCbqYqJF.js";import"./useButton-tezIzvTx.js";import"./search-CTKwnTwu.js";import"./createLucideIcon-CQjagoR0.js";import"./Button-D_woJjNv.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-8FdOFj4F.js";import"./VisuallyHidden-DebLyYO_.js";import"./x-Cq4GRLQZ.js";import"./FieldError-Dn4KLTgh.js";import"./Text-CxqhfGOZ.js";import"./Text-BpMSL69-.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
