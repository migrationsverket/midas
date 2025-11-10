import{S as s}from"./SearchField-BkJp79xG.js";import"./iframe-1jCyVKTR.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-RwIOrToL.js";import"./utils-DZdh9xsP.js";import"./useLocalizedStringFormatter-C9x2tCAa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CwxxDrod.js";import"./useFocusRing-B8WDFENw.js";import"./index-Cfj3l_Mf.js";import"./index-O3MJa0Qz.js";import"./useFormValidation-CL9V_rGx.js";import"./useField-Aew03gCS.js";import"./Button-BBbyz38O.js";import"./Hidden-BeQfraet.js";import"./useLabels-BVuAqKI_.js";import"./useButton-BuSAxlcg.js";import"./search-CsAvzDCg.js";import"./createLucideIcon-D-FkpzSt.js";import"./Button-DaHqgoFJ.js";import"./Button.module-CtQ1deO8.js";import"./x-DMprJIeA.js";import"./useLocalizedStringFormatter-CWCUolMa.js";import"./FieldError-D9fldg2V.js";import"./Text-FQYgckzw.js";import"./Text-CLTLikYF.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
