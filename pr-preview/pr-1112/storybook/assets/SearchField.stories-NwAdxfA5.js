import{S as s}from"./SearchField-C7xoU3ng.js";import"./iframe-CaGxyJQ5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNCDq7j0.js";import"./utils-CVJqKyu4.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxWPDhyK.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./useFormValidation-tvbfblk7.js";import"./useField-DTyiot4U.js";import"./Button-Bn3l1eKL.js";import"./Hidden-BAAaulvK.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./search-DuQmlpWC.js";import"./createLucideIcon-yEXXgYRp.js";import"./ClearButton-yEfcqPfd.js";import"./x-CBNTpHd8.js";import"./Button-SlKntRzd.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./VisuallyHidden-BZzDvx5i.js";import"./FieldError-BBlPKEY6.js";import"./Text-Dtkx7GWh.js";import"./Text-W3mtiTBT.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
