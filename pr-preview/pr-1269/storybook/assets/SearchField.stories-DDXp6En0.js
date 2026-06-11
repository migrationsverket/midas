import{S as i}from"./SearchField-C0HXgpZu.js";import"./iframe-DLIfUtVm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DijK3BhG.js";import"./clsx-B-dksMZM.js";import"./Form-BSZhUe1f.js";import"./useFocusRing-B-eRA-0U.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./Input-BzY6P365.js";import"./Hidden-gQ2c-O38.js";import"./Button-DjhlSD9p.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./FieldError-BHIohEsL.js";import"./Text-BOHNy1km.js";import"./clsx-Ciqy0D92.js";import"./Text-CpkwsxmM.js";import"./RSPContexts-D91XMIa7.js";import"./Group-ckdiMqG1.js";import"./useControlledState-TKTqriB6.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgzQ8hLd.js";import"./useField-DQBV-Tta.js";import"./TextField.module-DdivwlC8.js";import"./search-OT6jlGdg.js";import"./createLucideIcon-D_WvFzuZ.js";import"./x-DxaaQwzc.js";import"./useLocalizedStringFormatter-vmL8Qz6d.js";import"./Button-C_w78fqJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B6pFoD4c.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
