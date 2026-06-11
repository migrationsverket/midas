import{S as i}from"./SearchField-DaoLyyMy.js";import"./iframe-DsPZ3k2a.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVRplGTm.js";import"./clsx-B-dksMZM.js";import"./Form-DPGlfzHu.js";import"./useFocusRing-Cuzdmb74.js";import"./index-CaIK6bHz.js";import"./index-SpvYX93F.js";import"./Input-BVL5fXpA.js";import"./Hidden-vFz_M5_3.js";import"./Button-1ibsdlM-.js";import"./useLabel-CBpqBZPr.js";import"./useLabels-BLAf1Pjr.js";import"./useButton-td_Mid3P.js";import"./FieldError-B7hNQFWR.js";import"./Text-Dz2dRBNa.js";import"./clsx-Ciqy0D92.js";import"./Text-DD5LVeyW.js";import"./RSPContexts-CozbcOE6.js";import"./Group-BuYea3no.js";import"./useControlledState-Ynphlhkh.js";import"./useLocalizedStringFormatter-BhAe1Cmu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yGIkuG_W.js";import"./useField-stTvCyM3.js";import"./TextField.module-DdivwlC8.js";import"./search-CFT3DI3G.js";import"./createLucideIcon-DFP7Vl1t.js";import"./x-B1yKqvoC.js";import"./useLocalizedStringFormatter-B_4X81TH.js";import"./Button-uXogGJvd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BoP7uW4X.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
