import{S as s}from"./SearchField-CK1eDlOl.js";import"./iframe-CACK1ifN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DCOK662h.js";import"./utils-DrYd9Pqd.js";import"./useLocalizedStringFormatter-D7qp87au.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChcNUG2E.js";import"./useFocusRing-DYoY7B0o.js";import"./index-Cso1iP6f.js";import"./index-RncFtgOS.js";import"./useFormValidation-0NxoFJwH.js";import"./useField-DFHBiafe.js";import"./Button-J7gLD4uT.js";import"./Hidden-C1FS9acW.js";import"./useLabels-C_najzVY.js";import"./useButton-DYZev9kh.js";import"./search-Cxp7rrAK.js";import"./createLucideIcon-G0rIHLkb.js";import"./Button-BoPq1AVj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AIFce-v4.js";import"./VisuallyHidden-COi0BVk3.js";import"./x-PeF9jKEP.js";import"./FieldError-Bhe1g_YD.js";import"./Text-BnT-eFzO.js";import"./Text-CRhY20oU.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
