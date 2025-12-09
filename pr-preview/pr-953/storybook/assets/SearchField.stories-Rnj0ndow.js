import{S as s}from"./SearchField-Bc5xeLf0.js";import"./iframe-gVQjPewL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoTiLeJu.js";import"./utils-BAvziVQG.js";import"./useLocalizedStringFormatter-CGcpvzuT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CcqmoEQl.js";import"./useFocusRing-0gBgE6N-.js";import"./index-ndXt9Dvv.js";import"./index-Dx6mXqSO.js";import"./useFormValidation-DAmYnyK_.js";import"./useField-RqV4mzqX.js";import"./Button-omCgwxDS.js";import"./Hidden-B8SjbVEJ.js";import"./useLabels-BGa4lReX.js";import"./useButton-ChaUza1w.js";import"./search-CIZXZttc.js";import"./createLucideIcon-BtoTmTD-.js";import"./Button-DzhpmtPX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgH8u-_G.js";import"./VisuallyHidden-DHQLCAYC.js";import"./x-CTE2CY3u.js";import"./FieldError-vZRBOpgn.js";import"./Text-D78Bknv4.js";import"./Text-_RjAag-Y.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
