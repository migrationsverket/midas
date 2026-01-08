import{S as s}from"./SearchField-Pz2_VITv.js";import"./iframe-Di032A-a.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DwpgrxVp.js";import"./utils-BJxOcxIc.js";import"./useLocalizedStringFormatter-BzuFEIom.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSrJ97JN.js";import"./useFocusRing-BEKzggJ1.js";import"./index-CCl7obIv.js";import"./index-FnGCBODv.js";import"./useFormValidation-Bz8g9pwD.js";import"./useField-BIsrXDBc.js";import"./Button-BX9DRAn2.js";import"./Hidden-DxXb6fAE.js";import"./useLabels-CfOSYcsl.js";import"./useButton-DKb25YL9.js";import"./search-DkRHlJ_G.js";import"./createLucideIcon-CaCVZ628.js";import"./ClearButton-idAKz8nd.js";import"./Button-Cil7mUi6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tbWfEf8y.js";import"./VisuallyHidden-D_sjnnJP.js";import"./x-DaCt_Qe9.js";import"./FieldError-CxIoYGIw.js";import"./Text-DkJdkbXM.js";import"./Text-BDBd8d6g.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
