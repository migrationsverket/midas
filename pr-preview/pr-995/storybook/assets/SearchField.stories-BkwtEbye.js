import{S as s}from"./SearchField-Bdamsazk.js";import"./iframe-DSpa0ZJj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BWGhdnzP.js";import"./utils-W7NKEzNd.js";import"./useLocalizedStringFormatter-20jVmx8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D7518Y8T.js";import"./useFocusRing-CHFIxq0S.js";import"./index-Bm634ACX.js";import"./index-JwgIIJLt.js";import"./useFormValidation-CjcOfkDV.js";import"./useField-9lqyMP1q.js";import"./Button-Cz-z0Ko6.js";import"./Hidden-Bn_hIWKG.js";import"./useLabels-CCN5xeFd.js";import"./useButton-Cu2rmCSH.js";import"./search-CkrI-2ph.js";import"./createLucideIcon-DKtiU0kB.js";import"./ClearButton-BrDfjB4a.js";import"./Button-Cdop71cL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPq-0JGc.js";import"./VisuallyHidden-8eYS4FK5.js";import"./x-CuWMoefh.js";import"./FieldError-D4Zul2ht.js";import"./Text-B4__o0ew.js";import"./Text-CuC4lmi7.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
