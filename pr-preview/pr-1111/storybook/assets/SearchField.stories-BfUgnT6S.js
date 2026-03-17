import{S as s}from"./SearchField-oAuIpKR-.js";import"./iframe-ZeXYQ1RW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BI4OK_uN.js";import"./utils-DkAMXJPn.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bd1NJOJF.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./useFormValidation-CleU6jt7.js";import"./useField-CTy-1_Zz.js";import"./Button-B1pz6NZE.js";import"./Hidden-Cw1xIodo.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./search-tiZTt0Qb.js";import"./createLucideIcon-NOl_qKmM.js";import"./ClearButton-CuvAcj86.js";import"./x-jvAHOITw.js";import"./Button-D_9dtB_J.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./VisuallyHidden-D_TH7fZb.js";import"./FieldError-Bowa5wqw.js";import"./Text-Dve1S3pg.js";import"./Text-DNs8wtir.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
