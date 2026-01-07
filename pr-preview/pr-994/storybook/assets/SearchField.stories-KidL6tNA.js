import{S as s}from"./SearchField-DQE13oZw.js";import"./iframe-CubTBBGo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8OTRD6B.js";import"./utils-DU8A25ha.js";import"./useLocalizedStringFormatter-CUeB_ZYl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5atWmWv.js";import"./useFocusRing-lzGIxQWj.js";import"./index-C4yCgsVr.js";import"./index-CaW2QasO.js";import"./useFormValidation-9VOZWhD_.js";import"./useField-AFvgVfpl.js";import"./Button-CDJANkr2.js";import"./Hidden-GxRiQCKq.js";import"./useLabels-BNDUUXFn.js";import"./useButton-BsD5A1Wy.js";import"./search-DclpMuSh.js";import"./createLucideIcon-Bs7Zj_V7.js";import"./Button-CkP2HO-W.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJ2CiOfY.js";import"./VisuallyHidden-5NlIvA6X.js";import"./x-r5WQKcoU.js";import"./FieldError-DW_zkLWT.js";import"./Text-73NkOSuw.js";import"./Text-LbE64-eX.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
