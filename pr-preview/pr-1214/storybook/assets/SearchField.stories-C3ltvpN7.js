import{S as i}from"./SearchField-Br5IbuSC.js";import"./iframe-eIKe2X_m.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoPGT07A.js";import"./clsx-B-dksMZM.js";import"./Form-BbvKGnjc.js";import"./useFocusRing-ChUuwE-2.js";import"./index-DYK-fZpj.js";import"./index-DgJxkeaR.js";import"./Input-Dfdq0cPF.js";import"./Hidden-CXbku1y6.js";import"./Button-7V_IyEW5.js";import"./useLabel-BDJHN6yJ.js";import"./useLabels-CzQg4_Ye.js";import"./useButton-JGMEg_eW.js";import"./FieldError-xOrsoR1D.js";import"./Text-CiEoCLNV.js";import"./clsx-Ciqy0D92.js";import"./Text-CuxH_tBg.js";import"./RSPContexts-CbT1tTzu.js";import"./Group-CtPsluas.js";import"./useControlledState-CGyGwo-A.js";import"./useLocalizedStringFormatter-LPlwK2CH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CudkVjWt.js";import"./useField-DqbOOgGS.js";import"./TextField.module-DdivwlC8.js";import"./search-CIgLx815.js";import"./createLucideIcon-CLkqqabX.js";import"./x-Dk3bNdoj.js";import"./useLocalizedStringFormatter-C4qP-j6o.js";import"./Button-B-V9quu1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CSQH58ck.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
