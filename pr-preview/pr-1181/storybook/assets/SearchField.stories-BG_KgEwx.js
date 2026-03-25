import{S as i}from"./SearchField-DNZxEacD.js";import"./iframe-BP7DzUIh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./Form-BAJVgpQE.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./Input-CXA6qDBj.js";import"./Hidden-DlKvXDgO.js";import"./Button-yD28QKfx.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C6QCLAD1.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./RSPContexts-C286y1L4.js";import"./Group-DxEw32Ds.js";import"./useControlledState-B7al1qBg.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJ5rsHJP.js";import"./useField-p1IS5Xfo.js";import"./TextField.module-DdivwlC8.js";import"./search-CkYbVup_.js";import"./createLucideIcon-zXtIRWL6.js";import"./x-BKCqd2ot.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CFJkh_29.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
