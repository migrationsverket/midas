import{S as s}from"./SearchField-o7dmtSCI.js";import"./iframe-Bbu1_rOe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C-Y-9GQh.js";import"./utils-DzUH-LiJ.js";import"./useLocalizedStringFormatter-B-Hd1imC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OHXXnM36.js";import"./useFocusRing-DktvivXH.js";import"./index-Gy34tXsq.js";import"./index-BjrDVlup.js";import"./useFormValidation-D_oZTZdh.js";import"./useField-DFlr4vf-.js";import"./Button-BfBJNH2a.js";import"./Hidden-DIc6BQrj.js";import"./useLabels-Dh87fkX6.js";import"./useButton-qeywHX_w.js";import"./search-CXYZ2dUw.js";import"./createLucideIcon-QX8cppGT.js";import"./Button-DiLNuEQM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-7EqjOiW5.js";import"./VisuallyHidden-Bmla7vNF.js";import"./x-ByJYHghm.js";import"./FieldError-CkqjPv4F.js";import"./Text-I1JxsJhT.js";import"./Text-BWc7fTRi.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
