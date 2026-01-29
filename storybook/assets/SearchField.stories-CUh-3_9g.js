import{S as s}from"./SearchField-aIcDotMw.js";import"./iframe-esfLhqtF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7s2HgD5.js";import"./utils-NT1QK8Yd.js";import"./useLocalizedStringFormatter-BZtdo5t2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZveMhpa.js";import"./useFocusRing-CYEh12Dg.js";import"./index-BP3Blnj0.js";import"./index-wOGaw679.js";import"./useFormValidation-CA7V4pUR.js";import"./useField-BgwwjJzS.js";import"./Button-CQtaCEWI.js";import"./Hidden-DfuLmxyz.js";import"./useLabels-BNoZ-Pb6.js";import"./useButton-C-mpYoGp.js";import"./search-BPD7ExMy.js";import"./createLucideIcon-DYgZXBvy.js";import"./ClearButton-CdZAkQ76.js";import"./Button-BnPxEc2U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNz9ujRO.js";import"./VisuallyHidden-SY7lO_bO.js";import"./x-DeU5M4hf.js";import"./FieldError-DgO7HhjR.js";import"./Text-Yh0ae2Og.js";import"./Text-BLd0QilH.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
