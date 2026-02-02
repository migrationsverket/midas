import{S as s}from"./SearchField-BhCWJuke.js";import"./iframe-BXi2DpH_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQtA95JU.js";import"./utils-UrQDo-WA.js";import"./useLocalizedStringFormatter-CsL1ogvc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSPSaBob.js";import"./useFocusRing-Bp5DTDVQ.js";import"./index-17Nv7B4H.js";import"./index-D7HPdSS2.js";import"./useFormValidation-Dc7GaW6e.js";import"./useField-DeikWbC4.js";import"./Button-8PW_0Mpf.js";import"./Hidden-D0eHPLgG.js";import"./useLabels-CzvTrbyR.js";import"./useButton-Dhmm4yPW.js";import"./search-l0TxcE2F.js";import"./createLucideIcon-tldxpU3K.js";import"./ClearButton-CxWaqCRh.js";import"./Button-kzBXQJaB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1ci79sH.js";import"./VisuallyHidden-Cw60I5mf.js";import"./x-mQO-tW53.js";import"./FieldError-DAoi_8t4.js";import"./Text-DIwVLx6b.js";import"./Text-BFe5T1zy.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
