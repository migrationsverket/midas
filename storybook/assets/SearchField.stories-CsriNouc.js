import{S as s}from"./SearchField-HrUEpuPS.js";import"./iframe-CghREHCp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BNCqjruO.js";import"./utils-DcbzADZG.js";import"./useLocalizedStringFormatter-BHRqU8bD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQ1crf_g.js";import"./useFocusRing-Os94pZjv.js";import"./index-C_9syRFs.js";import"./index-bNnSmjOQ.js";import"./useFormValidation-D-acFxN0.js";import"./useField--pcLrrjr.js";import"./Button-BbapMa4Z.js";import"./Hidden-BLP0xzBf.js";import"./useLabels-BLq2FESX.js";import"./useButton-DICYCMex.js";import"./search-rub7p52M.js";import"./createLucideIcon-DCyJjHTa.js";import"./ClearButton-BVrPqtOi.js";import"./Button-BgVDIbm9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-43Jpf1jS.js";import"./VisuallyHidden-CK_U2Q_P.js";import"./x-Zoiz82II.js";import"./FieldError-v9jgVeW0.js";import"./Text-Buk_-DSi.js";import"./Text-Bgsdl3BX.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
