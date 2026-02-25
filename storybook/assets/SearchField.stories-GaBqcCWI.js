import{S as s}from"./SearchField-BgFVb-MG.js";import"./iframe--7ouzhCF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-WRN65Jvl.js";import"./utils-CCrPRXFd.js";import"./useLocalizedStringFormatter-BqAS8Gzt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkQlwemA.js";import"./useFocusRing-VMBdHrfo.js";import"./index-7GfLKj_c.js";import"./index-C-Az-PCO.js";import"./useFormValidation-CNRC9kel.js";import"./useField-IWBX-r2S.js";import"./Button-MMOZkiqP.js";import"./Hidden-DnK2cKnr.js";import"./useLabels-D2JG2NHF.js";import"./useButton-DUghFOmd.js";import"./search-BO_XoebC.js";import"./createLucideIcon-DMRXokTE.js";import"./ClearButton-D5Exhh2q.js";import"./Button-D_kviF_H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiDiFH31.js";import"./VisuallyHidden-DZP5hbvT.js";import"./x-ik0duNRE.js";import"./FieldError-C9fNdBcq.js";import"./Text-_ylAafRx.js";import"./Text-Dt6EjG80.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
