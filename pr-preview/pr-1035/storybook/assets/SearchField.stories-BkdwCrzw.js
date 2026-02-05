import{S as s}from"./SearchField-CjLjVDOm.js";import"./iframe-BXL4RoxG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ChSuwDfw.js";import"./utils-Bf3izy9L.js";import"./useLocalizedStringFormatter-DY1IbHJs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYJLKcrM.js";import"./useFocusRing-CFKLadQc.js";import"./index-ChlQ7hUJ.js";import"./index-CVQMxt-B.js";import"./useFormValidation-FE3EiiUh.js";import"./useField-BUvuIleD.js";import"./Button-D88wRmT9.js";import"./Hidden-Budc0me5.js";import"./useLabels-ZcBmnljP.js";import"./useButton-Q5MxpZ0c.js";import"./search-BdgpnvMY.js";import"./createLucideIcon-Bt1FuSTk.js";import"./ClearButton-BpYDho6t.js";import"./Button-BPaLzN_1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLNeHttS.js";import"./VisuallyHidden-BNHdTIn0.js";import"./x-CVk2stH6.js";import"./FieldError-7f6dpKUo.js";import"./Text-D5IutxNH.js";import"./Text-CdHl8okE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
