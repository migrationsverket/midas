import{S as i}from"./SearchField-DhCuyaDJ.js";import"./iframe-CCfLQD4z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-6cPY1nOj.js";import"./clsx-B-dksMZM.js";import"./Form-DhfgivJc.js";import"./useFocusRing-EcVjUqlw.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./Input-Bqf6rAoJ.js";import"./Hidden-DWjl7TwO.js";import"./Button-CmCCWuSi.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./FieldError-DW0YkXyi.js";import"./Text-GlhP0ZNt.js";import"./clsx-Ciqy0D92.js";import"./Text-DZ79u1iH.js";import"./RSPContexts-CsNweyO-.js";import"./Group-DtvfQHam.js";import"./useControlledState-Dk8QnFuU.js";import"./useLocalizedStringFormatter-BA4949mp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CuX06wNe.js";import"./useField-CFZKlJFB.js";import"./TextField.module-DdivwlC8.js";import"./search-rpvcOvpP.js";import"./createLucideIcon-DWEKCqmg.js";import"./x-Bib5fKG4.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./Button-DJVlOFkK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BkMvzT9s.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
