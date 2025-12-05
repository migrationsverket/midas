import{S as s}from"./SearchField-DTL78rc4.js";import"./iframe-Hg8hxll6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B9N8h_ty.js";import"./utils-DkBAlQaP.js";import"./useLocalizedStringFormatter-BuwzLtaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuIPC83D.js";import"./useFocusRing-BHhaWYLO.js";import"./index-C9pUtnOL.js";import"./index-QbllegrG.js";import"./useFormValidation-DrG2oSap.js";import"./useField-B7WoHvpW.js";import"./Button-D6s1rIHb.js";import"./Hidden-CW8eyMJF.js";import"./useLabels-Dhhk-JlN.js";import"./useButton-C_20Yccn.js";import"./search-DcovPPJ1.js";import"./createLucideIcon-CorD8qZx.js";import"./Button-BHcDCTkB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Kb9GHVVg.js";import"./VisuallyHidden-DEAPyNKO.js";import"./x-BaNtwQF2.js";import"./FieldError-BnM-2-2F.js";import"./Text-g8ihhCC7.js";import"./Text-CbJwjeA3.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
