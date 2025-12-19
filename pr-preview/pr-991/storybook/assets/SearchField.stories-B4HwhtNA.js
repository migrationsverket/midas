import{S as s}from"./SearchField-BTgJFaPj.js";import"./iframe-y3RQudkV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BlejUV3u.js";import"./utils-CLUQEgK0.js";import"./useLocalizedStringFormatter-02llwVfA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JGXsKiI_.js";import"./useFocusRing-D6jKEede.js";import"./index-Btmjqavz.js";import"./index-C_jNHA4R.js";import"./useFormValidation-CZmsk4ZH.js";import"./useField-hggg6uU5.js";import"./Button-CIEvAO1z.js";import"./Hidden-X5-u2uqU.js";import"./useLabels-C6A1w6dP.js";import"./useButton-DvV-S-Re.js";import"./search-Bzvgek0t.js";import"./createLucideIcon-DRJFQYBk.js";import"./Button-C6bCh7AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNW12ox4.js";import"./VisuallyHidden-CodUiT0u.js";import"./x-DAS3UPTm.js";import"./FieldError-DbTKGFTi.js";import"./Text-Blof-eBx.js";import"./Text-BJza01K7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
