import{S as s}from"./SearchField-Bef5Pk6W.js";import"./iframe-570mREhY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bk880GAa.js";import"./utils-BqlcL5rx.js";import"./useLocalizedStringFormatter-CImBKygC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ClwVu4Jc.js";import"./useFocusRing-D77kJS_m.js";import"./index-Bvld532n.js";import"./index-C5HPQFby.js";import"./useFormValidation-CR3Ou1E_.js";import"./useField-DLWgoaNu.js";import"./Button-C_kwnSXE.js";import"./Hidden-B4VHltGi.js";import"./useLabels-C-WDIhaI.js";import"./useButton-TVehMT5u.js";import"./search-BNCPCb-g.js";import"./createLucideIcon-BAw__jnC.js";import"./ClearButton-LrDr6T7F.js";import"./Button-dcNBfXXf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DkAO2Z2_.js";import"./VisuallyHidden-BOerlFrD.js";import"./x-DUSrueAG.js";import"./FieldError-yE8YByGw.js";import"./Text-Bv6LeWEW.js";import"./Text-Dj2VLQFh.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
