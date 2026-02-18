import{S as s}from"./SearchField-9VRUf2Zu.js";import"./iframe-BMx8CJ_s.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbJAHATE.js";import"./utils-mLbJG5lt.js";import"./useLocalizedStringFormatter-BgZX5ldx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B0Cqt9ot.js";import"./useFocusRing-C7jWGJZo.js";import"./index-BdeXmt1O.js";import"./index-2hUmUoIt.js";import"./useFormValidation-BT0aeyXX.js";import"./useField-DV_7nNQX.js";import"./Button-DAS2aWUT.js";import"./Hidden-bWwRORGP.js";import"./useLabels-0a9zero9.js";import"./useButton-DYdnoqIL.js";import"./search-CIlUqYQK.js";import"./createLucideIcon-BUxxpft6.js";import"./ClearButton-No11DHO0.js";import"./Button-Cj8oElf-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CkXFCrEO.js";import"./VisuallyHidden-C38pbAG2.js";import"./x-DY7xSTl4.js";import"./FieldError-CIeNzIqM.js";import"./Text-B5Nx5J8j.js";import"./Text-Bta2s8Xv.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
