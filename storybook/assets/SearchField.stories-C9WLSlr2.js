import{S as s}from"./SearchField-DvH1oZw2.js";import"./iframe-Cu5hLgBG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7_3uWc9.js";import"./utils-CW9D4Lv5.js";import"./useLocalizedStringFormatter-CqfjLmNe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Czeh-z5Q.js";import"./useFocusRing-bpKh6ibc.js";import"./index-DUcOwDca.js";import"./index-DvgRwaKu.js";import"./useFormValidation-DJKo3yYL.js";import"./useField-COQITc8t.js";import"./Button-DhXAJjoH.js";import"./Hidden-B24fzWWq.js";import"./useLabels-3yOZ9Ivw.js";import"./useButton-DbviMFTP.js";import"./search-BdqlmbFi.js";import"./createLucideIcon-CASls7dt.js";import"./Button-BOIdh-Wh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B204hAxd.js";import"./VisuallyHidden-Cj9dIF3c.js";import"./x-fM7wQSz2.js";import"./FieldError-D5AbsiAI.js";import"./Text-DP2X-ccp.js";import"./Text-xlVuuP9J.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
