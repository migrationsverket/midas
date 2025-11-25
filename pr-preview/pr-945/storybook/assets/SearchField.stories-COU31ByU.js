import{S as s}from"./SearchField-DkF5f_f9.js";import"./iframe-CSVmyJ9R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DTJWCz0V.js";import"./utils-CPqOETBM.js";import"./useLocalizedStringFormatter-B8c5ZoQv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D75bFy9u.js";import"./useFocusRing-BrPdNnBS.js";import"./index-E587h0fs.js";import"./index-CVwQ3yNk.js";import"./useFormValidation-DspL0P0U.js";import"./useField-KTNK2PUR.js";import"./Button-BQXPo15e.js";import"./Hidden-B-TeHCBv.js";import"./useLabels-D1ztbA9R.js";import"./useButton-DFFPcWTi.js";import"./search-D7G9ywIB.js";import"./createLucideIcon-CvwfQw68.js";import"./Button-BmI8BsBm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DjLs2VzN.js";import"./VisuallyHidden-CSK4owg4.js";import"./x-CjC83yIY.js";import"./FieldError-DHYVenvj.js";import"./Text-C8HgXGPu.js";import"./Text-BsEzx2Ek.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
