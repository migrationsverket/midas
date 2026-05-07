import{S as i}from"./SearchField-n5VfhflK.js";import"./iframe-Dy3Rw66z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./Form-wengfQtM.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./Input-DYmzIH_X.js";import"./Hidden-BiAiu52X.js";import"./Button-DWNrJ0qN.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./FieldError-CRQYtwdw.js";import"./Text-CjiLEpJA.js";import"./clsx-Ciqy0D92.js";import"./Text-BOYOdsAw.js";import"./RSPContexts-C0IvGsnI.js";import"./Group-m_LNitHg.js";import"./useControlledState-CujSUpWY.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0gzukQn.js";import"./useField-CNgzpJU1.js";import"./TextField.module-DdivwlC8.js";import"./search-CBT_kppG.js";import"./createLucideIcon-CGcaihwO.js";import"./x-BY2wOibv.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ke2bwlqF.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
