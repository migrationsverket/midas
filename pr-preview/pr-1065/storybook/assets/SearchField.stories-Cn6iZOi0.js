import{S as s}from"./SearchField-BCIAlPPP.js";import"./iframe-CD9uBJjF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CV5SZqjM.js";import"./utils-D9nWysEF.js";import"./useLocalizedStringFormatter-BfgeHIhn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SKPHel1c.js";import"./useFocusRing-Bz4Ez0NQ.js";import"./index-CyAc0wfu.js";import"./index-Cfa7UGYo.js";import"./useFormValidation-CMWTaPvT.js";import"./useField-NtKOYEUw.js";import"./Button-DKA4ukB1.js";import"./Hidden-MQKal_Xr.js";import"./useLabels-REhQlgaO.js";import"./useButton-C2BwIN52.js";import"./search-Bg0cwN17.js";import"./createLucideIcon-ukt1IiZL.js";import"./ClearButton-CClLmPlR.js";import"./Button-BuKqwfs3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B8TYdvpB.js";import"./VisuallyHidden-Csfns3eW.js";import"./x-OCy2nfas.js";import"./FieldError-BlUbkslV.js";import"./Text-gTqq02dR.js";import"./Text-DrZkRnZ9.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
