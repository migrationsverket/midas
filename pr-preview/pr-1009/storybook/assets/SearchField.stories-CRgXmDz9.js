import{S as s}from"./SearchField-DRTN3Ar6.js";import"./iframe-CSIMALEo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-gQFNofvS.js";import"./utils-BhFaZXMS.js";import"./useLocalizedStringFormatter-B9G0gFgf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OpsHCfDn.js";import"./useFocusRing-YF8rxIXT.js";import"./index-Bg0fwusk.js";import"./index-Cko5PELv.js";import"./useFormValidation-DdycJShS.js";import"./useField-xRcIPMLR.js";import"./Button-URk4kmEe.js";import"./Hidden-Bzf4_Pb3.js";import"./useLabels-CPdLbOLr.js";import"./useButton-BV6dPOCz.js";import"./search-c77TNP_3.js";import"./createLucideIcon-DF3n-g_Z.js";import"./Button-DVHbJF0m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-jyLw659G.js";import"./VisuallyHidden-De97aW8X.js";import"./x-DyzJKXcb.js";import"./FieldError-QzWPofCp.js";import"./Text-CgjfMSMX.js";import"./Text-DAP7-Chs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
