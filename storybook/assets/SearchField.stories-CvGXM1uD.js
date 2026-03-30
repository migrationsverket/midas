import{S as i}from"./SearchField-BPZ13i7k.js";import"./iframe-DI52Qlo4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-urtsDcnm.js";import"./clsx-B-dksMZM.js";import"./Form-BX2Kgv4V.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./Input-B264emcI.js";import"./Hidden-CscT1sly.js";import"./Button-eSR4bLK4.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./FieldError-CSuZWyFo.js";import"./Text-C_RzDhoB.js";import"./clsx-Ciqy0D92.js";import"./Text-D2edba9r.js";import"./RSPContexts-CrMRLfkl.js";import"./Group-BrGteZuE.js";import"./useControlledState-CLoU2XYC.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbfOCGrE.js";import"./useField-Da8HQzfP.js";import"./TextField.module-DdivwlC8.js";import"./search-UyV_xQyC.js";import"./createLucideIcon-Bf3dyCX1.js";import"./x-B7Z7gY9k.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./Button-3POgXEp-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ct-vZpQ3.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
