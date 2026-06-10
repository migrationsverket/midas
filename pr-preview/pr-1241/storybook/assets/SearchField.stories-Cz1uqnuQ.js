import{S as i}from"./SearchField-LKSwONZt.js";import"./iframe-y1u__L-8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Form-CePOgkA4.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./Input-Duc0d2AL.js";import"./Hidden-DTarpjft.js";import"./Button-Bmc3JOkJ.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./FieldError-B3ZCLrVr.js";import"./Text-LCGDIWeJ.js";import"./clsx-Ciqy0D92.js";import"./Text-DI19gscT.js";import"./RSPContexts-BzgKoUFY.js";import"./Group-rrSAIQbm.js";import"./useControlledState-SL3CCMLy.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-dwu892YK.js";import"./useField-DeQcEKMo.js";import"./TextField.module-DdivwlC8.js";import"./search-NgSuTJjD.js";import"./createLucideIcon-C_M4Trqf.js";import"./x-WeprrzHp.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-vMJRuQeL.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
