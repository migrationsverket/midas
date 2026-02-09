import{S as s}from"./SearchField-m1vWyjsI.js";import"./iframe-BWdkMAjO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-tNlRhvlF.js";import"./utils-C4rGLdQa.js";import"./useLocalizedStringFormatter-CsTrlIxe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-nf_Kzrb7.js";import"./useFocusRing-Dz8KRmRs.js";import"./index-PBQ0q_wK.js";import"./index-B_yrj6ZN.js";import"./useFormValidation-BrlE7vQL.js";import"./useField-e6tcAxN2.js";import"./Button-DbXwylTQ.js";import"./Hidden-DoytNLvt.js";import"./useLabels-f4Sfov9b.js";import"./useButton-CRIQl1ZU.js";import"./search-B73IsSVy.js";import"./createLucideIcon-UbHQFer_.js";import"./ClearButton-BsImjjIx.js";import"./Button-VYBWmn37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B72kiSfm.js";import"./VisuallyHidden-DDe5r2jE.js";import"./x-CUMw8g3s.js";import"./FieldError-DicB1PMu.js";import"./Text-88YPWSN7.js";import"./Text-CClrU0hd.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
