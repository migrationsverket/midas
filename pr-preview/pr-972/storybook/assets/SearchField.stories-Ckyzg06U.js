import{S as s}from"./SearchField-BYoZ4qTZ.js";import"./iframe-BTV99Gms.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-tl9lkRKT.js";import"./utils-BacIRvZM.js";import"./useLocalizedStringFormatter-BL0xzeyk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzCuOa-s.js";import"./useFocusRing-Dhw79Z84.js";import"./index-CFuROd4a.js";import"./index-C6EfjArq.js";import"./useFormValidation-CvyP8liB.js";import"./useField-D6tha74p.js";import"./Button-024Yw0Lw.js";import"./Hidden-DXOsHJk6.js";import"./useLabels-CKLLx1Rq.js";import"./useButton-BB6MUNWj.js";import"./search-clsX5WLq.js";import"./createLucideIcon-CTaohzwX.js";import"./Button-BLFTRxuR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B3b85il2.js";import"./VisuallyHidden-B8ZdR9Qv.js";import"./x-nny4ZO7m.js";import"./FieldError-C71HvWKC.js";import"./Text-CxND1lZJ.js";import"./Text-CrWtCM-W.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
