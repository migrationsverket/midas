import{S as i}from"./SearchField-D-GdEC0U.js";import"./iframe-B8dODSM7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKhPm4Nt.js";import"./clsx-B-dksMZM.js";import"./Form-fEW4gPte.js";import"./useFocusRing-DKQkST-P.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./Input-BX1nKMCU.js";import"./Hidden-DILkQdFQ.js";import"./Button-CEvb2_wi.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./FieldError-Cs03i1ku.js";import"./Text-CIOHcKum.js";import"./clsx-Ciqy0D92.js";import"./Text-DyDE_nMf.js";import"./RSPContexts-CqliKkX6.js";import"./Group-3gZKcWTc.js";import"./useControlledState-DhH3lMF6.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCIzyEOQ.js";import"./useField-BdHAuGxs.js";import"./TextField.module-DdivwlC8.js";import"./search-C0dwNN1Y.js";import"./createLucideIcon-7ECh1RW_.js";import"./x-DX19Ur0q.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Button-BGOYT3gN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Csntf2Wj.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
