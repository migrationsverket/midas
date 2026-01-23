import{S as s}from"./SearchField-DFBWQ5ui.js";import"./iframe-c0NZLqxB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjKcVj6X.js";import"./utils-BKgH2Y_x.js";import"./useLocalizedStringFormatter-Dj8f67Lw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vi61ycAX.js";import"./useFocusRing-Cj5nDXBG.js";import"./index-BMKVxsa8.js";import"./index-CyIR4htQ.js";import"./useFormValidation-ByN0j24V.js";import"./useField-DuMvas_e.js";import"./Button-C5Y3_RdN.js";import"./Hidden-W2Z4Qx3q.js";import"./useLabels-CZwsnZ3A.js";import"./useButton-Cfwxxq9B.js";import"./search-BgIMct-F.js";import"./createLucideIcon-D4UmvVly.js";import"./ClearButton-DS9BEXNp.js";import"./Button-DIihlZQ1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAkg84e.js";import"./VisuallyHidden-fZjjLnAV.js";import"./x-dOsKZ8lh.js";import"./FieldError-DmTPwkC8.js";import"./Text-INM5RJTT.js";import"./Text-CHKa0TSz.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
