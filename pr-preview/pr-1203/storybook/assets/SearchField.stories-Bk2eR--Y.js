import{S as i}from"./SearchField-vsiW4-hd.js";import"./iframe-BQjBM75C.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BSV0ImVH.js";import"./clsx-B-dksMZM.js";import"./Form-BapHbVlL.js";import"./useFocusRing-gicmbIfS.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./Input-0cyk7DqD.js";import"./Hidden-DsiXMF_M.js";import"./Button-CleE5i4u.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./FieldError-DR3ilOc-.js";import"./Text-ByOtvKGn.js";import"./clsx-Ciqy0D92.js";import"./Text-CSQrQWbM.js";import"./RSPContexts-ifp6jpNf.js";import"./Group-DeIYa1Er.js";import"./useControlledState-C34v6o9-.js";import"./useLocalizedStringFormatter-1UgPp4Q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-05yk7D0M.js";import"./useField-zeoSjeSc.js";import"./TextField.module-DdivwlC8.js";import"./search-Dv63to9O.js";import"./createLucideIcon-CfIBoofS.js";import"./x-CzDTAgEv.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./Button-BrUsIHUW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DUlqTjt1.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
