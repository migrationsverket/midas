import{S as s}from"./SearchField-BW4e-MOF.js";import"./iframe-BU6kIGzE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CCRLFJ5Q.js";import"./utils-DwBB38ip.js";import"./useLocalizedStringFormatter-E1-lnqHI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYhGNxMz.js";import"./useFocusRing-Dvp7gJRw.js";import"./index-Dv6U3VwT.js";import"./index-DyZImytF.js";import"./useFormValidation-DTxNX5vp.js";import"./useField-Dy2in3Zn.js";import"./Button-DOwpnfPC.js";import"./Hidden-CGqS0Jzf.js";import"./useLabels-DikblKAC.js";import"./useButton-DOAxkkBc.js";import"./search-A9jthIP5.js";import"./createLucideIcon-BFaI5vBG.js";import"./ClearButton-DYhDTEGb.js";import"./Button-DUCzx4_4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkmyjsow.js";import"./VisuallyHidden-BjLN-Bea.js";import"./x-DLGK6h12.js";import"./FieldError-CUk6ZN6c.js";import"./Text-JypUyMeF.js";import"./Text-CQspy15V.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
