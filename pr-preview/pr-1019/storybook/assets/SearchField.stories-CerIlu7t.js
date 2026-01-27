import{S as s}from"./SearchField-CWareYKX.js";import"./iframe-BBOYsnjU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQ0df-ju.js";import"./utils-j2mhf0J5.js";import"./useLocalizedStringFormatter-CDq5Lh88.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0widOB9.js";import"./useFocusRing-DZUzyHgy.js";import"./index-rPoChojA.js";import"./index-Cf35xK9l.js";import"./useFormValidation-D48nmeiZ.js";import"./useField-LYyOQXPm.js";import"./Button-DDjB2733.js";import"./Hidden-aOpMhQep.js";import"./useLabels-DQMV1_Yc.js";import"./useButton-Ftv_ctu3.js";import"./search-BYYdyhVd.js";import"./createLucideIcon-Ce2Qhn1H.js";import"./ClearButton-CnM_IuXT.js";import"./Button-CyQgtJ3P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1Kiw22P.js";import"./VisuallyHidden-CPK8rn6e.js";import"./x-Dqyc0lO4.js";import"./FieldError-DVSJgZFJ.js";import"./Text-CZBI6ZSH.js";import"./Text-DzOdr-51.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
