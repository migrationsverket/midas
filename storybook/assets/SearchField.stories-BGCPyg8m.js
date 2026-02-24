import{S as s}from"./SearchField-C9Fx7E_R.js";import"./iframe-ttA-941O.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BUy0YhYj.js";import"./utils-kMU7ki_G.js";import"./useLocalizedStringFormatter-C2DhziCO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6zG59qU.js";import"./useFocusRing-JMNyCoET.js";import"./index-BGJa9tKv.js";import"./index-xTgHXqnF.js";import"./useFormValidation-DQ_MUVoO.js";import"./useField-V9mNuMYQ.js";import"./Button-C5RiUPk0.js";import"./Hidden-CwltMKmL.js";import"./useLabels-CKLykpFR.js";import"./useButton-Ufm4RpL_.js";import"./search-D4zZXdH7.js";import"./createLucideIcon-B1sYOOVA.js";import"./ClearButton-3XqwxM3R.js";import"./Button-BhVMo4IX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CuS96Tce.js";import"./VisuallyHidden-BaeJBxqb.js";import"./x-CVVENi3f.js";import"./FieldError-D8wLofnN.js";import"./Text-DDmMxJeL.js";import"./Text-BR3kbEzk.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
