import{S as s}from"./SearchField-Z5hb_k-6.js";import"./iframe-C5qknig8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DinrOT-z.js";import"./utils-DKdcqyb7.js";import"./useLocalizedStringFormatter-CDMy5frs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cfnv4I2f.js";import"./useFocusRing-CXDO28rF.js";import"./index-DQIQ0FrH.js";import"./index-DiIH_Ibi.js";import"./useFormValidation-noWX4_Dc.js";import"./useField-CjBYQtS8.js";import"./Button-D58d_jbz.js";import"./Hidden-eDXD45wQ.js";import"./useLabels-COhO-YfG.js";import"./useButton-BSV9csQJ.js";import"./search-Du-H-Hco.js";import"./createLucideIcon-Cxw0HGiz.js";import"./Button-DU43-mcq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxThFscc.js";import"./VisuallyHidden-Cdnh5iDE.js";import"./x-C7TGMSzB.js";import"./FieldError-BDCaPSBM.js";import"./Text-BittgrxB.js";import"./Text-BKPtXaGU.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
