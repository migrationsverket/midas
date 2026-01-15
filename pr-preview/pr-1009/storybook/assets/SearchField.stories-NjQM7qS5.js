import{S as s}from"./SearchField-CWdFVizq.js";import"./iframe-D7pn65HD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DyV8n_wu.js";import"./utils-gkLu2Q80.js";import"./useLocalizedStringFormatter-DbF5DsVQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DqcRNVB_.js";import"./useFocusRing-BRQN0HVs.js";import"./index-B0zKztvS.js";import"./index-CABcdHYW.js";import"./useFormValidation-dgDhPSYS.js";import"./useField-BMGySlzI.js";import"./Button--lRgnSCB.js";import"./Hidden-CqqsxRSw.js";import"./useLabels-e3eqZc1V.js";import"./useButton-BtvyslLl.js";import"./search-BvcQH4Sa.js";import"./createLucideIcon-B4o84bfn.js";import"./Button-_4N2Tdvz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CFmBjBoC.js";import"./VisuallyHidden-Cjr7sTkY.js";import"./x-CSD6cUrJ.js";import"./FieldError-CDBZhnFy.js";import"./Text-CMQOGgUM.js";import"./Text-BoHU8OeY.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
