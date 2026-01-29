import{S as s}from"./SearchField-BIikN2tt.js";import"./iframe-DLG9UKPd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKvDtRay.js";import"./utils-DBUuZCdW.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Co9_Q0hz.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./useFormValidation-DMkWfSjQ.js";import"./useField-BIKHvwdL.js";import"./Button-TurWYA_F.js";import"./Hidden-BrEjSDmZ.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./search-C4rbRj2i.js";import"./createLucideIcon-BPNvabKa.js";import"./ClearButton-IsKEQ4Fc.js";import"./Button-BSBQeMEK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./VisuallyHidden-CqsIInob.js";import"./x-Cu5S1DSw.js";import"./FieldError-crXTrtj0.js";import"./Text-BSfpdnWo.js";import"./Text-RyRTgpJt.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
