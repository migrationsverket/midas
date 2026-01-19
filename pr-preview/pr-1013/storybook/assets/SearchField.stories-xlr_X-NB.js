import{S as s}from"./SearchField-CdS-s-eY.js";import"./iframe-scLSUKLC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BLpi_x0u.js";import"./utils-VusYSVV3.js";import"./useLocalizedStringFormatter-C0RBb53M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cyj6jo9h.js";import"./useFocusRing-_IjzIfKM.js";import"./index-mQxC8hvk.js";import"./index-DpJjKeec.js";import"./useFormValidation-CSTJe35f.js";import"./useField-2RcysjcJ.js";import"./Button-DV8mnRES.js";import"./Hidden-D_mDfWbG.js";import"./useLabels-CMKHi586.js";import"./useButton-Cj9v_jLE.js";import"./search-BnSLITJa.js";import"./createLucideIcon-D5mqExBa.js";import"./ClearButton-CXmEHq21.js";import"./Button-Da7_Ionc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B1l7IBDm.js";import"./VisuallyHidden-BH-0CD7g.js";import"./x-D0Bj0XkU.js";import"./FieldError-CFquMVDb.js";import"./Text-DTyekGW6.js";import"./Text-Dt0v8fCv.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
