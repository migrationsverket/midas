import{S as s}from"./SearchField-Cd9GMR0A.js";import"./iframe-kbhJnT9w.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BmDsoGZM.js";import"./utils-BIWQukqa.js";import"./useLocalizedStringFormatter-DnDmMNZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYRnC2DJ.js";import"./useFocusRing-D8-czbxO.js";import"./index-zuYBL4Lo.js";import"./index-7Y8nIPcc.js";import"./useFormValidation-B19BTBT3.js";import"./useField-DWW2mLhZ.js";import"./Button-CJhwVjkq.js";import"./Hidden-DLSrH6le.js";import"./useLabels-C4BeTwXz.js";import"./useButton-DnRhcX8P.js";import"./search-l3QaJH5q.js";import"./createLucideIcon-MdX6GIq3.js";import"./Button-2yQDInF3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DENJ27Hf.js";import"./VisuallyHidden-BElvd5Sz.js";import"./x-Db3eMiaL.js";import"./FieldError-BjDoFXdk.js";import"./Text-Bx3yC9L1.js";import"./Text-DNo-c8E4.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
