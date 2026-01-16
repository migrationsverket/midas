import{S as s}from"./SearchField-DJ_59zyS.js";import"./iframe-B_Y0DlqQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DNwepJua.js";import"./utils-DksA0Tsa.js";import"./useLocalizedStringFormatter-jn3ikADD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C8EYfC3m.js";import"./useFocusRing-Bri1p2OG.js";import"./index-DA90p7VR.js";import"./index-D4TvvLIK.js";import"./useFormValidation-BbQ3XrbH.js";import"./useField-3oWVgLWz.js";import"./Button-Du8CgB5i.js";import"./Hidden-DECSsGSE.js";import"./useLabels-Ce9ZpRqc.js";import"./useButton-BkIr7UBR.js";import"./search-XxG5VBQR.js";import"./createLucideIcon-DXYmNs8l.js";import"./ClearButton-D4djfVpf.js";import"./Button-DLuLiY2m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQakQ_l-.js";import"./VisuallyHidden-Dfda1Uwj.js";import"./x-_e6csGZB.js";import"./FieldError-i5Ktr5xn.js";import"./Text-CYtRYcLc.js";import"./Text-CcUZk8IK.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
