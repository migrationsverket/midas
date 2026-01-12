import{S as s}from"./SearchField-6sYKTF84.js";import"./iframe-CL23rVh3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZgWFFOj.js";import"./utils-CJ-Ij_R0.js";import"./useLocalizedStringFormatter-C59J0DnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DgT7k1YT.js";import"./useFocusRing-DkzWPJgi.js";import"./index-D2io7692.js";import"./index-Dps1x4rp.js";import"./useFormValidation-D_Pj3Rz9.js";import"./useField-r5PwNz1w.js";import"./Button-UvNdmwwk.js";import"./Hidden-DgDLAcvn.js";import"./useLabels-X6VpgWTq.js";import"./useButton-CPhZ5th1.js";import"./search-Cnowjqry.js";import"./createLucideIcon-CscazfU0.js";import"./Button-BRfjEKmY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_0t_udJ.js";import"./VisuallyHidden-D3iEUUnG.js";import"./x-C4ZhBYeY.js";import"./FieldError-B8XPk18T.js";import"./Text-D1eXcxCX.js";import"./Text-CytNYYuf.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
