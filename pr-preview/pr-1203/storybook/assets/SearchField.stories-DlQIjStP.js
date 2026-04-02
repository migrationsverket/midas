import{S as i}from"./SearchField-BsRUWf4E.js";import"./iframe-AjHIFKYL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQ53D7f7.js";import"./clsx-B-dksMZM.js";import"./Form-Bb5IqlHO.js";import"./useFocusRing-CvHv-Osy.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./Input-DEbCu7yq.js";import"./Hidden-Ciub7nFQ.js";import"./Button-C1DU2kQ0.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./FieldError-7pShLjHw.js";import"./Text-CCR6G686.js";import"./clsx-Ciqy0D92.js";import"./Text-pxITg1r8.js";import"./RSPContexts-CcA2FC2H.js";import"./Group-CRjLRbbz.js";import"./useControlledState-DTh410_S.js";import"./useLocalizedStringFormatter-BzByLjfh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CG6uFKFc.js";import"./useField-agvh2JV_.js";import"./TextField.module-DdivwlC8.js";import"./search-BIRaXTgM.js";import"./createLucideIcon-D_tC-MWH.js";import"./x-DuRIyyoz.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./Button-BEq-_IjI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-iv4jmUvN.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
