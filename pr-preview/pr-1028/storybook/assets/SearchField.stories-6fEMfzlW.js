import{S as s}from"./SearchField-CjNvns_1.js";import"./iframe-nOsxirQX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDwIrHc5.js";import"./utils-Bx1o-H88.js";import"./useLocalizedStringFormatter-CEAmhm35.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtRrdgvy.js";import"./useFocusRing-D89DlAJn.js";import"./index-BBtn04JY.js";import"./index-4Tg7UEMT.js";import"./useFormValidation-BrKAO3SO.js";import"./useField-BV3Fx_ol.js";import"./Button-DcANhavY.js";import"./Hidden-BQXizKKD.js";import"./useLabels-quzXmLXQ.js";import"./useButton-Bh9NqEET.js";import"./search-BDOjKS3d.js";import"./createLucideIcon-BM5xacqz.js";import"./ClearButton-B22aG76_.js";import"./Button-C_6tr8VE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BrifjVpT.js";import"./VisuallyHidden-D_ts-6oX.js";import"./x-Co742d-j.js";import"./FieldError-BRIeksHU.js";import"./Text-B8fVM-qM.js";import"./Text-66nZ78iJ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
