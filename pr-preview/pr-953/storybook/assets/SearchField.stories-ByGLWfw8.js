import{S as s}from"./SearchField-BIkK6O0i.js";import"./iframe-ckMlOdqt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B3FFsQAI.js";import"./utils-BEkamF-T.js";import"./useLocalizedStringFormatter-v7dlyhTP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZ2l5bbs.js";import"./useFocusRing-tPLOxKMi.js";import"./index-D88C6xys.js";import"./index-CnAoOEpY.js";import"./useFormValidation-Cn1CWmnI.js";import"./useField-CbtVBRto.js";import"./Button-Dx6eyFNo.js";import"./Hidden-ByhuVBjJ.js";import"./useLabels-BZnB0y21.js";import"./useButton-DcNY2x9q.js";import"./search-DWZWau2-.js";import"./createLucideIcon-BKonS68S.js";import"./Button-Bu43okhr.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-taz3lryJ.js";import"./VisuallyHidden-PSC2lnf9.js";import"./x-BOSQYS8s.js";import"./FieldError-dYiQ5ceD.js";import"./Text-AOi115Er.js";import"./Text-CEwfXAsA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
