import{S as s}from"./SearchField-XEKtv8EI.js";import"./iframe-Bja4lqPg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAOyWDV2.js";import"./utils-CfGU2F4C.js";import"./useLocalizedStringFormatter-cCcv7JR5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-d_6cneKd.js";import"./useFocusRing-nt4HuyWe.js";import"./index-ClGRDelY.js";import"./index-Cha5Qbb4.js";import"./useFormValidation-I_sbpyOb.js";import"./useField-C2ftjCnO.js";import"./Button-BuHlPB14.js";import"./Hidden-BoHDrhun.js";import"./useLabels-CH_BwytF.js";import"./useButton-BzfR_wja.js";import"./search-CR07uzeT.js";import"./createLucideIcon-BrJy0_rm.js";import"./Button-DjNVoY-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFnTdSDM.js";import"./VisuallyHidden-CY-bY3f_.js";import"./x-BVyhS2mz.js";import"./FieldError--F33PEfY.js";import"./Text-DmatnyXE.js";import"./Text-DrvB4AMM.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
