import{S as s}from"./SearchField-CgsuEhUj.js";import"./iframe-BAs73RPL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-NZanUP6y.js";import"./utils-BNvagvwB.js";import"./useLocalizedStringFormatter-zi0cj8Ji.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DAnIDVMe.js";import"./useFocusRing-B5MTwkWu.js";import"./index-mTKHe5Za.js";import"./index-CPUct8TH.js";import"./useFormValidation-B9dJiJfE.js";import"./useField-BGz-Myg2.js";import"./Button-DOsNf8Ag.js";import"./Hidden-ExRgjons.js";import"./useLabels-DIezZ8D1.js";import"./useButton-Dq9Jdi2X.js";import"./search-DvP1fgvS.js";import"./createLucideIcon-D8g6b5V3.js";import"./Button-DpzX3_Fu.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-lGSf489A.js";import"./VisuallyHidden-HHC4KR7u.js";import"./x-DbOIoYEK.js";import"./FieldError-CvqgXdke.js";import"./Text-DfkU3vzw.js";import"./Text-s8L5UkWk.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
