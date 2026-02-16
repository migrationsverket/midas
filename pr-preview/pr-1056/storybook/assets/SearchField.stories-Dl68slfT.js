import{S as s}from"./SearchField-CngooQ_o.js";import"./iframe-DJUtdHwV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1jOx-dc.js";import"./utils-D4RE6qhK.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DI7yS5us.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./useFormValidation-DRqFyOxo.js";import"./useField-0I64IgUK.js";import"./Button-bQvo04EJ.js";import"./Hidden-DPRRZP9g.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./search-7CZUHE_u.js";import"./createLucideIcon-SxhoPmH3.js";import"./ClearButton-D3uF1VqX.js";import"./Button-CThTpwQ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./VisuallyHidden-m39w7boQ.js";import"./x-BHtKcay4.js";import"./FieldError-C9oMwrfJ.js";import"./Text-B58uuGYq.js";import"./Text-Dl70Vupn.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
