import{S as i}from"./SearchField-BWPX_HlQ.js";import"./iframe-CYMOtnaz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-wUxoB9ir.js";import"./clsx-B-dksMZM.js";import"./Form-Du2tCOQl.js";import"./useFocusRing-CwRM3IeC.js";import"./index-gQkc5_3S.js";import"./index-CgeMnncj.js";import"./Input-DcIGuH4w.js";import"./Hidden-Cz8fAyFr.js";import"./Button-BHjHxOR2.js";import"./useLabels-DGXXfaIh.js";import"./useButton-gRqqNsAA.js";import"./FieldError-D0kgyG-u.js";import"./Text-CTFGmnLZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CNTYAXo6.js";import"./RSPContexts-DG-Na64u.js";import"./Group-Bs_qGsPS.js";import"./useControlledState-COdBOBxc.js";import"./useLocalizedStringFormatter-CScStZ9F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DhV61DkG.js";import"./useField-BwIVoBkH.js";import"./TextField.module-DdivwlC8.js";import"./search-BpbEq9Fu.js";import"./createLucideIcon-CzbXkqnk.js";import"./x-DHZ4jav5.js";import"./useLocalizedStringFormatter-Dv9n-TJG.js";import"./Button-e1fZ-j-W.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DOc_oGUX.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
