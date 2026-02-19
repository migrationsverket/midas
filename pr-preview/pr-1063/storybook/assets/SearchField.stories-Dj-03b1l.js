import{S as s}from"./SearchField-BF0gw6lK.js";import"./iframe-DFBAwU5t.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C4smYPng.js";import"./utils-08_GEW0N.js";import"./useLocalizedStringFormatter-D1JI22qo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-K9OcgO_z.js";import"./useFocusRing-B1-pNOdJ.js";import"./index-BvmdiSuy.js";import"./index-B5Eep4lh.js";import"./useFormValidation-DjiW17M6.js";import"./useField-Bnf9URlm.js";import"./Button-DwaTUIba.js";import"./Hidden-CtJEIX9A.js";import"./useLabels-VOQ-WGC9.js";import"./useButton-BgWyJ-L0.js";import"./search-YTu8i7yQ.js";import"./createLucideIcon-8UkP-gNy.js";import"./ClearButton-CGmLIGwD.js";import"./Button-BcXH9DHh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CG5pfhDM.js";import"./VisuallyHidden-BEFipPde.js";import"./x-sbx_BOPL.js";import"./FieldError-Co7gTVHK.js";import"./Text-CDXpFHUP.js";import"./Text-D767DiYA.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
