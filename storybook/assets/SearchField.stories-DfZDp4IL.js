import{S as s}from"./SearchField-DS6mCPi1.js";import"./iframe-CQYEjdz_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-08K4jq70.js";import"./utils-CsTu9ikS.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUnPMd7N.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./useFormValidation-CFo8G_qj.js";import"./useField-6eaY4RPJ.js";import"./Button-CvToZ011.js";import"./Hidden-4CIPvtTu.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./search-B66k2-Kl.js";import"./createLucideIcon-B-IrTLpd.js";import"./ClearButton-DyK3W7B1.js";import"./Button-Cg9zZZ7J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./VisuallyHidden-CRBj22op.js";import"./x-BbpD6m52.js";import"./FieldError-DI5FZj2R.js";import"./Text-D3mzemNj.js";import"./Text-C9HsrLdv.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
