import{S as i}from"./SearchField-Bt-ncPOw.js";import"./iframe-DsyUTAcE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BnWDXxML.js";import"./clsx-B-dksMZM.js";import"./Form-CGaVeMLz.js";import"./useFocusRing-Cx6ToNCy.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./Input-Cmaom0ys.js";import"./Hidden-C6TlAeVz.js";import"./Button-CyvfdMVt.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./FieldError-CUL53TAh.js";import"./Text-BcSWoPTn.js";import"./clsx-Ciqy0D92.js";import"./Text-BbelKnYK.js";import"./RSPContexts-Bq3W9l8U.js";import"./Group-fE0kJLiO.js";import"./useControlledState-CUD0SDj1.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CXj02fYa.js";import"./useField-CZQg1P7z.js";import"./TextField.module-DdivwlC8.js";import"./search-BzLI8Z_u.js";import"./createLucideIcon-BXEX14cZ.js";import"./x-zGwK5Qc9.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Button-D3VEHZPU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hue3FDJw.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
