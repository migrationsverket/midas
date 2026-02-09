import{S as s}from"./SearchField-GAiS1ueE.js";import"./iframe-MifYwXyz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ck9De9Y4.js";import"./utils-DQEE__1e.js";import"./useLocalizedStringFormatter-C3fn2FlC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DH66ZZE3.js";import"./useFocusRing-CshLtOVp.js";import"./index-C2YaqACl.js";import"./index-CDZjfK_p.js";import"./useFormValidation-Bv3qCLcs.js";import"./useField-DhyKPenV.js";import"./Button-CKNqLrwF.js";import"./Hidden-BW6dBRkK.js";import"./useLabels-C0p_nmcB.js";import"./useButton-Bi_I7gxU.js";import"./search-Bq6LiPaB.js";import"./createLucideIcon-Ci3Mi_gr.js";import"./ClearButton-Cr_cNS42.js";import"./Button-BcTOGRQL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GZgY9UBY.js";import"./VisuallyHidden-BKJVLMnZ.js";import"./x-D5mMwQqA.js";import"./FieldError-909Vsbkt.js";import"./Text-C2SPm1jh.js";import"./Text-Dt_sqIOk.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
