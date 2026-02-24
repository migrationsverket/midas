import{S as s}from"./SearchField-BpWxyiTs.js";import"./iframe-BgTJCWOi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7UzvBFe4.js";import"./utils-bx0JNicM.js";import"./useLocalizedStringFormatter-DzvgYJWh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BC76DPou.js";import"./useFocusRing-CQGFmCQM.js";import"./index-Di0LCwPl.js";import"./index-nvK8JwcD.js";import"./useFormValidation-DdQ-XZ_w.js";import"./useField-G_6qpuwG.js";import"./Button-DFN5fdXi.js";import"./Hidden-1E0jU_sg.js";import"./useLabels-C6Pff7p0.js";import"./useButton-RwbbtEdP.js";import"./search-DLPbmQjQ.js";import"./createLucideIcon-BMuWalIG.js";import"./ClearButton-DnN07v5W.js";import"./Button-CUni_Rhy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DmYhpSJF.js";import"./VisuallyHidden-COxax3nI.js";import"./x-seHATWdx.js";import"./FieldError-D1yKmAxB.js";import"./Text-BPwtGfCt.js";import"./Text-D9p-rhNz.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
