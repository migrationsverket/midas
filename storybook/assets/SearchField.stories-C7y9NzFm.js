import{S as s}from"./SearchField-DzvsYFbI.js";import"./iframe-CMtsh5Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DLBojQJe.js";import"./utils-VAsp_gKy.js";import"./useLocalizedStringFormatter-B1g8k-5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQs8jjvp.js";import"./useFocusRing-B6bGNFeQ.js";import"./index-39OB84OG.js";import"./index-DyOrKDpA.js";import"./useFormValidation-aqJVc9GJ.js";import"./useField-Dbi7iGb3.js";import"./Button-Ci2iUJ0f.js";import"./Hidden-CV6VXQ7p.js";import"./useLabels-BTto6oES.js";import"./useButton-BNNKUFuH.js";import"./search-BehGRLvk.js";import"./createLucideIcon-DdaWlS2p.js";import"./Button-DfH0lIm8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPQnGY0f.js";import"./VisuallyHidden-8XrnnDsa.js";import"./x-BMUy26Qu.js";import"./FieldError-DMgiPkwy.js";import"./Text-BX-Y82iV.js";import"./Text-C7cHUgK0.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
