import{S as s}from"./SearchField-DkYuXGDH.js";import"./iframe-yRPWKz3A.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BarJv6Wp.js";import"./utils-YVdcHFiv.js";import"./useLocalizedStringFormatter-jogrdBwj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wm1SAiAm.js";import"./useFocusRing-CAbobd4s.js";import"./index-CcWiq_3n.js";import"./index-DUJFKGcA.js";import"./useFormValidation-DBCFIZZo.js";import"./useField-301n7V83.js";import"./Button-D8bYImzz.js";import"./Hidden-DZj0yzJG.js";import"./number-DfkVkf0F.js";import"./useLabels-Xwis0UQD.js";import"./useButton-BMOjGRCO.js";import"./search-CCXx1SWA.js";import"./createLucideIcon-Cf0XVHZS.js";import"./ClearButton-BYuhFoS8.js";import"./Button-DGlNCwfb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8EuLi5lS.js";import"./VisuallyHidden-Cc0Z01Ry.js";import"./x-BKX7ip5H.js";import"./FieldError-DMHHwpAd.js";import"./Text-BN91Y8yX.js";import"./Text-LxP77sjg.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
