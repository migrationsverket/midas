import{S as s}from"./SearchField-BMJfryv3.js";import"./iframe-BhyhdtXP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dx8jPu5Z.js";import"./utils-CGWlpFgY.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-0yybQNTL.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./useFormValidation-DmOBSjg0.js";import"./useField-CaiZwujr.js";import"./Button-C9H7bBoo.js";import"./Hidden-BdJ24Yzp.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./search-C4Bdj6Pe.js";import"./createLucideIcon-Cz3c_aCr.js";import"./ClearButton-QA5O8Wid.js";import"./Button-RHoYggw3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./VisuallyHidden-C-jWiPOY.js";import"./x-D8pCTRyw.js";import"./FieldError-DCeVhp7S.js";import"./Text-B-Mbjzpq.js";import"./Text-jDKA3oAD.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
