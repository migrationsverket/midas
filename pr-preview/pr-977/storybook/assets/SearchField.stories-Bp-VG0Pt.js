import{S as s}from"./SearchField-pdOeqs1I.js";import"./iframe-MGON9gUz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7UrvEAm.js";import"./utils-Cnlzp-5B.js";import"./useLocalizedStringFormatter-Dk_lEJbs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DXjNuDpM.js";import"./useFocusRing-ThBX_ucU.js";import"./index-BPAmBu_k.js";import"./index-FW1sGAw2.js";import"./useFormValidation-CZH_3WXB.js";import"./useField-C76vj-yl.js";import"./Button-C2E3oR8W.js";import"./Hidden-jd2R-Bfn.js";import"./useLabels-DAFPofHN.js";import"./useButton-CZwmHtQP.js";import"./search-yauXQTsl.js";import"./createLucideIcon-CxLXd6bS.js";import"./Button-DNm7fuyT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcmqV3-4.js";import"./VisuallyHidden-Dsp0-A_8.js";import"./x-rFaeoGAX.js";import"./FieldError-CsJWXBCg.js";import"./Text-BnvHdZmH.js";import"./Text-DHFOFPOF.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
