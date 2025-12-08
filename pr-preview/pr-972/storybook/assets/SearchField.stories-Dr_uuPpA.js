import{S as s}from"./SearchField-NTKUblvL.js";import"./iframe-CcqIJJ9I.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DFeihBKm.js";import"./utils-CY4Fu9XG.js";import"./useLocalizedStringFormatter-C2Q5ZqZK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CDwkbzfc.js";import"./useFocusRing-C6yLInR-.js";import"./index-BZYrye5E.js";import"./index-Dk_EVKVa.js";import"./useFormValidation-DfdnZYhb.js";import"./useField-Dtd65B1y.js";import"./Button-g0SRrwOY.js";import"./Hidden-DoPVqW9a.js";import"./useLabels-BilCN1NI.js";import"./useButton-DY6rqluc.js";import"./search-H1FCbOqw.js";import"./createLucideIcon-Ba6CVsaC.js";import"./Button-Y2MdeHyb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dvdqua-f.js";import"./VisuallyHidden-BbrVFRLR.js";import"./x-CLF4Fkuz.js";import"./FieldError-DCWhyVe8.js";import"./Text-BeMrApc1.js";import"./Text-B2y69JCA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
