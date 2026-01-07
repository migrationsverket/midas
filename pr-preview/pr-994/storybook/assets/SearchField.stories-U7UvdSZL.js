import{S as s}from"./SearchField-VMgB6UGo.js";import"./iframe-Bflhdmnn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-De_NBKuj.js";import"./utils-BPwgoz0Z.js";import"./useLocalizedStringFormatter-EwY44Yqc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BSTQrG74.js";import"./useFocusRing-BekWnAY5.js";import"./index-BxP1rmx1.js";import"./index-DGB9V8m6.js";import"./useFormValidation-2gQShG9R.js";import"./useField-m0nH8cRy.js";import"./Button-m3Na6kNz.js";import"./Hidden-KMCdUr8_.js";import"./useLabels-tdJ51icT.js";import"./useButton-DQzOjWYq.js";import"./search-CWlRqMMJ.js";import"./createLucideIcon-CpeXUi9U.js";import"./Button-CafMpAWK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D5OYcKkz.js";import"./VisuallyHidden-P8tetEQ_.js";import"./x-D8w9i_29.js";import"./FieldError-CN0prp1V.js";import"./Text-D5Q908jx.js";import"./Text-In3vo28v.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
