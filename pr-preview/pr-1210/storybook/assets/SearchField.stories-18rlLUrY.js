import{S as i}from"./SearchField-B-9RJ1_a.js";import"./iframe-Br4UFWDA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bfs2iwu7.js";import"./clsx-B-dksMZM.js";import"./Form-CWMb433o.js";import"./useFocusRing-DmF-1uRF.js";import"./index-B5OjJHm8.js";import"./index-BLvyQ4Zy.js";import"./Input-lThwDmnZ.js";import"./Hidden-B2UqZyG9.js";import"./Button-DiwUVhQg.js";import"./useLabel-PuL03Jmv.js";import"./useLabels-CD31_qda.js";import"./useButton-BuJxASXi.js";import"./FieldError-ClRId_ZV.js";import"./Text-DBKCtpuc.js";import"./clsx-Ciqy0D92.js";import"./Text-C3N7Tmxi.js";import"./RSPContexts-BSDVlP-T.js";import"./Group-DsZ3dfjF.js";import"./useControlledState-t0OgLn8n.js";import"./useLocalizedStringFormatter-BYNBY8Ij.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKqNJEUK.js";import"./useField-CFxXU3Kh.js";import"./TextField.module-DdivwlC8.js";import"./search-Baj1-MXW.js";import"./createLucideIcon-CSxAjQ3c.js";import"./x-BCbyNW7r.js";import"./useLocalizedStringFormatter-B9cG3ozx.js";import"./Button-B62uNfEE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BnWQuQpu.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
