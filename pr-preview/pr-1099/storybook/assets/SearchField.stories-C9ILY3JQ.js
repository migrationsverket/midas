import{S as s}from"./SearchField-BNi6qQNq.js";import"./iframe-COAE3Z9t.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CTgjAYDB.js";import"./utils-CJTCHx3j.js";import"./useLocalizedStringFormatter-DNGn7vgv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BrtqHMTO.js";import"./useFocusRing-DgA4QWCK.js";import"./index-B8ayM9Q4.js";import"./index-D6Rzgd1u.js";import"./useFormValidation-Ci8Vocq6.js";import"./useField-DGHNroJj.js";import"./Button-DkXMbdmz.js";import"./Hidden-DT0_4oHH.js";import"./useLabels-BGror0wH.js";import"./useButton-CNbG0xHv.js";import"./search-Bkbcrx3s.js";import"./createLucideIcon-DDrtG7WW.js";import"./ClearButton-kS50iEJj.js";import"./Button-Bowambor.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D1UulV0U.js";import"./VisuallyHidden-Wni-KnVe.js";import"./x-3pGmhthR.js";import"./FieldError-BUClrU9H.js";import"./Text-CHPBuoo7.js";import"./Text-D5jwfrrb.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
