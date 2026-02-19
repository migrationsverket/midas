import{S as s}from"./SearchField-gmY0-FFi.js";import"./iframe-Yvl_hQp1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DyHxCAdy.js";import"./utils-DYWQ1ZEX.js";import"./useLocalizedStringFormatter-BuxVSRdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cff4XoDp.js";import"./useFocusRing-B03ZjHpo.js";import"./index-DOjFyTO0.js";import"./index-ClsdGyI8.js";import"./useFormValidation-6h1IEFOG.js";import"./useField-CjYuO0yz.js";import"./Button-BJxa14qf.js";import"./Hidden-BepZ5jXl.js";import"./useLabels-ChKgIqy0.js";import"./useButton-Zt3QI29N.js";import"./search-CWXqVLMv.js";import"./createLucideIcon-B92K0nKO.js";import"./ClearButton-BtWmDUUa.js";import"./Button-B2x0GTnC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DBNxzRKc.js";import"./VisuallyHidden-CLE8P4Kj.js";import"./x-Bk4hikID.js";import"./FieldError-B1qUY16S.js";import"./Text-BVqhKK-w.js";import"./Text-C7yRWRnj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
