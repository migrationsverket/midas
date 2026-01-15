import{S as s}from"./SearchField-B-1GYURN.js";import"./iframe-Cjp05Xvk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C9vPwLiF.js";import"./utils-B7KUpLVX.js";import"./useLocalizedStringFormatter-nEop6Uh_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BBHsan9u.js";import"./useFocusRing-MuyneAO_.js";import"./index-DQoebJgT.js";import"./index-BqZRieL_.js";import"./useFormValidation-C6Bi5OeS.js";import"./useField-ChHqYgaR.js";import"./Button-BQdRHNfD.js";import"./Hidden-nSg4a4bn.js";import"./useLabels-DKrB5MGQ.js";import"./useButton-CCylroM-.js";import"./search-CR1se40Z.js";import"./createLucideIcon-DtASArT9.js";import"./Button-QxYJDAqE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqBPpOm5.js";import"./VisuallyHidden-BiBWBoz6.js";import"./x--z0bIiWF.js";import"./FieldError-DJAw2gVJ.js";import"./Text-CY50v26A.js";import"./Text-BqqvV1Lx.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
