import{S as s}from"./SearchField-MUnmlGNy.js";import"./iframe-BvrUArBU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Oju3a5HH.js";import"./utils-C_lYNAOR.js";import"./useLocalizedStringFormatter-D-QUy42V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHUG7xcD.js";import"./useFocusRing-wAugWugz.js";import"./index-DcrVl_28.js";import"./index-DsaZsgX_.js";import"./useFormValidation-D9uyR9jZ.js";import"./useField-CQVxkpdB.js";import"./Button-D7XroJJX.js";import"./Hidden-ClBR-m0d.js";import"./useLabels-BzNgkpLP.js";import"./useButton-BGbib_XA.js";import"./search-Bej5EYl1.js";import"./createLucideIcon-CC3ddONH.js";import"./Button-opugJ3Pw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGIaKyQn.js";import"./VisuallyHidden-Dgw8VeyT.js";import"./x-DZ0dfeFo.js";import"./FieldError-BP3wi4fG.js";import"./Text-DY3vNu9D.js";import"./Text-DjPIzR5K.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
