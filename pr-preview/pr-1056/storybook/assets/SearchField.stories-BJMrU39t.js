import{S as s}from"./SearchField-BDQAnVr_.js";import"./iframe-BUyds97o.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-BE9Ip_bu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dk1B153b.js";import"./utils-BPu6xsrW.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C9N0NVGh.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./useFormValidation-DsGu4ICd.js";import"./useField-C5IKysth.js";import"./Button-HXR-7m9h.js";import"./Hidden-D-uqQF0z.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./search-7Sa8Snop.js";import"./createLucideIcon-iD7jktQ6.js";import"./ClearButton-anqdkjVz.js";import"./Button-N-WvUv-N.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./VisuallyHidden-bxnSUgOY.js";import"./x-D7YsntyJ.js";import"./FieldError-nzuM8Mkm.js";import"./Text-Dm1It-3G.js";import"./Text-DYJP5A76.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
