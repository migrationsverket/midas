import{S as i}from"./SearchField-DPoNaOOt.js";import"./iframe-DFebKffn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-J_OqfxpN.js";import"./clsx-B-dksMZM.js";import"./Form-nCobm3CY.js";import"./useFocusRing-C3NPJWuR.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./Input-YR7zVes6.js";import"./Hidden-BATde4xQ.js";import"./Button-BZDCT8jS.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./FieldError-CqV6hYY3.js";import"./Text-jpnaKsAZ.js";import"./clsx-Ciqy0D92.js";import"./Text-B-BzwR12.js";import"./RSPContexts-Cvf_UqQA.js";import"./Group-DEOBuZSS.js";import"./useControlledState-BBnpHgMO.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRtvC267.js";import"./useField-B521Xtuh.js";import"./TextField.module-DdivwlC8.js";import"./search-DMuNiEtc.js";import"./createLucideIcon-eIhYDTFQ.js";import"./x-udLSc6dJ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Button-CAFfH1xQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-J2xwiqaN.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
