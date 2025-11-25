import{S as s}from"./SearchField-DHU_cD43.js";import"./iframe-DDE2q2jJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DAP_JcuQ.js";import"./utils-a9bcQ49A.js";import"./useLocalizedStringFormatter-Bcbgr9Cy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C29xcouE.js";import"./useFocusRing-B3mA85Wg.js";import"./index-Dbi_VTwK.js";import"./index-lUxujH5K.js";import"./useFormValidation-D-eBHu1L.js";import"./useField-D0gwyaVq.js";import"./Button-HCOG5F4J.js";import"./Hidden-By32gRxz.js";import"./useLabels-DDbF2kwS.js";import"./useButton-fYhOhmoU.js";import"./search-ClPu6lDg.js";import"./createLucideIcon-Bl1-P2Iq.js";import"./Button-Ci_9cuGQ.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B_ZJeHWO.js";import"./VisuallyHidden-CHq8aofl.js";import"./x-CJDAVB57.js";import"./FieldError-DCUvG-Rb.js";import"./Text-Cm5UVo2w.js";import"./Text-BwkS_7yz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
