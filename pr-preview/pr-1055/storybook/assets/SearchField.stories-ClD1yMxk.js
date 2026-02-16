import{S as s}from"./SearchField-DtQQSSsG.js";import"./iframe-kL-Bl9su.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CCkzC0Tp.js";import"./utils-DSQv1swn.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChLbIJms.js";import"./useFocusRing-B8gpdiRk.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./useFormValidation-BcwglGOS.js";import"./useField-sDMwGprV.js";import"./Button-C3MzL_5z.js";import"./Hidden-fIPo0I_L.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./search-CWgAUWmQ.js";import"./createLucideIcon-DoVMa1bS.js";import"./ClearButton-B-6uShvj.js";import"./Button-BrThkrNe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./x-NxB05lgA.js";import"./FieldError-CmUNHjx9.js";import"./Text-Csjavnr3.js";import"./Text-Brx6h1NF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
