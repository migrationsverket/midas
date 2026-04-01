import{S as i}from"./SearchField-Diu4Psxr.js";import"./iframe-BBdvX6q7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhM9cLZz.js";import"./clsx-B-dksMZM.js";import"./Form-BdaOdDWJ.js";import"./useFocusRing-CiIiFeie.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./Input-BLzkoyeG.js";import"./Hidden-BOrCZM9C.js";import"./Button-Dzf67HgD.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./FieldError-W4WIQ6PE.js";import"./Text-DFmdAipG.js";import"./clsx-Ciqy0D92.js";import"./Text-DZB5jszh.js";import"./RSPContexts-Dhr-dkrR.js";import"./Group-C6QOXau-.js";import"./useControlledState-DuJYRQSo.js";import"./useLocalizedStringFormatter-Be9Ugeet.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnMCpGV2.js";import"./useField-cJot5tll.js";import"./TextField.module-DdivwlC8.js";import"./search-BkNoydza.js";import"./createLucideIcon-Bf-KaMYu.js";import"./x-KAA9DnbB.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./Button-DCS9i38V.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUp-onp8.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
