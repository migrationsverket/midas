import{S as s}from"./SearchField-lbxF5zk2.js";import"./iframe-CTvpKBSK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-66bebSHu.js";import"./utils-BiLGnBBz.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D2Jr83z3.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./useFormValidation-Chpv9In5.js";import"./useField-BCLlGOHG.js";import"./Button-u0YKTc5k.js";import"./Hidden-DgXsqmZh.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./search-SCi00PnM.js";import"./createLucideIcon-BvYu-wbL.js";import"./ClearButton-CvbebUvY.js";import"./Button-BtfMoIh9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./VisuallyHidden-C1c0ClIs.js";import"./x-CfmXATlG.js";import"./FieldError-BquSn9wl.js";import"./Text-DjtetnZp.js";import"./Text-BI68LSzD.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
