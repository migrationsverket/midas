import{S as i}from"./SearchField-CNp4PLPO.js";import"./iframe-pPxe0wf0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9dfa99f.js";import"./clsx-B-dksMZM.js";import"./Form-C0IhYbR-.js";import"./useFocusRing-Brybz-Mb.js";import"./index-DfEuJvHS.js";import"./index-pyYMLEYk.js";import"./Input-BSGVEsK2.js";import"./Hidden-BcuSkgl5.js";import"./Button-C0xfSFPn.js";import"./useLabel-CL1tYCOJ.js";import"./useLabels-CMOJ4jYS.js";import"./useButton-BKxgzcHi.js";import"./FieldError-CL01H_85.js";import"./Text-CfRTLfl7.js";import"./clsx-Ciqy0D92.js";import"./Text-DnWwzkAf.js";import"./RSPContexts-B0SlvVRf.js";import"./Group-CnOF1J4U.js";import"./useControlledState-DALrvKda.js";import"./useLocalizedStringFormatter-BNao4Mdf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CIELF70r.js";import"./useField-D4Zx8Ibn.js";import"./TextField.module-DdivwlC8.js";import"./search-BzkylCNf.js";import"./createLucideIcon-DWvekaMf.js";import"./x-Ck7RLK17.js";import"./useLocalizedStringFormatter-BLFE94iF.js";import"./Button-KC2D_O3S.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ByZgoMRK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
