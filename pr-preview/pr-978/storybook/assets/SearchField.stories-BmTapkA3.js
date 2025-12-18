import{S as s}from"./SearchField-DXLgicK8.js";import"./iframe-5gY8uiZp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D5A6R61M.js";import"./utils-DECZjV3X.js";import"./useLocalizedStringFormatter-DZ0rZsWI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B7b4wiTP.js";import"./useFocusRing-Boel07eM.js";import"./index-TGVZlA7L.js";import"./index-CLK4xEXj.js";import"./useFormValidation-15BdVQVt.js";import"./useField-D1C0IxMP.js";import"./Button-CTvN5iBJ.js";import"./Hidden-CJ0_VQq2.js";import"./useLabels-Di96fV3Q.js";import"./useButton-4X48dbK-.js";import"./search-VXfKoScS.js";import"./createLucideIcon-B1QC88uT.js";import"./Button-VUiFd7fg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_Dnj8gb8.js";import"./VisuallyHidden-CoBV_pcx.js";import"./x-BqJtwxOC.js";import"./FieldError-Cj22ksHa.js";import"./Text-DX1n20pB.js";import"./Text-C5V7OBlJ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
