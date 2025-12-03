import{S as s}from"./SearchField-CkKHLEHK.js";import"./iframe-CKFV4t_1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDpF19zF.js";import"./utils-DI9iWWNt.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dv4ibsMe.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./useFormValidation-B6Fe8WXE.js";import"./useField-BS1r04HM.js";import"./Button-DI-ffzDX.js";import"./Hidden-DihczV1P.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./search-DZLfXLnv.js";import"./createLucideIcon-sgDlsuts.js";import"./Button-CX41FOI9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./VisuallyHidden-POfTLuvh.js";import"./x-tZVRH0aO.js";import"./FieldError-CfIn2uhl.js";import"./Text-DzSDPQzh.js";import"./Text-Dv3jZ_aV.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
