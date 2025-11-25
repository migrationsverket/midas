import{S as s}from"./SearchField-DmP8I9FH.js";import"./iframe-Bgec6LZ9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnXTl3Pc.js";import"./utils-DIIQIBM-.js";import"./useLocalizedStringFormatter-BWOfcfGM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPNdYXx9.js";import"./useFocusRing-B1D5indB.js";import"./index-Ceczni1n.js";import"./index-BeLA2EJf.js";import"./useFormValidation-CnB0lgVV.js";import"./useField-DLcs6KVB.js";import"./Button-_JSPr_Qd.js";import"./Hidden-ClpDugI3.js";import"./useLabels-DcdCSdhe.js";import"./useButton-CXyVv40K.js";import"./search-D-2sh_jG.js";import"./createLucideIcon-D_CGqgCc.js";import"./Button-DzNsYof3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DBY3ly5_.js";import"./VisuallyHidden-U53ARRrF.js";import"./x-k0_8W05y.js";import"./FieldError-6CR-SQTz.js";import"./Text-VdO0wtcg.js";import"./Text-ChsjEId-.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
