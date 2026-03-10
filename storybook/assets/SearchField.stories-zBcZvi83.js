import{S as s}from"./SearchField-BcCmyVuS.js";import"./iframe-DEr5LyL9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-h_6fbbYP.js";import"./utils-DwL8W83g.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BSmJX6AI.js";import"./useFocusRing-DOTEBX87.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./useFormValidation-DZc-MdDk.js";import"./useField-DCYWYdaM.js";import"./Button-CBWCdlEK.js";import"./Hidden-NLnfrHdz.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./search-DR7ktsPw.js";import"./createLucideIcon-C7-8qsjG.js";import"./ClearButton-CL4v-WIp.js";import"./Button-BTVP098H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";import"./VisuallyHidden-CwaOa1m7.js";import"./x-HYwHFMJh.js";import"./FieldError-BdNVYVS1.js";import"./Text-DAPFiM_T.js";import"./Text-BfZUAwgB.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
