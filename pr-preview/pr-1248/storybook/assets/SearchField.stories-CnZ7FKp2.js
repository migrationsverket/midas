import{S as i}from"./SearchField-BxgoCkF6.js";import"./iframe-W4nJ5fCl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BMpeEmxJ.js";import"./clsx-B-dksMZM.js";import"./Form-woZLC3Si.js";import"./useFocusRing-CHaZCxXN.js";import"./index-DEBoppYt.js";import"./index-rtxYMlVc.js";import"./Input-D_GS_qQW.js";import"./Hidden-DgKJ7wvz.js";import"./Button-C7OXJw6w.js";import"./useLabel-BQqoQBPd.js";import"./useLabels-PCa51qdN.js";import"./useButton-CuGrHjI5.js";import"./FieldError-D3aP5cbk.js";import"./Text-7uFUvoRD.js";import"./clsx-Ciqy0D92.js";import"./Text-AfrZysmO.js";import"./RSPContexts-C3FuW2H8.js";import"./Group-Dyp7XMR1.js";import"./useControlledState-C1a0SOin.js";import"./useLocalizedStringFormatter-C2aEMzMq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BO0L5qHJ.js";import"./useField-BdE6-JOU.js";import"./TextField.module-DdivwlC8.js";import"./search-D9X1e7si.js";import"./createLucideIcon-DlNL3tyz.js";import"./x-DAORPWxu.js";import"./useLocalizedStringFormatter-B3mguR4f.js";import"./Button-Ic5TYFB0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6HiRHb8s.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
