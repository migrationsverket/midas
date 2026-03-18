import{S as s}from"./SearchField-BLNszr_M.js";import"./iframe-C_3vuCKG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B6_sgsXL.js";import"./utils-CTZ-lGkv.js";import"./useLocalizedStringFormatter-DxLulngP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4fyMJ9h.js";import"./useFocusRing-Bim_lF4S.js";import"./index-YuVOA9gI.js";import"./index-C8YVmd9h.js";import"./useFormValidation-Cnq1Qu61.js";import"./useField-C3BtkGOu.js";import"./Button-wKa-_VCA.js";import"./Hidden-kaOVIzje.js";import"./useLabels-zSAz4c3a.js";import"./useButton-DoN6A2i0.js";import"./search-DmN-WmBb.js";import"./createLucideIcon-Czsnz6Io.js";import"./ClearButton-CgCSjq1K.js";import"./x-Bp5i4qjM.js";import"./Button-YkrHmIdv.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bo6l1f_2.js";import"./VisuallyHidden-BW8k_cqp.js";import"./FieldError-Bjas0Mhs.js";import"./Text-7oa-kXNm.js";import"./Text-DKTyWkTk.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
