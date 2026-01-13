import{S as s}from"./SearchField-Cw2D3dXw.js";import"./iframe-CZTdAuLL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CG6WOxF-.js";import"./utils-GGwn7RiQ.js";import"./useLocalizedStringFormatter-CcV7KYjT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B9Jzafy-.js";import"./useFocusRing-BSU_jsuo.js";import"./index-CbuYzQrS.js";import"./index-Dy_KSJtF.js";import"./useFormValidation-JbXxfkzx.js";import"./useField-NQyyqEGl.js";import"./Button-DKjLxueu.js";import"./Hidden-BdpD47Oa.js";import"./useLabels-BNcETZqg.js";import"./useButton-DXw3P5Be.js";import"./search-DBIP7X7b.js";import"./createLucideIcon-BlxvcGuc.js";import"./Button--pbAGE4c.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-uEk36w.js";import"./VisuallyHidden-O6FFlbhO.js";import"./x-CEAUK25F.js";import"./FieldError-BY6a5paY.js";import"./Text-Dvj4eqEd.js";import"./Text-DZZVuCM0.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
