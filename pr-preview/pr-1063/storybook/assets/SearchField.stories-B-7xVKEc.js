import{S as s}from"./SearchField-Bp4BpGWb.js";import"./iframe-Bt2IPdm_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CVrvGgqI.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CHQWAa9G.js";import"./utils-C3T3ztzp.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ckkBpHVX.js";import"./useFocusRing-DkE8kJUj.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./useFormValidation-EZHxDImy.js";import"./useField-CQxFKP7h.js";import"./Button-C79FTkxg.js";import"./Hidden--XR3ujDb.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./search-YuFVPDkm.js";import"./createLucideIcon-CLpn3Yea.js";import"./ClearButton-D9hrdXur.js";import"./Button-CLF5zjXA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";import"./VisuallyHidden-B4zsPLSx.js";import"./x-BDjWDO9M.js";import"./FieldError-DsVwS6sU.js";import"./Text-4gkk9B6S.js";import"./Text-sG9oy4ZT.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
