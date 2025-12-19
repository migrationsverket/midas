import{S as s}from"./SearchField-YxHZMhUc.js";import"./iframe-CgGNk3rw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CsvnnSan.js";import"./utils-Bsla82oN.js";import"./useLocalizedStringFormatter-DHE3JpRj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcNmZyWI.js";import"./useFocusRing-PEhcRx0f.js";import"./index-DCKR56k8.js";import"./index-BSP806VS.js";import"./useFormValidation-BKoqHlGb.js";import"./useField-Bz_rH_Qe.js";import"./Button-BQUsf6YZ.js";import"./Hidden-YphN5jOW.js";import"./useLabels-CVmJxcvd.js";import"./useButton-Bxc6d1yq.js";import"./search-iZyewHPt.js";import"./createLucideIcon-DHWtI_nR.js";import"./Button-fl31v-Li.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C6Xrjd2_.js";import"./VisuallyHidden-Dxo16egF.js";import"./x-D2WM6JD2.js";import"./FieldError-BGEe_2Lk.js";import"./Text-CFQfYKY3.js";import"./Text-pXEnGwlG.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
