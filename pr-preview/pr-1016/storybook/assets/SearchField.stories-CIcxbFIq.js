import{S as s}from"./SearchField-DDhWvsTU.js";import"./iframe-fyvob5pV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-3Trks7iT.js";import"./utils-ZHg57NPT.js";import"./useLocalizedStringFormatter-C-nDJOl1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DqAaCvYO.js";import"./useFocusRing-CefW_QDX.js";import"./index-DeYDX39H.js";import"./index-YdXWAPci.js";import"./useFormValidation-DqszraAo.js";import"./useField-2PAzhLbD.js";import"./Button-Cg4ndPMc.js";import"./Hidden-BUh53Qty.js";import"./useLabels-De8j202R.js";import"./useButton-BWNkf0-B.js";import"./search-CK3tHNtU.js";import"./createLucideIcon-nzmbSsyS.js";import"./ClearButton-D9Hymj5z.js";import"./Button-CyxqdNO0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN8LIDfv.js";import"./VisuallyHidden-B4V5xJ__.js";import"./x-vbaUtfu9.js";import"./FieldError-_70I33O6.js";import"./Text-DgXAg_jZ.js";import"./Text-DkAg-CHN.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
