import{S as s}from"./SearchField-I6-KWUO1.js";import"./iframe-Bd3o2-kp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CKr9JfDg.js";import"./utils-_rYlTRGE.js";import"./useLocalizedStringFormatter-CZQf7unD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_JBWAYK.js";import"./useFocusRing-_t-XzKAc.js";import"./index-DDX6x1th.js";import"./index-eLVcURWN.js";import"./useFormValidation-D42WgsGp.js";import"./useField-j4rDUBO_.js";import"./Button-OB4vCyak.js";import"./Hidden-I4t1GTdG.js";import"./useLabels-8gAUbgWu.js";import"./useButton-ckXfTI1r.js";import"./search-T4d5Vy3p.js";import"./createLucideIcon-CqPIwQix.js";import"./ClearButton-VvR6dY7f.js";import"./Button-BQ7itNQZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CuqGYsZF.js";import"./VisuallyHidden-B2vIweuU.js";import"./x-DMWTYIyv.js";import"./FieldError-uVOJT8DA.js";import"./Text-Cavz3YgX.js";import"./Text-CXquw0of.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
