import{S as s}from"./SearchField-lAS1mJ2y.js";import"./iframe-CWzFX-Au.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BEhUYREu.js";import"./utils-CvTFoCuM.js";import"./useLocalizedStringFormatter-mP_Yqfvz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJIOkknr.js";import"./useFocusRing-B_tX-SRB.js";import"./index-DEOOosMo.js";import"./index-5Kn37Y6O.js";import"./useFormValidation-BM2I-aVc.js";import"./useField-4qsl13Q_.js";import"./Button-CC-tYdMe.js";import"./Hidden-b8PZeIsK.js";import"./useLabels-CVVzofvr.js";import"./useButton-CTuUMItv.js";import"./search-DN-JfEn5.js";import"./createLucideIcon-ChdQ3NNl.js";import"./Button-CN-tdIf6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cs6gtZeE.js";import"./VisuallyHidden-B6tTkxvS.js";import"./x-DS21D3ie.js";import"./FieldError-rAccfbQj.js";import"./Text-BBMjHQRy.js";import"./Text-DsDS5WxU.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
