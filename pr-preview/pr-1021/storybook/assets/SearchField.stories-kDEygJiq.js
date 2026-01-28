import{S as s}from"./SearchField-C3KK-gm5.js";import"./iframe-aMoIVDeR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJ6hso62.js";import"./utils-CFxRfzzc.js";import"./useLocalizedStringFormatter-A5HFr0Ya.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-o81z82YN.js";import"./useFocusRing-DlrmdZPs.js";import"./index-DBBzqi9Z.js";import"./index-srgIOSWI.js";import"./useFormValidation-BsUJefcp.js";import"./useField-OOJAedGL.js";import"./Button-DiQ7-ULm.js";import"./Hidden-B6fG37sh.js";import"./useLabels-akov2npX.js";import"./useButton-CkIEgbAm.js";import"./search-DTBk4qPI.js";import"./createLucideIcon-Bt3zLjO1.js";import"./ClearButton-CxpekBX5.js";import"./Button-CD86P0d9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-L8R7Fq.js";import"./VisuallyHidden-DdIi_TPZ.js";import"./x-7JaraCCs.js";import"./FieldError-D2QhEaby.js";import"./Text-p3-kB6K4.js";import"./Text-BbmTTQ6z.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
