import{S as s}from"./SearchField-BHUtSoJt.js";import"./iframe-Bf2O8mTA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4kZCJVJ.js";import"./utils-DvWeM8bD.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBUs1YNw.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./useFormValidation-BYxqhBck.js";import"./useField-BNnNMNgv.js";import"./Button-rJBUL80Z.js";import"./Hidden-Bayn64y7.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./search-B2IU-hxd.js";import"./createLucideIcon-DkEcA7M8.js";import"./ClearButton-B5iWWLhG.js";import"./Button-DqEB6TwE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./VisuallyHidden-BdseXYtF.js";import"./x-rPy8VafX.js";import"./FieldError-DmoCXSDp.js";import"./Text-Br20EZ_Y.js";import"./Text-C9gRZFsm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
