import{S as i}from"./SearchField-4cVQ6r2t.js";import"./iframe-DLmeXnKv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ClLZ4yi-.js";import"./clsx-B-dksMZM.js";import"./Form-D9z8hvZj.js";import"./useFocusRing-Chec2SQM.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./Input-CcIXyW6y.js";import"./Hidden-DYR-bjkD.js";import"./Button-6oEuMc47.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./FieldError-BpDzH8Cd.js";import"./Text-as2Y-4wz.js";import"./clsx-Ciqy0D92.js";import"./Text-ByAHNZXR.js";import"./RSPContexts-DA-h5R_C.js";import"./Group-CuXfT3dh.js";import"./useControlledState-B3HwZ_qH.js";import"./useLocalizedStringFormatter-CjQq4jGT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEsTiIX_.js";import"./useField-C-J_0N0F.js";import"./TextField.module-DdivwlC8.js";import"./search-DRveudN0.js";import"./createLucideIcon-Cb9jSIDP.js";import"./x-WR_Pezhl.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./Button-CmoC0nDS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BCbNtM-G.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
