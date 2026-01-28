import{S as s}from"./SearchField-B_SJDW4H.js";import"./iframe-BUyS91gW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pY5KefEA.js";import"./utils-DtC5DJlv.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfyVSh_-.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./useFormValidation-C60WEHmq.js";import"./useField-DOrPhly4.js";import"./Button-BFrQimfv.js";import"./Hidden-DgRACCJZ.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./search-BglVZkn4.js";import"./createLucideIcon-B-WbV5NM.js";import"./ClearButton-C_sGdIZ0.js";import"./Button-Fgf1rOG6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./VisuallyHidden-DWShOfIn.js";import"./x-DZYUY6bl.js";import"./FieldError-CFfhbF8H.js";import"./Text-BPqpCryx.js";import"./Text-COkIx5pS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
