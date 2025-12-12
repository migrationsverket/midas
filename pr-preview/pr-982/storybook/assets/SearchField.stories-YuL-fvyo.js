import{S as s}from"./SearchField-CbBzLJEU.js";import"./iframe-B9CbKHGE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ByniTdhP.js";import"./utils-K9L8fRbA.js";import"./useLocalizedStringFormatter-BWhJ6dKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BS4jav5P.js";import"./useFocusRing-CBu2b3uq.js";import"./index-D5s799IP.js";import"./index-3OBlmlSu.js";import"./useFormValidation-zEqpMN5l.js";import"./useField-BgOS_xhN.js";import"./Button-tz7DeUoI.js";import"./Hidden-ClX2UHum.js";import"./useLabels-WgVeJXWf.js";import"./useButton-VOsfFyV1.js";import"./search-BKGOsVBi.js";import"./createLucideIcon-u9SLDbD-.js";import"./Button-Duhp4qTZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2z6zT5P.js";import"./VisuallyHidden-aiSUNim6.js";import"./x-BS3x57LM.js";import"./FieldError-tIBg00I2.js";import"./Text-1lqNbJaj.js";import"./Text-BZziZ39V.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
