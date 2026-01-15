import{S as s}from"./SearchField-CAqz6SAD.js";import"./iframe-CwO_vEig.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRDDwNe3.js";import"./utils-Dcyt8KFL.js";import"./useLocalizedStringFormatter-BgGLDAJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-gEBWibuA.js";import"./useFocusRing-DzT9pjjg.js";import"./index-flraatrJ.js";import"./index-Dn24hxdf.js";import"./useFormValidation-DHqzGwKI.js";import"./useField-BHh1ZKOn.js";import"./Button-Y-0P3U6L.js";import"./Hidden-BSz-TAr8.js";import"./useLabels-BOtoWz6H.js";import"./useButton-8AyGm2ZJ.js";import"./search-BHwxB_wR.js";import"./createLucideIcon-2kw6RoTp.js";import"./ClearButton-Cea5uTum.js";import"./Button-DQNtSNmC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5Wm0lTx.js";import"./VisuallyHidden-iIY1n2oT.js";import"./x-ALfYQzAP.js";import"./FieldError-DpHlxz7t.js";import"./Text-D3llpeIz.js";import"./Text-DSQgPK-U.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
