import{S as s}from"./SearchField-CTho-x4D.js";import"./iframe-Cjj-T_WN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cm5wADKy.js";import"./utils-CcLbDqYB.js";import"./useLocalizedStringFormatter-GQWeNoaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-D9ILuq.js";import"./useFocusRing-CwecGSw4.js";import"./index-ky7TdNXS.js";import"./index-CxmudArT.js";import"./useFormValidation-CNZdG7U3.js";import"./useField-DFPpGYGR.js";import"./Button-DS8btNoB.js";import"./Hidden-tOizJ85m.js";import"./useLabels-DXBe3XOZ.js";import"./useButton-CHP-KyDJ.js";import"./search-5kl7yKfC.js";import"./createLucideIcon-DY10d_On.js";import"./Button-BCd8eFMO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cqkyr2UN.js";import"./VisuallyHidden-CQopoBEp.js";import"./x-9sVUTFG0.js";import"./FieldError-DCk6hMOV.js";import"./Text-DGl_bXVg.js";import"./Text-gU00Swsd.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
