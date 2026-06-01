import{S as i}from"./SearchField-BokaxkIv.js";import"./iframe-Dnz7kUlg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAf_-pht.js";import"./clsx-B-dksMZM.js";import"./Form-W54koQxt.js";import"./useFocusRing-Dzszu2Vy.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./Input-C2nOYIfl.js";import"./Hidden-kcU4Hzb8.js";import"./Button-C6iHgC9P.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./FieldError-BH1ucUfl.js";import"./Text-B5WBJ4QI.js";import"./clsx-Ciqy0D92.js";import"./Text-CtOjX911.js";import"./RSPContexts-Cp-T_kgY.js";import"./Group-DG0Y1mio.js";import"./useControlledState-Iqz0lmAp.js";import"./useLocalizedStringFormatter-DwxYp_RG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-G04DdbQ9.js";import"./useField-DK5iQm1y.js";import"./TextField.module-DdivwlC8.js";import"./search-BfsmH-4w.js";import"./createLucideIcon-C7dFuUAn.js";import"./x-68yJIKBo.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./Button-DP2JC875.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dm7meOkg.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
