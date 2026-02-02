import{S as s}from"./SearchField-GRT9EOEg.js";import"./iframe-BhBYd-yz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BoIGYg0G.js";import"./utils-dKiMTOip.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJyMp3Ou.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./useFormValidation-B4ppQ1b7.js";import"./useField-CGcAJZ4v.js";import"./Button-BahhSbHm.js";import"./Hidden-rBTlH4Hd.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./search-DiNovcvj.js";import"./createLucideIcon-C3sGvf5y.js";import"./ClearButton-D7r9ZbuX.js";import"./Button-CltQ2OUe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./VisuallyHidden-C_umXD1b.js";import"./x-CK6S_-0Q.js";import"./FieldError-6GseZL7F.js";import"./Text-Cnf9RaEJ.js";import"./Text-DPMgLSbx.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
