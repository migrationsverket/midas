import{S as s}from"./SearchField-CQpYyJYU.js";import"./iframe-CiqJOzxF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B5UnhFwk.js";import"./utils-0GsTBzJl.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZ_VAzGr.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./useFormValidation-BHCltIgr.js";import"./useField-BKRlvos-.js";import"./Button-BXds3-7Z.js";import"./Hidden-CFvcIHES.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./search-riaD11_5.js";import"./createLucideIcon-DT02zB1r.js";import"./ClearButton-Lh0t1XfK.js";import"./Button-CxRmwJHW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./x-zbQhWPRB.js";import"./FieldError-CwZpQUJo.js";import"./Text-Ch9Sljly.js";import"./Text-Dn4hqnjy.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
