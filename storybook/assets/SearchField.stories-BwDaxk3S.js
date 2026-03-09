import{S as s}from"./SearchField-JBLyq6i6.js";import"./iframe-CZ4pIpgM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DloD9_PZ.js";import"./utils-BKAqyTPp.js";import"./useLocalizedStringFormatter-BPfhaoOQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-sYR35YUp.js";import"./useFocusRing-CC14X5Ag.js";import"./index--Vrw-Eoy.js";import"./index-DhnAxJyh.js";import"./useFormValidation-B2pDzUXQ.js";import"./useField-3e9SwQn9.js";import"./Button-Bzfpb552.js";import"./Hidden-eVbRi0Ga.js";import"./useLabels-Cqjt9RJx.js";import"./useButton-BLx5WIcY.js";import"./search-BSUf3TQF.js";import"./createLucideIcon-NleWcVUk.js";import"./ClearButton-CYG69ZpA.js";import"./Button-BsOyBqD3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-2rZubXmi.js";import"./VisuallyHidden-B6O2-97V.js";import"./x-DkZopY_b.js";import"./FieldError-CAfz9m6m.js";import"./Text-BQl4iJz3.js";import"./Text-DIdbWBzS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
