import{S as i}from"./SearchField-BEV7dqXo.js";import"./iframe-QXqfLk9Z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dggx2A6b.js";import"./clsx-B-dksMZM.js";import"./Form-CvFTFOS9.js";import"./useFocusRing-BiM2zrLV.js";import"./index-C07zKFPd.js";import"./index-C1BcpjW_.js";import"./Input-OMFgtILA.js";import"./Hidden-BI9BX3f7.js";import"./Button-66KmAdCV.js";import"./useLabel-BM1McJfg.js";import"./useLabels-Chfv84nV.js";import"./useButton-CGi5uJBG.js";import"./FieldError-CFf5Jtc5.js";import"./Text-By_cFIOS.js";import"./clsx-Ciqy0D92.js";import"./Text-CFRxdyIy.js";import"./RSPContexts-DJB4f0eu.js";import"./Group-COkufXAs.js";import"./useControlledState-Bn462BK_.js";import"./useLocalizedStringFormatter-BHMdmhnJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CXinp14V.js";import"./useField-Do9vNT6o.js";import"./TextField.module-DdivwlC8.js";import"./search-BBResTux.js";import"./createLucideIcon-DWZDC5UL.js";import"./x-Bafa4ygD.js";import"./useLocalizedStringFormatter-CnCt5dkn.js";import"./Button-D4lkIHuh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPFiO8Sa.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
