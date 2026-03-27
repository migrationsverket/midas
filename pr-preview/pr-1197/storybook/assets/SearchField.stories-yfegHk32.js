import{S as i}from"./SearchField-DgIJkAny.js";import"./iframe-BwW6Fqvd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bghr1fcB.js";import"./clsx-B-dksMZM.js";import"./Form-C0ycgpGF.js";import"./useFocusRing-B8ItjY_Y.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./Input-p9o3LqS3.js";import"./Hidden-DOVwj0BP.js";import"./Button-zWxdU5Zd.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./FieldError-DG2mBVdw.js";import"./Text-CYDu8Dn_.js";import"./clsx-Ciqy0D92.js";import"./Text-D0nO-HBI.js";import"./RSPContexts-Bh9oL_fS.js";import"./Group-BXB9YxFU.js";import"./useControlledState-DGQCfKNy.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrtQoaTV.js";import"./useField-Cv7gnOSH.js";import"./TextField.module-DdivwlC8.js";import"./search-C8-PJggO.js";import"./createLucideIcon-baXbygoM.js";import"./x-BceaA5bl.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Button-D29dOr6P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6rJm-kLH.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
