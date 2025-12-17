import{S as s}from"./SearchField-BiWkT_DD.js";import"./iframe-BCu1NNFI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dejsun2t.js";import"./utils-fj1shBHC.js";import"./useLocalizedStringFormatter-BQINCQnu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CZxZ8w_2.js";import"./useFocusRing-Bi2l9BeF.js";import"./index-BORhhh-V.js";import"./index-pb47Dny1.js";import"./useFormValidation-BEqNihOK.js";import"./useField-DIMoLOh1.js";import"./Button-vp3BXzyW.js";import"./Hidden-CM3Yk7lA.js";import"./useLabels-Ck0jGj4V.js";import"./useButton-tpmepzyq.js";import"./search-CaJ8mruA.js";import"./createLucideIcon-B5Es93Ur.js";import"./Button-D-exP_iM.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-DO5bmpoD.js";import"./VisuallyHidden-BUlrvxyt.js";import"./x-C6-boS8J.js";import"./FieldError-D_bX0XbT.js";import"./Text-CSC27xRH.js";import"./Text-DIEFoepW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
