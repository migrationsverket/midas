import{S as s}from"./SearchField-DHHoBZ8j.js";import"./iframe-Co0SsNj6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CAAFyILJ.js";import"./utils-DoIZJ7cj.js";import"./useLocalizedStringFormatter-BcSWiZ19.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgD0NSef.js";import"./useFocusRing-9k5ozzKg.js";import"./index-D1rsIpeY.js";import"./index-DMENUWva.js";import"./useFormValidation-DXVxdhpA.js";import"./useField-C47SklL7.js";import"./Button-0-4Kgh6r.js";import"./Hidden-CossIpZl.js";import"./useLabels-LGizr97P.js";import"./useButton-Cob-AGV8.js";import"./search-CL_Pq8Kn.js";import"./createLucideIcon-groEP49X.js";import"./ClearButton--YKhL5_g.js";import"./Button-6Dau2X37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc2vZIqX.js";import"./VisuallyHidden-m5iKMMV5.js";import"./x-DSoxV8Ho.js";import"./FieldError-BD2HEwuR.js";import"./Text-4sNYTzks.js";import"./Text-BSTUUX0z.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
