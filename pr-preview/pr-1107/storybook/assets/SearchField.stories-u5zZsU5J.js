import{S as s}from"./SearchField-tG7sKO1V.js";import"./iframe-Bf1Ah5rB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7EdL_Lb.js";import"./utils-DXJEO7_N.js";import"./useLocalizedStringFormatter-tsrFn-Jf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZWCNtOR-.js";import"./useFocusRing-DSdU7aAS.js";import"./index-Dbyil8jF.js";import"./index-CF1c_2Pb.js";import"./useFormValidation-ywlfRHkn.js";import"./useField-DVUjy4Hh.js";import"./Button-CnYQaxyi.js";import"./Hidden-Cbiq0OqP.js";import"./useLabels-B4_UAfBy.js";import"./useButton-DSIJ1kYo.js";import"./search-CMqFc6xX.js";import"./createLucideIcon-upfVu1an.js";import"./ClearButton-Dz2vOPmE.js";import"./x-DLmn2Tbc.js";import"./Button-BY8ZqICl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-8eSi0SDt.js";import"./VisuallyHidden-CeYEhVtC.js";import"./FieldError-BasXWSrV.js";import"./Text-BHf7sfPg.js";import"./Text-DhXeS_DS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
