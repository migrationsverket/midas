import{S as s}from"./SearchField-TM4DEkuO.js";import"./iframe-BGjWmNYx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CvsrIW6T.js";import"./utils-D7zTzvCU.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CE3BdgCR.js";import"./useFocusRing-Cv1kbpvb.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./useFormValidation-CXGeViRH.js";import"./useField-SHucniBA.js";import"./Button-XSu45boX.js";import"./Hidden-lp8KiHTo.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./search-CLM-SP_7.js";import"./createLucideIcon-Df5FTM0K.js";import"./ClearButton-BHqCbk4O.js";import"./Button-Dyr0yQHX.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B-DKJptC.js";import"./VisuallyHidden-ClgLzi2l.js";import"./x-Cbv80ht6.js";import"./FieldError-Wp4mauGJ.js";import"./Text-tIbPkLw7.js";import"./Text-B9EMTagt.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
