import{S as s}from"./SearchField-CFntI9XV.js";import"./iframe-CeCAp685.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dps_NbAf.js";import"./utils-COZ-VSjk.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B1f4LkBQ.js";import"./useFocusRing-Bh0QYcZA.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./useFormValidation-C4KFIaMR.js";import"./useField-B0v1Y4ts.js";import"./Button-0wuCXx93.js";import"./Hidden-DL0LnJvP.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./search-CW4jy53L.js";import"./createLucideIcon-DSHxLsIU.js";import"./ClearButton-CGBkPO4V.js";import"./Button-DO76dX9X.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";import"./VisuallyHidden-C9bjb32j.js";import"./x-D2ttmjes.js";import"./FieldError-aZ4tQBIh.js";import"./Text-OHvhFpdo.js";import"./Text-BD2V775c.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
