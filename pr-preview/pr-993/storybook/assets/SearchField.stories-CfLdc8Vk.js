import{S as s}from"./SearchField-DeOlCEUd.js";import"./iframe-DZrsJ6b-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cz4Rv-Q4.js";import"./utils-Dj7V2bMs.js";import"./useLocalizedStringFormatter-COTKWZiP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-QOSHG1zq.js";import"./useFocusRing-BAHUxiR4.js";import"./index-fuZi8ECT.js";import"./index-DFt0fMY8.js";import"./useFormValidation-BrYcYbB9.js";import"./useField-DRxI2KW9.js";import"./Button-070y6CBf.js";import"./Hidden-cX5Qttkt.js";import"./useLabels-CGrX1VVn.js";import"./useButton-D7Y3-94U.js";import"./search-Biz_nH9c.js";import"./createLucideIcon-Dbd2m_Uk.js";import"./Button-LBa2vNHq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sjnB8c4y.js";import"./VisuallyHidden-CK7v_0-7.js";import"./x-B6Do5IYF.js";import"./FieldError-DWKhV9VC.js";import"./Text-BS3cp343.js";import"./Text-BkGWbYp3.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
