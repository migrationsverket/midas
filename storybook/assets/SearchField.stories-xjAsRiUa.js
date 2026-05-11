import{S as i}from"./SearchField-Cx83bUen.js";import"./iframe-CLvF6Z40.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJoHmjoo.js";import"./clsx-B-dksMZM.js";import"./Form-H5Vy5h3q.js";import"./useFocusRing-DA8pMfhu.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./Input-CW2TDEkD.js";import"./Hidden-DDGoYcTF.js";import"./Button-IXlIqRd7.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./FieldError-VeyWLyeT.js";import"./Text-D9kACuMI.js";import"./clsx-Ciqy0D92.js";import"./Text-DSAnxviu.js";import"./RSPContexts-CTL5xx9Q.js";import"./Group-CF1mdGZd.js";import"./useControlledState-aZqY8xT5.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5r6PF3z.js";import"./useField-BiXCEzZa.js";import"./TextField.module-DdivwlC8.js";import"./search-Brk4r-By.js";import"./createLucideIcon-BkSuVCZc.js";import"./x-DROlonvj.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Button-CVKy4fAF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ckm5OILG.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
