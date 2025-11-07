import{S as s}from"./SearchField-DVqy5sL3.js";import"./iframe-BH1_R2DT.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--SS9_6v3.js";import"./utils-BVGwIGlb.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DNT3vc47.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./useFormValidation-DHG-vjBo.js";import"./useField-lOybA6ps.js";import"./Button-DaJwfJY_.js";import"./Hidden-kAD8IT6R.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./search-iIU0_zeJ.js";import"./createLucideIcon-ii3gKTw6.js";import"./Button-BnyEfxrm.js";import"./Button.module-CtQ1deO8.js";import"./x-B4Ho-bAi.js";import"./useLocalizedStringFormatter-Crr1T7Lc.js";import"./FieldError-BmHCkNY9.js";import"./Text-BSV7h1MS.js";import"./Text-DLnNCVmf.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
