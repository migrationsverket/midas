import{S as s}from"./SearchField-DqQf0mF6.js";import"./iframe-D2u6fcmC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CPfd4NNf.js";import"./utils-CiNycYhM.js";import"./useLocalizedStringFormatter-DFmOREZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKmwebjx.js";import"./useFocusRing-CavRUvhE.js";import"./index-1mTxR35t.js";import"./index-T3sg1FKY.js";import"./useFormValidation-BmH9m2e6.js";import"./useField-BoDQD0-h.js";import"./Button-CpbQDwOR.js";import"./Hidden-DwkU7rJe.js";import"./useLabels-BtEDdJzZ.js";import"./useButton-B2yDlT2I.js";import"./search-d_-Cqh_n.js";import"./createLucideIcon-COpdxC33.js";import"./ClearButton-6zsbHhbU.js";import"./Button-D7MCEwkf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7M_lV_b.js";import"./VisuallyHidden-DOAfwi1g.js";import"./x-ByX5semR.js";import"./FieldError-yn2RLFgz.js";import"./Text-BiuO3ebU.js";import"./Text-D2yfXHQm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
