import{S as i}from"./SearchField-Ceirlj0A.js";import"./iframe-BNcGdhPn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BPT-EsfX.js";import"./clsx-B-dksMZM.js";import"./Form-BiZUbCcr.js";import"./useFocusRing-Cu9nwss3.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./Input-Btp2H53i.js";import"./Hidden-D26ysej5.js";import"./Button-CSPLOvS6.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./FieldError-CFxnUxOD.js";import"./Text-Dc9-vgHL.js";import"./clsx-Ciqy0D92.js";import"./Text-CjSndq1s.js";import"./RSPContexts-DHoclz_N.js";import"./Group-Dtrx9Ex4.js";import"./useControlledState-BMDHyIEM.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bp3odHt0.js";import"./useField-3oXs5MuB.js";import"./TextField.module-DdivwlC8.js";import"./search-DXWwGfR8.js";import"./createLucideIcon-CIzIYBm5.js";import"./x-Cn8Z5y6x.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Button-BgPh4XDv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BrOw3xQL.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
