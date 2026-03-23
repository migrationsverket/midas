import{S as i}from"./SearchField-D0iNmDhL.js";import"./iframe-RTTcOKWo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D1hKCylV.js";import"./clsx-B-dksMZM.js";import"./Form-CAZPrwu9.js";import"./useFocusRing-BPdF-1cC.js";import"./index-DLoD3cgP.js";import"./index-DFgDWFo1.js";import"./Input-nUyzNltC.js";import"./Hidden-8U697ZOC.js";import"./Button-By1VqlsU.js";import"./useLabels-CVDdXQg_.js";import"./useButton-BYzzGwzi.js";import"./FieldError-CpMxr9c5.js";import"./Text-C6b-YPN0.js";import"./clsx-Ciqy0D92.js";import"./Text-DuBji0m4.js";import"./RSPContexts-CSsrJs75.js";import"./Group-CBwj47Ak.js";import"./useControlledState-BfNYqLEH.js";import"./useLocalizedStringFormatter-Dp6tEqIr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRubpvpR.js";import"./useField-SLaCYCL4.js";import"./TextField.module-DdivwlC8.js";import"./search-CQjFXlzc.js";import"./createLucideIcon-D2PeHOHn.js";import"./x-BEn0c19g.js";import"./useLocalizedStringFormatter-Cqxl6r8R.js";import"./Button-EZmHrLhm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dmb8KXLU.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
