import{S as s}from"./SearchField-C-bk-9bl.js";import"./iframe-DAdLp1QF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cjv7AWlH.js";import"./utils-ByUIGDWY.js";import"./useLocalizedStringFormatter-CNpWk1vP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBtFWLA6.js";import"./useFocusRing-D53tZ_0K.js";import"./index-DoL8Y7w4.js";import"./index-QU8jILku.js";import"./useFormValidation-Csyf_1Q2.js";import"./useField-I0_MMok3.js";import"./Button-fvyThmWu.js";import"./Hidden-B_XHwn2B.js";import"./useLabels-Ca5jvo4m.js";import"./useButton-D93eGxVU.js";import"./search-EjxvNOOJ.js";import"./createLucideIcon-DWkxk0NR.js";import"./Button-DQbQp0QJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BzYUMjPp.js";import"./VisuallyHidden-Ctoge_gF.js";import"./x-D7c1f2O5.js";import"./FieldError-FVxfyxcS.js";import"./Text-SxkkCqAs.js";import"./Text-CopR-Qh3.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
