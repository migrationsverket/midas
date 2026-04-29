import{S as i}from"./SearchField-D9jCIAkf.js";import"./iframe-D2jWlRbY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgILje6T.js";import"./clsx-B-dksMZM.js";import"./Form-CrsOPGrC.js";import"./useFocusRing-DCfgz9z-.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./Input-D-UT_ZU8.js";import"./Hidden-BQ9eCogI.js";import"./Button-C20mW5cN.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./FieldError-BlwhWSc6.js";import"./Text-BlnXWmBt.js";import"./clsx-Ciqy0D92.js";import"./Text-dwHB4N6Q.js";import"./RSPContexts-DBHxiWWN.js";import"./Group-CuzXyiPi.js";import"./useControlledState-TsNhVwVg.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3Jer9O5.js";import"./useField-DthL3lsX.js";import"./TextField.module-DdivwlC8.js";import"./search-BSbAp5Gs.js";import"./createLucideIcon-3nESSKIe.js";import"./x-CXavF2G1.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Button-Cx6hm3Pz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DcHq__qP.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
