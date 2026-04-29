import{S as i}from"./SearchField-DiFK2oIO.js";import"./iframe-HOh296WD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZ8gsIC2.js";import"./clsx-B-dksMZM.js";import"./Form-MZ71z1xz.js";import"./useFocusRing-DYVJSnUE.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./Input-DB_-mc8n.js";import"./Hidden-Cnam6lCF.js";import"./Button-WtWoZgXq.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./FieldError-D6lU0Pje.js";import"./Text-B6416v9E.js";import"./clsx-Ciqy0D92.js";import"./Text-Bv9eh8EN.js";import"./RSPContexts-d4Cds5di.js";import"./Group-HvG2Yti2.js";import"./useControlledState-Bg0Nqr_y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChoDBSx4.js";import"./useField-BFtU-cbq.js";import"./TextField.module-DdivwlC8.js";import"./search-Dfphk_Db.js";import"./createLucideIcon-NVlRk-Ze.js";import"./x-DOfhN6f-.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Button-BYcFvZWu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9pq-kak.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
