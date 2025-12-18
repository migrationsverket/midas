import{S as s}from"./SearchField-vml_rMzw.js";import"./iframe-SsTP6rfd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BXOXeEl0.js";import"./utils-xovjPneb.js";import"./useLocalizedStringFormatter-DeNsFJ4P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BgiErNeM.js";import"./useFocusRing-CLCXPOxW.js";import"./index-Bcr6E3JC.js";import"./index-LQvR83KO.js";import"./useFormValidation-BfwjaNDO.js";import"./useField-BXKsv6Nk.js";import"./Button-eerNJBVZ.js";import"./Hidden-CFG7p1De.js";import"./useLabels-CRKcuuZE.js";import"./useButton-BoBFAXLN.js";import"./search-mgQsK0sL.js";import"./createLucideIcon-B4PKFn84.js";import"./Button-Bb1EL28B.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9q4ftJk.js";import"./VisuallyHidden-CwQb82jS.js";import"./x-CbXdnvOX.js";import"./FieldError-aNZ3_Z4n.js";import"./Text-BUE0kzAW.js";import"./Text-BYhtQlzN.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
