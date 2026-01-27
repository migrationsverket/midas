import{S as s}from"./SearchField-C1GvzPH-.js";import"./iframe-C1JT45wI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1gHrzrW8.js";import"./utils-B3mA2zMb.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6AtaOWLD.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./useFormValidation-DlaAewcn.js";import"./useField-ClfrWth6.js";import"./Button-iYwZhBmL.js";import"./Hidden-B97wECjB.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./search-BLi4Uym9.js";import"./createLucideIcon-DjE8uKST.js";import"./ClearButton-fGRPrYRi.js";import"./Button-Cvr3NX4g.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./VisuallyHidden-CExqZ3An.js";import"./x-BEtEw_xa.js";import"./FieldError-CRFea137.js";import"./Text-Do4Hf0SC.js";import"./Text-BnVMb_Eh.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
