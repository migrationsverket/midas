import{S as s}from"./SearchField-CgIiLGbk.js";import"./iframe-foa1fz1L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dvg4iFOf.js";import"./utils-Ev5LGgue.js";import"./useLocalizedStringFormatter-BRt717ju.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BM9G_UwF.js";import"./useFocusRing-Ablbfaap.js";import"./index-Cn_e8zWb.js";import"./index-BoAX5djW.js";import"./useFormValidation-kLEwtEdL.js";import"./useField-Cu3mWKaX.js";import"./Button-BDE-HjlG.js";import"./Hidden-C56sCU1_.js";import"./useLabels-DzekMX3n.js";import"./useButton-D8CDSc--.js";import"./search-Pojb_AXM.js";import"./createLucideIcon-DPqkobhw.js";import"./ClearButton-rtrgtiKL.js";import"./Button-DRHKUhef.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRm2vV7S.js";import"./VisuallyHidden-Crc1dHu9.js";import"./x-jUsDefJP.js";import"./FieldError-0xt68GMY.js";import"./Text-hfmE0wsb.js";import"./Text-3kKEReu_.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
