import{S as s}from"./SearchField-DWYPiZzO.js";import"./iframe-ccFBI1Zy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BI6Lp7H1.js";import"./utils-BVj3-Cd3.js";import"./useLocalizedStringFormatter-ClaIkQbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-HucvZY4o.js";import"./useFocusRing-C9VQOrA-.js";import"./index-dN5ydD_a.js";import"./index-Dusa60jE.js";import"./useFormValidation-Dse-9b_j.js";import"./useField-Cz6CbKez.js";import"./Button-CEnfx92n.js";import"./Hidden-p0IfrMWZ.js";import"./useLabels-CApjWlXB.js";import"./useButton-DsE6FkYL.js";import"./search-BDFOBwet.js";import"./createLucideIcon-puHPRiC0.js";import"./ClearButton-CogcgNak.js";import"./Button-BJwJ6DIM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAkizOqJ.js";import"./VisuallyHidden-CfF4nhmt.js";import"./x-TQxST23O.js";import"./FieldError-CVxfd_t0.js";import"./Text-mV_idVq_.js";import"./Text-CmBwCO8i.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
