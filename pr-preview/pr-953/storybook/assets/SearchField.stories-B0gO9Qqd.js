import{S as s}from"./SearchField-DTdcH3Qx.js";import"./iframe-BVVtlJUS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7re4kOBW.js";import"./utils-CgRkp8Dv.js";import"./useLocalizedStringFormatter-CY4FriNq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dob3aN2t.js";import"./useFocusRing-2PI7p2oX.js";import"./index-B4gk8gxR.js";import"./index-DAR-rwum.js";import"./useFormValidation-Bb3h5Nuh.js";import"./useField-BkHJutMe.js";import"./Button-Z5Xlbqol.js";import"./Hidden-BzUm3PMd.js";import"./useLabels-C9j3vCOF.js";import"./useButton-C4VZnzw0.js";import"./search-Bgalhe4H.js";import"./createLucideIcon-C3maNRZb.js";import"./Button-DhG_Cd2F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DqjGsQpT.js";import"./VisuallyHidden-DXc6XDNY.js";import"./x-BSw8RQ3b.js";import"./FieldError-CuKNWz7a.js";import"./Text-BizgQ59x.js";import"./Text-2vkSLQm7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
