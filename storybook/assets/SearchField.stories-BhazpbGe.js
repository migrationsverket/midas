import{S as i}from"./SearchField-CJx9bWiw.js";import"./iframe-B1eD605p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BOUcnJoC.js";import"./clsx-B-dksMZM.js";import"./Form-TOmJuLrj.js";import"./useFocusRing-D_OiBDkF.js";import"./index-BWkRMe8I.js";import"./index-TufsVr0_.js";import"./Input-A65XN-IN.js";import"./Hidden-B3lfQGCO.js";import"./Button-DMefbg_Z.js";import"./useLabel-D7VH59ae.js";import"./useLabels-BD-zpGYP.js";import"./useButton-B9teiuVu.js";import"./FieldError-DNdCu579.js";import"./Text-DAxM1VuH.js";import"./clsx-Ciqy0D92.js";import"./Text-EI0dskfY.js";import"./RSPContexts-Dl1zhDr2.js";import"./Group-DXiXxn5F.js";import"./useControlledState-DOfAUcES.js";import"./useLocalizedStringFormatter-BVzW25Bt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN1OkKY_.js";import"./useField-BEBUG3LI.js";import"./TextField.module-DdivwlC8.js";import"./search-BmBZ-tGO.js";import"./createLucideIcon-B1NmALCH.js";import"./x-hYuZlWGy.js";import"./useLocalizedStringFormatter-CLR4R1lI.js";import"./Button-vXlcn_Zz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_M3vS6z.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
