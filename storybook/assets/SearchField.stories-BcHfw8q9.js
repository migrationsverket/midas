import{S as s}from"./SearchField-CmMyRuT6.js";import"./iframe-Bs8KTy6C.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6XUuECgK.js";import"./utils-7Wht2g-Y.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DrruEHXD.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./useFormValidation-knURiIi0.js";import"./useField-Ccklh0cv.js";import"./Button-CxAHhwgQ.js";import"./Hidden-BrvGFfZa.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./search-BU4QLrgm.js";import"./createLucideIcon-TcTXJfKq.js";import"./ClearButton-CWo1ZXdF.js";import"./x-DmyzL7jy.js";import"./Button-hEmbppXg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./VisuallyHidden-BBTIfzW0.js";import"./FieldError-C99gwkco.js";import"./Text-Is5sK9kM.js";import"./Text-BoHNsdRj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
