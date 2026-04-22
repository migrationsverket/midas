import{S as i}from"./SearchField-Bah4Vi23.js";import"./iframe-CYBQlmyh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CjHCv0XO.js";import"./clsx-B-dksMZM.js";import"./Form-CG88XjbO.js";import"./useFocusRing-Cpo9J0gL.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./Input-BAaIFmf5.js";import"./Hidden-CqWz7xzF.js";import"./Button-BOrWC_ny.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./FieldError-BU-DnlRI.js";import"./Text-CXwGYn4Y.js";import"./clsx-Ciqy0D92.js";import"./Text-B63Qy0n5.js";import"./RSPContexts-BhOh3g1F.js";import"./Group-B2xH6Tb7.js";import"./useControlledState-bAyCG7NY.js";import"./useLocalizedStringFormatter-DjA_iZCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DjQ_SLXH.js";import"./useField-oiS_17BV.js";import"./TextField.module-DdivwlC8.js";import"./search-kjZMO9qm.js";import"./createLucideIcon-CC51vNZq.js";import"./x-J2AEua27.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./Button-V8iqrR4o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCVaQ010.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
