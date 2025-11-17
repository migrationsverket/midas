import{S as s}from"./SearchField-aYjCa8Xu.js";import"./iframe-CjjIIKGs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-wS3aoh2y.js";import"./utils-8ZbXS6f6.js";import"./useLocalizedStringFormatter-TVROMl_H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-AQNAbJEO.js";import"./useFocusRing-BUBN2goW.js";import"./index-D20K6lUI.js";import"./index-DEI9jor0.js";import"./useFormValidation-jiC4Apdl.js";import"./useField-aMWySJSX.js";import"./Button-DNpQXrrI.js";import"./Hidden-BaoTcLvl.js";import"./useLabels-Ia4Z8tbb.js";import"./useButton-DixBK3IU.js";import"./search-BHf4-gOQ.js";import"./createLucideIcon-BKOGWx3H.js";import"./Button-BNEmvK4K.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dff0qiua.js";import"./VisuallyHidden-BVLylhk2.js";import"./x-BgH5q9o3.js";import"./FieldError-CY8akRGr.js";import"./Text-CkV4NByh.js";import"./Text-BpYGQE2I.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
