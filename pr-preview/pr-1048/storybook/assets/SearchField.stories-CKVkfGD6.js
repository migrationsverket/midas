import{S as s}from"./SearchField-CAVZXE1S.js";import"./iframe-C3suvfCC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dy1nnS07.js";import"./utils-8KtKGWo2.js";import"./useLocalizedStringFormatter-BhJ_7gEa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SIPUAUV3.js";import"./useFocusRing-DPPVEX-G.js";import"./index-DPEO0aoj.js";import"./index-PxyQfFNQ.js";import"./useFormValidation-D3u9G5Gr.js";import"./useField-DCRcz9cn.js";import"./Button-Dadovnzr.js";import"./Hidden-B4jqCieW.js";import"./number-DfkVkf0F.js";import"./useLabels-ETQjh8K0.js";import"./useButton-D1gxBCXz.js";import"./search-CCZaKiwA.js";import"./createLucideIcon-lIWmNTi7.js";import"./ClearButton-CAfYqT4n.js";import"./Button-BugZSa53.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B21-jb3s.js";import"./VisuallyHidden-BuDGIcKc.js";import"./x-Z98Hm-Qw.js";import"./FieldError-r_7UR8Ic.js";import"./Text-TmrZTkdZ.js";import"./Text-CAR9w4j8.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
