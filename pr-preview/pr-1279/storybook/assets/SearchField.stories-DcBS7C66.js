import{S as i}from"./SearchField-CgpDBfsV.js";import"./iframe-Dzhbyx-V.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CB1YxmUd.js";import"./clsx-B-dksMZM.js";import"./Form-D-cIW_uQ.js";import"./useFocusRing-DJW4L7nP.js";import"./index-GOgi-yIv.js";import"./index-C7t27xFG.js";import"./Input-DvtTB9MK.js";import"./Hidden-CFP4Nw8t.js";import"./Button-CBTAD5ia.js";import"./useLabel-Cr2tVHj4.js";import"./useLabels-Dn3VJT3c.js";import"./useButton-ZzDTgbRW.js";import"./FieldError-BKbX9qzJ.js";import"./Text-B9yiudZO.js";import"./clsx-Ciqy0D92.js";import"./Text--lu7STeo.js";import"./RSPContexts-BZBUf3ht.js";import"./Group-BeMwF-ca.js";import"./useControlledState-BsGPn7dI.js";import"./useLocalizedStringFormatter-D1IY3EM8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5k5GhGk.js";import"./useField-DQZemjAW.js";import"./TextField.module-DdivwlC8.js";import"./search-BDxQqsJE.js";import"./createLucideIcon-Daz74Vgk.js";import"./x-Daz8ULC7.js";import"./useLocalizedStringFormatter-CZwJWfDJ.js";import"./Button-DVuadbrT.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BTnUWvIm.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
