import{S as s}from"./SearchField-CXJnUT-N.js";import"./iframe-2wgIB9ov.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DYBM3KFS.js";import"./utils-DaRf50JR.js";import"./useLocalizedStringFormatter-Db4gfQ33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-c0kwZqwX.js";import"./useFocusRing-525HP1g7.js";import"./index-CD0ir1m5.js";import"./index-lBQIxa3z.js";import"./useFormValidation-Ccje1EM4.js";import"./useField-CuBOwm92.js";import"./Button-D4zAQrcJ.js";import"./Hidden-CBQkbk4i.js";import"./useLabels-DWZ8l6Oh.js";import"./useButton-C73Zvfrc.js";import"./search-BCYqR226.js";import"./createLucideIcon-DIWvrCmu.js";import"./Button-DFwCR_3-.js";import"./Button.module-CtQ1deO8.js";import"./x-Dpgehcgt.js";import"./useLocalizedStringFormatter-BM6R8_tu.js";import"./FieldError-wYXk6SIy.js";import"./Text-aNiv-eLR.js";import"./Text-B1FXYo5G.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
