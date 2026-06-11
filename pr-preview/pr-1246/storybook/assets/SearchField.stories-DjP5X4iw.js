import{S as i}from"./SearchField-B7ncFE0i.js";import"./iframe-hven07mH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./Form-DEztDf84.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./Input-DlJaTotj.js";import"./Hidden-bl0dyrpb.js";import"./Button-b_-88Jdv.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./FieldError-CGNeiPVK.js";import"./Text-BAoIm1rg.js";import"./clsx-Ciqy0D92.js";import"./Text-BkfOg5_y.js";import"./RSPContexts-BL3sWo_M.js";import"./Group-Bas3MU3M.js";import"./useControlledState-_nq-pl6I.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BiDsHsN_.js";import"./useField-BkZnRozU.js";import"./TextField.module-DdivwlC8.js";import"./search-JF2kdrnR.js";import"./createLucideIcon-rLeAgfXY.js";import"./x-C-2CBxKx.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Button-CsNSTQ8W.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B42_LAgy.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
