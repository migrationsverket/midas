import{S as s}from"./SearchField-BcD5x_xU.js";import"./iframe-BGtyy6fd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-NBBb3dwB.js";import"./utils-CccsvD7u.js";import"./useLocalizedStringFormatter-BciR1wkJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CHS9md-6.js";import"./useFocusRing-BnRxtNNt.js";import"./index-Jo84nh3h.js";import"./index-iE9NyH8V.js";import"./useFormValidation-By4gnXrd.js";import"./useField-BZ1YzjEa.js";import"./Button-DrTjj1gj.js";import"./Hidden-BxOQW0OL.js";import"./useLabels-C6qEHWqP.js";import"./useButton-BpARo-s5.js";import"./search-D0F5ynZp.js";import"./createLucideIcon-4ZkmUN36.js";import"./Button-D11DdKki.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0q1zQmh.js";import"./VisuallyHidden-ClSljMM6.js";import"./x-Dx2ju_wc.js";import"./FieldError-CeFSAGIb.js";import"./Text-CdSUS3L4.js";import"./Text-BVf8H_wM.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
